import React , { useState} from 'react'
import { useHistory } from "react-router-dom";
import { Button, FormGroup, FormControl, ControlLabel, Form, Container } from "react-bootstrap";
import Pin from './appVault';

export const AdminLogin = () => {
const [emailInput, setEmailInput] = useState('');
const [passwordInput, setPasswordInput] = useState('');
const [pinInput, setPinInput] = useState('');

const history = useHistory();

const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
}

const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
}
const handlePinChange = (e) => {
  setPinInput(e.target.value);
}

const handleLoginSubmit = (e) => {
    e.preventDefault();
    let hardcodedCred = {
        email: 'admin@gmail.com',
        password: 'pass123',
        Pin: Pin
    }

    if ((emailInput === hardcodedCred.email) && (passwordInput === hardcodedCred.password) && (pinInput === hardcodedCred.Pin)) {
      //combination is good. Log them in.
      //this token can be anything. You can use random.org to generate a random string;
      const token = '123456abcdef';
      sessionStorage.setItem('auth-token', token);
      if (!sessionStorage.getItem('auth-token')) {
        console.log('no auth token set');
        //do something like redirect to login page
    } else {
        const authToken = '123456abcdef';
        if (sessionStorage.getItem('auth-token') === authToken) {
            console.log('good token. Log in.')
            //do something like redirect to todo page
        } else {
            console.log('bad token.')
            //do something like redirect to login page
        }
    }
      //go to www.website.com/todo
      history.push('/AdminDashboard');
  } else {
      //bad combination
      alert('Wrong Email, Password and Pin combination');
  }
} 
    return (
      <div className= "Container">
        <h1>Admin Login</h1>
        <Form autoComplete="off" onSubmit={handleLoginSubmit}>
    <Form.Group className="mb-3"  controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <div className="col-sm-4">
    <Form.Control type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={emailInput} onChange={handleEmailChange} />
    </div>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <div className="col-sm-4">
    <Form.Control type="password" autoComplete="new-password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={passwordInput} onChange={handlePasswordChange}/>
    </div>
     </Form.Group>
      
  <Form.Group className="mb-3" controlId="formBasicPin">
    <Form.Label>Pin</Form.Label>
    <div className="col-sm-4">
    <Form.Control type="PIN" placeholder="Enter PIN" autoComplete="new-pin" className="form-control" id="exampleInputPin"   value={pinInput} onChange={handlePinChange} />
    </div>
  </Form.Group>

  <Button variant="primary" type="submit">Submit</Button>&nbsp;&nbsp;&nbsp;   
  <Button variant="primary" type="reset">Reset</Button>
  
</Form>
</div>
    )
}
