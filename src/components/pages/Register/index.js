import { useState } from 'react';
import {Button, Form, Container} from 'react-bootstrap';
import Inputs from '../../atoms/Input';

const Register = () => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
    return (
    <div>
      <div style={{display: "flex"}}>
      <Container style={{flex: "1 0 1px"}}/>
      <Container style={{flex: "4 0 1px"}}>
        <br></br>
        <h3>Register</h3>
      <Form>
      <Inputs inputTitle="Name" placeholder="Enter name" value ={name} onChange={(e)=>setName(e.target.value)}/>
      <Inputs inputTitle="Username" placeholder="Enter username" value ={username} onChange={(e)=>setUsername(e.target.value)}/>
      <Inputs inputTitle="Email" placeholder="Enter email" value ={email} onChange={(e)=>setEmail(e.target.value)}/>
      <Inputs inputTitle="Phone Number" placeholder="Enter phone number" value ={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
      <Inputs inputTitle="Address" placeholder="Enter address" value ={address} onChange={(e)=>setAddress(e.target.value)}/>
      <br/>
      <Button variant="primary" type="submit" onClick={(e)=>{
          e.preventDefault()
          console.log(name, username, email, phoneNumber, address)}}> 
        Submit
      </Button> 
      </Form>
      </Container>
      <Container style={{flex: "1 0 1px"}}/>
    </div>
    </div>
    )
}

export default Register