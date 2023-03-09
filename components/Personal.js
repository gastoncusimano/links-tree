import styled from "styled-components";
import logo from "./../assets/cumsi_512.png";
import Image from 'next/image'
import { AiFillGithub, AiOutlineFilePdf, AiOutlineLinkedin} from "react-icons/ai";

export default function Personal() {
  return (
    <Wrapper>
      <Image
      src={logo}
      className='logo'
      alt="3D Model by Me on Blender" />
      <h1>Hi World! 👋 <br/>I'm <span className="purple-underline">Gaston Cusimano</span></h1>
      <p> A Full Stack engineer from Argentina, based in Mexico. <br/> 3D enthusiast, musician wannabe, CSGO tilt player.</p>
      <div className="links">
        <a href="https://www.linkedin.com/in/gaston-cusimano/" target="_blank"><AiOutlineLinkedin/></a>
        <a href="../public/Gaston_Cusimano_fullstack.pdf" download><AiOutlineFilePdf/></a>
        <a href="https://github.com/gastoncusimano" target="_blank"><AiFillGithub/></a>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  position: fixed;
  width: 40%;
  height: 100%;
  display: flex;
  padding-top: 50px;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) {
    width: 100%;
    position: static;
    padding: 3rem;
    display: block;
    box-sizing: border-box;
  }
  .logo {
    margin-top: 1rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 6px 30px rgba(0, 0, 0, .4);
    border: 1px solid rgba(161, 107, 107, 0.18); 
    backdrop-filter: blur(5.6px);
    -webkit-backdrop-filter: blur(5.6px);
    width: 240px;
    height: 240px;
    @media (max-width: 600px) {
      width: 140px;
      height: 140px;
    }
    @media (max-width: 400px) {
      width: 120px;
      height: 120px;
    }
  }
  h1 {
    text-transform: uppercase;
    color: white;
    font-size: 45px;
  }
  h1, p {
    font-family: 'Montserrat';
    text-shadow: 6px 5px 6px rgba(0,0,0,.4), 20px 20px 20px rgba(0,0,0,.2), 30px 30px 30px rgba(0,0,0,.1);
  }
  p {
    font-weight: 300;
    text-align: center;
    color: rgba(255,255,255, .8)
  }
  .purple-underline {
    border-bottom: 5px solid #1d2338;
  }
  .links {
    display: flex;
    margin: 25px;
    color: white;
    font-size: 30px;
    @media (max-width: 600px) {
      margin: 55px 25px;
    }
    a {
      flex: 1;
      color: white;
      text-decoration: none;
      padding: 15px;
      @media (max-width: 600px) {
        padding: 0px;
      }
    }
  }
  @media (max-width: 1024px) {
    h1 {
      text-align: center;
    }
  }
  @media (max-width: 600px) {
    h1 {
      text-align: left;
    }
  }
`