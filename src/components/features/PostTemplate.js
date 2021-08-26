import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, {
  NavLink,
  PrimaryLink as PrimaryLinkBase,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const Container = styled.div`
  ${tw`bg-center bg-cover h-screen`}
`;

const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const postStyle = {
  height: "-1000px",
  display: "flex",
};

const formStyle = {
  margin: "auto",
  padding: "10px",
  border: "1px solid #c9c9c9",
  borderRadius: "5px",
  background: "#f5f5f5",
  width: "750px",
  display: "block",
};

const labelStyle = {
  margin: "10px 0 5px 0",
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "15px",
};

const inputStyle = {
  margin: "5px 0 10px 0",
  padding: "5px",
  border: "1px solid #bfbfbf",
  borderRadius: "3px",
  boxSizing: "border-box",
  width: "100%",
};

const submitStyle = {
  margin: "10px 0 0 0",
  padding: "7px 10px",
  border: "1px solid #efffff",
  borderRadius: "3px",
  background: "#3085d6",
  width: "100%",
  fontSize: "15px",
  color: "white",
  display: "block",
};

const Field = React.forwardRef(({ label, type }, ref) => {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input ref={ref} type={type} style={inputStyle} />
    </div>
  );
});

const Form = ({ onSubmit }) => {
  const titleRef = React.useRef();
  const descriptionRef = React.useRef();
  const scriptRef = React.useRef();
  const handleSubmit = (e) => {
    //for login
    e.preventDefault();
    const data = {
      titleRef: titleRef.current.value,
      descriptionRef: descriptionRef.current.value,
      scriptRef: scriptRef.current.value,
    };
    onSubmit(data);
  };
  return (
    <>
      <form style={formStyle} onSubmit={handleSubmit}>
        <Field ref={titleRef} label="Title:" type="text" />
        <label for="description">Character Description:</label>
        <br></br>
        <textarea
          id="description"
          ref={descriptionRef}
          style={{ height: "50px", width: "100%", resize: "none" }}
        />
        <label for="script">Script:</label>
        <br></br>
        <textarea
          id="script"
          ref={scriptRef}
          style={{ height: "175px", width: "100%", resize: "none" }}
        />
        <div>
          <button style={submitStyle} type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

const Post = () => {
  const handleSubmit = (data) => {
    const json = JSON.stringify(data, null, 4);
    console.clear();
    console.log(json);
  };
  //end form consts
  return (
    <Container style={{ backgroundColor: "#fff" }}>
      <Content>
        <Heading style={{ color: "#50b9bd" }}>Create a new post</Heading>
        <div style={postStyle}>
          <Form onSubmit={handleSubmit} />
        </div>
      </Content>
    </Container>
  );
};

export default Post;
