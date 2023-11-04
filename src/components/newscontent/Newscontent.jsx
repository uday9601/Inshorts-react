import { Container } from '@mui/material'
import React from 'react'
import './Newscontent.css'
import Newscard from '../newscard/Newscard'

const Newscontent = ({newsarray,newsresults,loadmore,setloadmore}) => {
  return (
    <Container maxWidth="md">
        <div className='content'>
        <div className='downloadmessage'>
<span className='downloadtext'>For the best experience use inshorts app on your smartphone </span>
<a href="https://apps.apple.com/us/app/inshorts/id892146527">
<img height={"30px"} src="https://assets.inshorts.com/website_assets/images/appstore.png" alt="appstore" />
</a>
<a href="https://play.google.com/store/apps/details?id=com.nis.app&referrer=utm_source%3DNews%2520In%2520Shorts%2520Website">
<img height={"30px"} src="https://assets.inshorts.com/website_assets/images/playstore.png" alt="googleplay" />
</a>

        </div>
       {
        newsarray.map((newsItem)=>(
           <Newscard newsItem={newsItem} key={newsItem.title}/>
        ))
       }

       {loadmore<=newsresults && 
       <>
        <hr />
<button className='loadmore' >Load more</button>
       </>}
          
        </div></Container>
  )
}

export default Newscontent