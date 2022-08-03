import React, { Component } from 'react'
import './styles.css'
import'../../resources/2.jpg'
import images from '../../resources/9.jpg'
import Logo from '../../resources/WhatsApp Image 2022-07-29 at 9.05.07 AM.jpeg'
// import {Link} from "react-router-dom";

export class Toppage extends Component {
  render() {
    return (
      <div  className='Toppage'>
        <div className="top-page">
        
          </div>
          <div className='content'>
            <div className='Logo'>
              <img className='Logo' src={Logo} alt=''></img>
            </div>
            <h1 id='Youth'>Youth Touch Rwanda</h1>
          <p> Whether you’re looking to better understand your feelings or experiencing anxiety, depression, 
            or high levels of stress, Youth Touch is designed to help you feel better. meet friends, come as you are,express yourlself and feel belong🤗🤗</p> 

             <a href='#Read'>Read More→ </a>
             </div>
             <div className="left-picture">
              <img className="image" src={images} alt=""></img>
              
              
              </div>
              <div className='blue'>
                {/* <img className='blue' src={blue} alt=""></img> */}
              </div>
          </div>
          

    )
  }
}

export default Toppage