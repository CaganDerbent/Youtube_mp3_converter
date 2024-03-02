import { useState } from 'react'
import './App.css'
import {useRef} from "react"
import axios from "axios"
import { youtube_parser } from './utils'
import Footer from './components/Footer'


// rapid API
// target='_blank' = new window  , rel='noreferrer'=no reference info

function App() {

  const KEY = import.meta.env.VITE_API_KEY;
  const HOST = import.meta.env.VITE_API_HOST;

  const inputUrlRef = useRef()
  const [urlResult,setUrlResult] = useState(null)

    const handleSubmit = (e)=>{
      e.preventDefault()
    
      console.log(inputUrlRef.current.value) // input value
      const youtubeID = youtube_parser(inputUrlRef.current.value)
      console.log(youtubeID) // url => id

      const options = {
        method: 'GET',
        url: 'https://youtube-mp36.p.rapidapi.com/dl',
        params: {id: youtubeID},
        headers: {
          'X-RapidAPI-Key': KEY,
          'X-RapidAPI-Host': HOST
        }
      };
   
      axios(options)
      .then(res => setUrlResult(res.data.link))
      .catch((err)=>{
        console.log(err)
      })
      inputUrlRef.current.value = ""
    }
  return (
    <div className='app'>
      <div className='navbar'><h2>mp3-converter</h2></div>
      <div className='content'>
        <h1>Youtube to MP3 Converter</h1>
        <h3>Paste url link in the text area.</h3>
        <form onSubmit={handleSubmit} action="" className='form'>
          <div className="inputarea">
          <input type="text" ref={inputUrlRef} id='text' placeholder='URL link' />
          <input type="submit" name="button" id="searchbutton" placeholder=''value={'Search'} />
          <i className="fa-solid fa-magnifying-glass" id='search'></i>
          </div>
          
        </form>
        {urlResult ? <a href={urlResult} target='_blank' rel='noreferrer' id='downloadbutton'><span>Download MP3 file</span> <i  id="download" className="fa-solid fa-download"></i></a>
        : null}
        <Footer/>
      </div>


    </div>
    
     
  )
}

export default App 

