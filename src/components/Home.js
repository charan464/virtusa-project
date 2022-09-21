import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import { Card,Button ,Form,FormText, Toast} from 'react-bootstrap'
import { useState,useRef } from 'react'
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

function Home() {

  const form = useRef();

  const [firstname,setFirstName]=useState("");
  const [middleName,setMiddleName]=useState("");
  const [lastname,setLastName]=useState("");
  const [email,setEmail]=useState("");



  const sendEmail=(e)=>{
    e.preventDefault();

    if(!firstname||!lastname||!email)
          {
                toast.error("Fill all the required fields");
          }

          else{

    emailjs.sendForm('service_pnzzwnz', 'template_8zsenzm', form.current, '4Ctb_sqQaySydPYc-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      toast.success("Check your mail");
    }
      
  }


  return (
    <div >
      <Navbar/>

      <div  className='home' style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <h1>Generate Your Mail Id</h1>
      <Card   className='card-home'>
      <Card.Body>

          <form  ref={form} >
          <div class="form-group row">
       <label  for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm mb-3">Email
       <b className='req'> *</b>
       </label>
        <div class="col-sm-10">
        <input type="email"  onChange={e=>{setEmail(e.target.value)}} class="form-control form-control-sm"   placeholder='enter email address' name='email' />
        </div>
        </div>
        <div class="form-group row">
        <label  for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm mb-3">First Name
        <b className='req'> *</b>
        </label>
        <div class="col-sm-10">
        <input type="text"  onChange={e=>{setFirstName(e.target.value)}} class="form-control form-control-sm" placeholder='enter first name'  name='first_name'/>
        </div>
        </div>
        <div class="form-group row">
        <label  for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm mb-3"> Middle Name
        </label>
        <div class="col-sm-10">
        <input type="text"   onChange={e=>{setMiddleName(e.target.value)}}  class="form-control form-control-sm" placeholder='enter middle name'  name='middle_name'/>
        </div>
        </div>
        <div class="form-group row">
        <label  for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm mb-3">Last Name
        <b className='req'> *</b>
        </label>
        <div class="col-sm-10">
        <input type="text"   onChange={e=>{setLastName(e.target.value)}} class="form-control form-control-sm" placeholder='enter last name' name="last_name" />
        </div>
        </div><br></br>
       
        </form>

        <button  class="btn btn-primary "  onClick={sendEmail} >Submit</button>




      </Card.Body>
    </Card>
    </div>

    <ToastContainer/>

    </div>
  )
}

export default Home
