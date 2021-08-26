import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import BlogTemplate from "components/features/BlogTemplate";
import Header, {
  NavLink,
  NavLinks,
  PrimaryLink as PrimaryLinkBase,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "./components/headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`px-8 py-5 pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`;

function Blog() {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="../About">About</NavLink>
      <NavLink href="../Blog">Blog</NavLink>
      <NavLink href="../Post">Post</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink
        href="../Login"
        style={{ background: "#50b9bd", color: "#000000" }}
      >
        Login
      </PrimaryLink>
    </NavLinks>,
  ];

  return (
    <>
      <div style={{ backgroundColor: "#000" }}>
        <StyledHeader links={navLinks} />
      </div>
      <BlogTemplate />
    </>
  );
}

export default Blog;
