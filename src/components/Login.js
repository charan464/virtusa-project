import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {

    const navigate= useNavigate();

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const handleSubmit=()=>
    {
         if(!email||!password)
         {
            alert('invalid');
         }

         else
         {
             navigate("/home");
         }


        
    }





  return ( 

    <div>
         

    <div className='login'  style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
           <div className="title"><h2 >EMPLOYEE ONBOARDING SYSTEM</h2></div>
           <h4>LOGIN</h4>
            <Card  style={{width:'30rem',height:'20rem'}} className="card-login">
    <Card.Body>
    
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control  required={true}   type="email" placeholder="Enter email" onChange={e=>{setEmail(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={e=>{setPassword(e.target.value)}}   />
      </Form.Group>
      </Form>
       <Button className="block"  type="submit" onClick={handleSubmit}>
            LOGIN
       </Button>
   
    </Card.Body>
  </Card>
    </div>
    
    </div>

   
  );
}

export default Login;