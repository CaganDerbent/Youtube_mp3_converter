import React, { Component } from 'react'
import App from "../App"
import { useRef } from 'react'


export default class Content extends Component {

 
 
  render() {
    
    return (
      <div className='content'>
        <h1>Youtube to MP3 Converter</h1>
        <h3>Paste url link in textarea.</h3>
        <form onSubmit={handleSubmit} action="" className='form'>
          <input type="text" ref={inputUrlRef} id='text' placeholder='URL link' />
          <input type="submit" name="button" id="searchbutton" placeholder="Search"value={"Search"} />
        </form>
        <a href="" id='downloadbutton'>Download MP3 file <FontAwesomeIcon icon="fa-solid fa-download" /></a>
      </div>
    )
  }
}

