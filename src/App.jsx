import { useState } from 'react';
import './App.css'
import { ArticleList , ButtonList } from "./components";
import { useSelector } from "react-redux"

function App() {
  let articles = useSelector((state)=>state.article)

  // Pongo todas las categorias sin repetir en un array
  const allCategories = ['All', ...new Set(articles.map(article => article.category))]

  // creo un estado local para usar el filtrado
  const[filteredArticles, setFilteredArticles] = useState(articles)

  const filterCategory = (category)=>{
    if(category === 'All'){
      setFilteredArticles(articles)
      return
    }

    const articlesFiltered = articles.filter(article => article.category === category )
    setFilteredArticles(articlesFiltered)
  }
  return (
    <>
      <div className='title'>
        <h1 className='fs-1'>Filter <span className='text-primary'>Blog</span> Basics</h1>
        <img className='mx-auto d-block img-fluid' src="https://blogfilterbasics.netlify.app/static/media/img-portada.8261f3883a73550017d1.png" 
          alt="img-header" />
      </div>

      <ButtonList categories={allCategories} filterCategory = {filterCategory}/>
      <ArticleList articles={filteredArticles}/>
    </>
  )
  
}

export default App;

