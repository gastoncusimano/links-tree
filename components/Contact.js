import Spline from '@splinetool/react-spline';
import styled from "styled-components";
import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineMail} from "react-icons/ai";

export default function Contact() {
  return (
    <Wrapper>
      <h1>About Me & Contact</h1>
      <Spline scene="https://prod.spline.design/d7cRgRgM2IBX9kW2/scene.splinecode" className='scene'/>
      <div class='p'>Hi 👋<br/>I'm Gaston Cusimano from Mendoza, Argentina⛰️🍷.<br/> I'm living in México with my GF.
        I love watching movies, playing soccer (even though it's been a while since last time). <br/>
        I have many hobbies, for example I always wanted to play music so I have a Piano, Kalimba, Ukulele, Guitar and a Harmonica. I spend most of my spare time playing videogames mostly shooters but now I'm back to playing WoW.<br/> 
        This section was made with Spline.
        <span className='formTitle'><br/><br/>Get in touch</span>
        <div className="links">
          <a href="https://www.linkedin.com/in/gaston-cusimano/" target="_blank"><AiOutlineLinkedin/></a>
          <a href="mailto:gaston.cusimano@gmail.com" target="_blank"><AiOutlineMail/></a>
        </div>
      </div>
       
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  padding: 2% 3%;
  background:
  radial-gradient(circle at 100% 50%, transparent 20%, rgba(255,255,255,.1) 21%, rgba(255,255,255,.1) 34%, transparent 35%, transparent),
  radial-gradient(circle at 0% 50%, transparent 20%, rgba(255,255,255,.1) 21%, rgba(255,255,255,.1) 34%, transparent 35%, transparent) 0 -50px;
  background-color: rgb(229, 226, 218);
  background-size: 75px 100px;
  display: block;
  box-sizing: border-box;
  text-align: center;
  h1 {
    z-index: 5;
    position: absolute;
    right: 6.5rem;
    font-family: 'Montserrat';
    text-transform: uppercase;
    text-decoration: underline;
    text-decoration-color: rgb(120,82,122);
    @media (max-width: 800px) {
      position: relative;
      left: 0;
    }
    @media (max-width: 600px) {
      position: relative;
      left: 0;
    }
  }
  .p {
    z-index: 5;
    position: absolute;
    top: 6rem;
    max-width: 60%;
    font-size: 20px;
    text-align: justify;
    font-family: 'Montserrat';
    margin-left: 50%;
    margin-right: 5%;
    box-sizing: border-box;
    @media (max-width: 800px) {
      position: relative;
      margin: auto;
      max-width: 80%;
      top: 1rem;
    }
    @media (max-width: 600px) {
      position: relative;
      margin: auto;
      max-width: 80%;
      top: 0;
    }
  }
  .scene {
    transform: scale(0.9);
    margin-left: -100px;
    margin-top: -140px;
    @media (max-width: 1024px) {
      transform: scale(0.7) translateX(-250px);
    }
    @media (max-width: 800px) {
      display:none;
    }
  }
  .formTitle {
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: underline;
    text-decoration-color:rgb(120,82,122);
  }

  .links {
    margin-top: 25px;
    a {
      padding: 0 15px;
      color: rgb(120,82,122);
      font-size: 32px;
      text-decoration: none;
      padding: 10px;
      @media (max-width: 600px) {
      }
    }
  }
`
