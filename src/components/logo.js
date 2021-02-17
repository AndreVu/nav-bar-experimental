import React from "react";
import styled from "styled-components";
import blackAvLogo from "../images/avLogo2.png";

const Wrapper = styled.div`
  padding: 1rem;
  float: right;
`;

const Heartbeat = styled.img`
  transition: all 0.3s ease-out;
  &:hover {
    /* Start the shake animation and make the animation last for 0.5 seconds */
    animation: shake 0.3s;

    animation-iteration-count: 0.2s;
  }

  @keyframes shake {
    0% {
      transform: translate(7px, 7px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(1px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }

  @media (max-width: 768px) {
  }
`;

function Logo() {
  return (
    <Wrapper>
      <Heartbeat
        width="50px"
        height="50px"
        src={blackAvLogo}
        alt="heartbeat logo"
      />
    </Wrapper>
  );
}

export default Logo;
