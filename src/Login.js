import React from "react";
import ReactDOM from 'react-dom';
import {Link } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "./components/headers/light.js";
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css"; //npm i react-bootstrap bootstrap
import { useEffect, useState } from "react";
import { Button} from 'react-bootstrap';

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("https://images.unsplash.com/photo-1536300007881-7e482242baa5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;
  
const navLinks = [
  <NavLinks key={1}>
    <NavLink href="#">
      About
    </NavLink>
    <NavLink href="#">
      Blog
    </NavLink>
    <NavLink href="#">
      Pricing
    </NavLink>
  </NavLinks>,
  <NavLinks key={2}>
    <PrimaryLink href="../Login" style={{background: '#50b9bd', color:'#000000'}}>
      Login
    </PrimaryLink>
  </NavLinks>
];

//form consts - source https://dev.to/diraskreact/create-simple-login-form-in-react-227b
const loginStyle = {
  height: '250px',
  display: 'flex'
};

const formStyle = {
  margin: 'auto',
  padding: '10px',
  border: '1px solid #c9c9c9',
  borderRadius: '5px',
  background: '#f5f5f5',
  width: '220px',
  display: 'block'
};

const labelStyle = {
  margin: '10px 0 5px 0',
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontSize: '15px',
};

const inputStyle = {
  margin: '5px 0 10px 0',
  padding: '5px', 
  border: '1px solid #bfbfbf',
  borderRadius: '3px',
  boxSizing: 'border-box',
  width: '100%'
};

const submitStyle = {
  margin: '10px 0 0 0',
  padding: '7px 10px',
  border: '1px solid #efffff',
  borderRadius: '3px',
  background: '#3085d6',
  width: '100%', 
  fontSize: '15px',
  color: 'white',
  display: 'block'
};

const Field = React.forwardRef(({label, type}, ref) => {
  return (
    <div>
      <label style={labelStyle} >{label}</label>
      <input ref={ref} type={type} style={inputStyle} />
    </div>
  );
});

const Form = ({onSubmit}) => {
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();
  const emailRef = React.useRef();
  const usernameRef2 = React.useRef();
  const passwordRef2 = React.useRef();  
  const passwordRef3 = React.useRef();
  const [show, setShow] = useState(false);//https://react-bootstrap.github.io/components/modal/
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = e => {//for login
      e.preventDefault();
      const data = {
          username: usernameRef.current.value,
          password: passwordRef.current.value          
      };
      onSubmit(data);
  };
  const handleSubmit2 = e => {//for signup
    e.preventDefault();
    const data = {
         email: emailRef.current.value,  
         username: usernameRef2.current.value,
         password: passwordRef2.current.value,
         passwordRepeat: passwordRef3.current.value         
    };
    onSubmit(data);
};
  return (  
    <>
    <form style={formStyle} onSubmit={handleSubmit} >
      <Field ref={usernameRef} label="Username:" type="text" />
      <Field ref={passwordRef} label="Password:" type="password" />      
      <div>
        <button style={submitStyle} type="submit">Submit</button>
        <button style={submitStyle} type="button" onClick={handleShow}>Sign Up</button>
      </div>
    </form>   
   <form onSubmit={handleSubmit2}>
   <Modal show={show} onHide={handleClose} style={{ width:"25%" ,position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>Sign up for Voice Match today!</Modal.Body>
          <div style={{ width:"80%", margin: "0 auto" }}>
          <Field ref={emailRef} label="Email:" type="text" />
          <Field ref={usernameRef2} label="Username:" type="text" />
          <Field ref={passwordRef2} label="Password:" type="password" />
          <Field ref={passwordRef3} label="Repeat Password:" type="password" />
          </div>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Sign Up
            </Button>
          </Modal.Footer>
        </Modal>
   </form>
   </>
  );
};

const Login = () => {
  const handleSubmit = data => {
      const json = JSON.stringify(data, null, 4);
      console.clear();
      console.log(json);
  };
//end form consts  
  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <Content>
          <Heading>
              Login
          </Heading>
           <div style={loginStyle}>      
            <Form onSubmit={handleSubmit} />
           </div>
        </Content>
      </HeroContainer>
    </Container>

  );
};

export default Login;




