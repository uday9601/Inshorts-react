import React from 'react'
import './Newscard.css'
const Newscard = ({newsItem}) => {
    // console.log(newsItem)

    const fulldate=new Date(newsItem.publishedAt)
    var date=fulldate.toString().split(" ")
    const hour=parseInt(date[4].substring(0,2))
    const time=hour>12?true:false
  return (
    <div className='newscard'>
      <img src={newsItem.urlToImage?newsItem.urlToImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAAByCAMAAABa3242AAAAkFBMVEXu7u4REiRmZmby8vIAAAC/v8BfX1/19fWmpqbl5eV7e3uCgoLJycnQ0NBjY2MAABsAABhYWFjf398AABKLi4sLDCFfYGd+f4aOjpNYWGJwcXmTk5Ovr69tbW1RUVHY2NkbHCs+PkImJjAfICktLTtISFIkJTQMDBstLTY9PkeZmZ+3t7sXGCNQUFpoaHEAAAvP8L7OAAAB4klEQVRoge3W3ZKaMBiAYSBFFJAkYiCJ7q7tmlqwZO//7hr+KtoDZnYJzNjvRRnMAQ/E6OA4EARBEARBEARBEARB0H8eCsZDU6PBfjXeIZhaDePNWH40vbodmz8UP7eKBitoPtU/3oZnU/d0Rf1+fCYVbV89L/F6ai41pp7n0ZnUza473LysErqeR0Vh0rFodwiP86wmFK0Sr2fb/15kXTVovYR2w285RpbVBr1ng+i1Ye2pHTpk6yFas9bUv+iNbYdq1pY6QHs26IZoHNhSwwFq2GQX3K6D+oEdNbpD67t9GwzReGtDfURN5pc7uIjDfnI1ekn+QR+vwYI6inrJ06h09MGUTr6a0HE93nXyx/BFnv0hCIIgCIIgCIIgCIKeJLREjr9Ezrclctz7mNn6I3vV6sl1L4xdXIwZ+f7jHRNG3l33bFfF2anKzkpLVZ31Wl1/youOPCG+cFbGGGbdrv3QDpsNd6p7FrzK1a9MFJxwzsvsmoXx78/PMCuEal5Smd1JFUVVCK1llgspcoFb9YMrWelKa50VB15G67zcl5p8/laJLHMpecU1l7niOc9kIZUUIs9znZFWdQlu7r2ZkY80xSnB6ZcWU5qmhJjzmDOlzLzrFYNN5ojUU/y4hudpGfUPXD8ypbofn6UAAAAASUVORK5CYII="} 
      alt={newsItem.title} 
      className='newsimage'
      />
      <div className='newstext'>
<div>
  <span className='title'>{newsItem.title}</span>
  <span className='author'>
    <a href={newsItem.url} target='_blank'>
 <br /><b>short</b>
    </a>
    <span>
      by {newsItem.author? newsItem.author:"unknown"} /
    </span>
  </span>
</div>
<div className='lowernewstext'>
  <div className='description'>{newsItem.description}  </div>
<span className='readmore'>read more at
<a href={newsItem.url} target='_blank'>
  <b>{newsItem.source.name}</b>
</a>
</span>

</div>
      </div>
    </div>
  )
}

export default Newscard