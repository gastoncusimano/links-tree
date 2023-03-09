import styled from "styled-components";
import Image from 'next/image'
import ruby from '../assets/Ruby_On_Rails_Logo.svg.png'
import rspec from '../assets/rspec-logo.png'
import jslogo from '../assets/JavaScript-logo.png'
import rabbit from '../assets/rabbitmq-logo-png-transparent.png'
import nextlogo from '../assets/nextlogo.png'
import expo from '../assets/sdk.svg'
import firebase from '../assets/firebase.png'
import cristal from '../assets/cristal.png'
import docker from '../assets/docker.png'
import aws from '../assets/aws.png'
export default function Skills() {
  return (
    <Wrapper>
      <h1 className="purple-underline">What I use</h1>
      <div className="works">
        <div className="cards">
          <Image 
            src={ruby}
            className="logo ruby" />
          <span>Ruby on Rails</span>
        </div>
        <div className="cards">
          <Image 
            src={rspec}
            className="logo rspec" />
          <span>Rspec</span>
        </div>
        <div className="cards">
          <Image 
            src={rabbit}
            className="logo rabbit" />
          <span>RabbitMQ</span>
        </div>
        <div className="cards">
          <Image 
            src={jslogo}
            className="logo js" />
          <span>JavaScript</span>
        </div>
        <div className="cards">
          <Image 
            src={nextlogo}
            className="logo js next" />
          <span>Next</span>
        </div>
        <div className="cards">
          <Image 
            src={firebase}
            className="logo firebase" />
          <span>Firebase</span>
        </div>
        <div className="cards">
          <Image 
            src={expo}
            className="logo js expo" />
          <span>Expo</span>
        </div>
        <div className="cards">
          <Image 
            src={cristal}
            className="logo cristal" />
          <span>Crystal</span>
        </div>
        <div className="cards">
          <Image 
            src={docker}
            className="logo js expo" />
          <span>Docker</span>
        </div>
        <div className="cards">
          <Image 
            src={aws}
            className="logo aws" />
          <span>AWS</span>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  z-index: 4;
  position: relative;
  box-sizing: border-box;
  background-color: #2F4858;
  padding: 2% 3%;
  .works {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  h1, h2, span {
    text-transform: uppercase;
    color: white;
  }
  h1, h2, span{
    font-family: 'Montserrat';
  }
  .purple-underline {
    font-size: 42px;
    text-decoration: underline;
    text-decoration-color: rgb(120,82,122);
    @media (max-width: 767px) {
      max-width: 100%;
      border: none;
    }
  }
  .cards {
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin: 10px 20px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 0.5rem;
    box-shadow: 0 6px 30px rgba(0, 0, 0, .3);
    border: 1px solid rgba(161, 107, 107, 0.08); 
    backdrop-filter: blur(5.6px);
    -webkit-backdrop-filter: blur(5.6px);
    text-align: center;
    padding: 1rem;
    transition: all 0.4s ease;
    span {
      margin-top: 5px;
      border-bottom: 2px solid rgba(255, 255, 255, .7); 
    }
    &:hover {
      background: rgba(255, 255, 255, 0.08);
    }
  }
  .logo {
    margin: auto;
    max-width: 260px;
    height: 130px;
    &.ruby {
      height: 110px;
      margin-bottom: 20px;
    }
    &.rspec {
      width: 150px;
    }
    &.js {
      width: 130px;
    }
    &.rabbit {
      width: 130px;
    }
    &.firebase {
      width: 110px;
    }
    &.cristal {
      width: 130px;
    }
    &.aws {
      padding: 30px 15px;
      width: 150px;
      height: 70px;
    }
    &.expo {
      padding: 0px 40px;
    }
    &.next {
      width: 260px;
    }
    @media (max-width: 767px) {
      &.next {
        width: 200px;
      }
      &.ruby {
        width: 200px;
      }
    }
    @media (max-width: 600px) {
      &.ruby {
        height: 90px;
      }
    }
  }

`