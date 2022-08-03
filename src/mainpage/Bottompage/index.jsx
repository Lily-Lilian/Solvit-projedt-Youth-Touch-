import React, { Component } from 'react'
import img from '../../resources/2.jpg'
import pic from '../../resources/1.jpg'
import picture from '../../resources/6.jpg'
import './styles..css'
const data1  ={
  imagesrc:img,
  name:'Online Therapy'
}

const data2={
  imagesrc:pic,
  name:'Medical Facilities'

}
const data3
={
  imagesrc:picture,
  name:'Solution'

}

class BottomBluePrint extends Component {
  render() {
    return (
      <div className='Bottompage'>
        
        <div id="image-name">
          <span1><img className='second-img' src={this.props.imageSrc} alt=""></img></span1>
          <h1 id='name1'>{this.props.name}</h1>
          {/* Online Therapy */}
        </div>
        {/* <div>
          <img className='third-img' src={picture} alt=""></img>
          <h1  id='name2'>Medical Facilities</h1>
        </div> */}
        {/* <div>
          <img className='first-img' src={img} alt=""></img>
          <h1 id='name3'>Solution</h1>
        </div> */}
      
       
        
        
        
      </div>
     
     
    )
  }
}

class Bottom extends React.Component{
  render(){
    return(
     
      <div>
        <h1 className='title'>Our services</h1>
        <div className='Images'>
        <BottomBluePrint imageSrc={data1.imagesrc} name={data1.name}/>
        <BottomBluePrint imageSrc={data2.imagesrc} name={data2.name}/>
        <BottomBluePrint imageSrc={data3.imagesrc} name={data3.name}/>
        </div>
      </div>
    
    );
  }
} 

export default Bottom;