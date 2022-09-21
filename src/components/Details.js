import React, { useState } from 'react'
import Navbar from './Navbar'
import { Card,Button ,Form,FormText, Toast} from 'react-bootstrap'
import './Details.css'
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reports = () => {


    const [date,setDate]=useState("");
    const [firstname,setFirstName]=useState("");
    const [middleName,setMiddleName]=useState("");
    const [lastname,setLastName]=useState("");
    const [mobilenumber,setMobileNumber]=useState("");
    const [email,setEmail]=useState("");
    const [alternatemobilenumber,setAlternateMobileNumber]=useState("");
    const [fathername,setFatherName]=useState("");
    const [fathermobilenumber,setFatherMobileNumber]=useState("");
    const [mothername,setMotherName]=useState("");
    const [mothermobilenumber,setMotherMobileNumber]=useState("");

    const handleSubmit=()=>
    {

      if(!firstname||!lastname||!email||!mobilenumber||!alternatemobilenumber||!date||!mothername||!fathername)
      {
          toast.error("fill all the details !!!");
      }

      else
      {
        toast.success("saved");
      }



         
    }



  return (
    <div ><Navbar/>
      <div   className='details' style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <h1>Personal Details</h1>
        <Card  className="card-details">
    <Card.Body>
    
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>First Name<FormText className="req">*</FormText></Form.Label>
        <Form.Control  required={true}   type="text" placeholder="Enter First Name"   onChange={e=>{setFirstName(e)}} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Middle Name</Form.Label>
        <Form.Control    type="text" placeholder="Enter Middle Name"  onChange={e=>{setMiddleName(e)}}  />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Last Name <FormText className="req">*</FormText></Form.Label>
        <Form.Control  required={true}   type="text" placeholder="Enter Last Name"   onChange={e=>{setLastName(e)}} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Personal Email<FormText className="req">*</FormText></Form.Label>
        <Form.Control  required={true}   type="email" placeholder="Enter email address"   onChange={e=>{setEmail(e)}} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Mobile Number<FormText className="req">*</FormText></Form.Label>
        <Form.Control  required={true}   type="number" placeholder="Enter Mobile Number"   onChange={e=>{setMobileNumber(e)}} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Alternate Mobile Number<FormText className="req">*</FormText></Form.Label>
        <Form.Control  required={true}   type="number" placeholder="Enter Mobile Number"  onChange={e=>{setAlternateMobileNumber(e)}} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Date Of Birth <FormText className="req">*</FormText></Form.Label>
        <Form.Control  required={true}   type="date" placeholder="Enter Mobile Number" value={date}  onChange={e=>setDate(e.target.value)} />
      </Form.Group>




      <Form.Group className="mb-3" >
        <Form.Label>Father's Name<FormText className="req">*</FormText></Form.Label>
        <Form.Control  required={true}   type="text" placeholder="Enter Father Name" onChange={e=>setFatherName(e.target.value)}  />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Father's Mobile Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Father Mobile Number"  onChange={e=>setFatherMobileNumber(e.target.value)}  />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Mother's Name<FormText className="req">*</FormText></Form.Label>
        <Form.Control  required={true}   type="text" placeholder="Enter Mother Name" onChange={e=>setMotherName(e.target.value)}   />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Mother's Mobile Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Mother Mobile Number"  onChange={e=>setMotherMobileNumber(e.target.value)}  />
      </Form.Group>

      
      </Form>

      <span className='btt'>
       <Button style={{width:'5rem'}}  type="submit"  onClick={handleSubmit} >
            SAVE
       </Button>
       </span>
   
    </Card.Body>
  </Card>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default Reports;