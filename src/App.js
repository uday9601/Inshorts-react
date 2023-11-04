import React, { useEffect, useState } from 'react'
import Navinshorts from './components/Navinshorts'
import Newscontent from './components/newscontent/Newscontent'
import axios from 'axios'
import Footer from './components/footer/Footer'

const App = () => {
  let [category,setcategory]=useState("general")
  let [newsarray,setnewsarray]=useState([])
  let [newsresults,setnewsrwesults]=useState()
  let [loadmore,setloadmore]=useState(20)

 let newsapi= async()=>{
  try{
    let news= await axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2023-10-03&sortBy=publishedAt&apiKey=96f10ebe7d4e4aa9ac73fca38ffba66f&pageSize=${loadmore}`)
    setnewsarray(news.data.articles)
    setnewsrwesults(news.data.totalResults)
    console.log(news)
  }
  
  catch(err){
    console.log(err)
  }
 
 }
 
 useEffect(()=>{
newsapi()
 },[newsresults,category,loadmore])
  
 
  return (
    <div>
      <Navinshorts setcategory={setcategory}/>
      <Newscontent 
      setloadmre={setloadmore}
      loadmore={loadmore}
      newsarray={newsarray}
       newsresults={newsresults}/>
      <Footer/>
    </div>
  )
}

export default App