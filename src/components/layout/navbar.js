import React, { useState } from "react";
import styled from "styled-components";
import AvLogo from "../logo";

// Styles

// Nav Container

const Nav = styled.div`
  padding: 0 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  background-image: linear-gradient(
    to top,
    white,
    powderblue,
    darkslategrey,
    powderblue,
    ghostwhite
  );

  @media (max-width: 768px) {
    background-image: linear-gradient(
      to right,
      white,
      ghostwhite,
      powderblue,
      ghostwhite,
      white
    );
  }
`;

// LogoText

const Logo = styled.a`
  padding: 1.75rem 0rem;
  color: whitesmoke;
  text-decoration: none;
  font-size: 1.625rem;
  float: left;
  transition: all 0.3s ease-in;
  &:hover {
    color: powderblue;
  }

  @media (max-width: 768px) {
    color: black;

    &:hover {
      color: black;
      text-shadow: 2px 2px 32px black;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 25px;
    background-color: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
    transition: all 0.5s ease-in;

    span {
      background-color: black;
    }
    &:hover {
      filter: blur(2px);
    }
  }
`;

const MenuLink = styled.a`
  text-decoration: none;
  padding: 1rem;
  color: whitesmoke;
  transition: all 0.3s ease-in;
  &:hover {
    color: powderblue;
  }

  @media (max-width: 768px) {
    color: black;

    &:hover {
      color: white;
      text-shadow: 2px 2px 32px black;
    }
  }
`;

// Navbar

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 768px) {
      overflow: hidden;
      flex-direction: column;
      width: 100%;
      transition: all 0.5 ease-in-out;
      max-height: ${({ isOpen }) => (isOpen ? "300" : "0")};
    }
  `;

  return (
    <Nav>
      <span>
        <AvLogo></AvLogo>
        <Logo href="">x n d r e. io</Logo>
      </span>

      <Hamburger
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span />
        <span />
        <span />
      </Hamburger>

      <Menu isOpen={isOpen}>
        <MenuLink href="">Projects</MenuLink>
        <MenuLink href="">About</MenuLink>
        <MenuLink href="">Blog</MenuLink>
        <MenuLink href="">Github</MenuLink>
        <MenuLink href="">Contact</MenuLink>
      </Menu>
    </Nav>
  );
}

export default Navbar;
