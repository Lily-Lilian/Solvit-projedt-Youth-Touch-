import React from 'react';
import number from '../resources/contactus.png';
import './About/contact.css'

const Contact =() => {

    return (
    <>
   <div className='contact'>

    <img className='contact-us-image' src={number} alt=""></img>
    <h1 className='text-center'>Please fill in the form to reach out to our team </h1>
    
    <form className='form'>
        <label for='fname'>First Name</label>
    <input type='text' id='fname' name='firstname' placeholder='your name...'></input>
        <label for='lname'>Last Name</label>
    <input type='text' id='lname' name='Lastname' placeholder='your last name....'></input>
        <label for="Sector">Sector</label>
    <select id="Sector" name="sector">
      <option value="Gasabo">Gasabo</option>
      <option value="Nyarugenge">Nyarugenge</option>
      <option value="Kicukiro">Kicukiro</option>
    </select>

     <label for="subject">Subject</label>
     {/* <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea> */}
     <textarea id='subject' name="subject" placeholder='write something...' ></textarea>

   <input type="submit" value="Submit"></input>
    </form>



   </div>
    </>
    )
};

export default Contact;