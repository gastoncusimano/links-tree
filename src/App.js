import styled from "styled-components";
import logo from './cumsi_512.png'
import { AiFillGithub, AiOutlineFilePdf, AiOutlineLinkedin, AiOutlineCoffee, AiOutlineLaptop, AiOutlineLayout} from "react-icons/ai";
import { Link } from "react-router-dom";


export default function Links() {
  return (
    <Wrapper>
      <img src={logo} className='logo' alt="Logo" />
      <h1 className="h1" data-text={"Gastón Cusimano"}>Gastón Cusimano</h1>
      <p className="p"> Full Stack Engineer @ <span style={{textDecoration: 'underline', textUnderlineOffset: 2}}>Beetrack/DispatchTrack</span></p>
      <ul>
        { items.map((item) => { 
          if(item.title == 'My Resume') {
            return <li><a className={`button ${item.type}`} href={item.link} download>{item.type} <span>{item.title}</span></a></li>
          } else if (item.title == 'Portfolio'){
            return <li><Link to="/"></Link><a className={`button ${item.type}`} href={item.link}>{item.type} <span>{item.title}</span></a></li>
          } else {
            return <li><a className={`button ${item.type}`} href={item.link}>{item.type} <span>{item.title}</span></a></li>
          }
        })}   
      </ul>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  .h1 {
    margin-top: 30px;
    text-transform: Uppercase;
    margin-bottom: 0;
    font-family: 'Rubik', sans-serif;
    font-size: 2.7rem;
    color: rgba(255,255,255, .8);
    @media (max-width: 1024px) {
      font-size: 2rem;
    }
    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }
  .logo {
    margin-top: 35px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.16);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.6px);
    -webkit-backdrop-filter: blur(8.6px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    width: 240px;

    @media (max-width: 600px) {
      width: 140px;
    }
    @media (max-width: 400px) {
      width: 120px;
    }
  }
  h1, p {
    font-family: 'Montserrat';
    color: white;
    text-shadow: 6px 5px 6px rgba(0,0,0,.4), 20px 20px 20px rgba(0,0,0,.2), 30px 30px 30px rgba(0,0,0,.1);
  }
  h1 {
    position: relative;
    &:before, &:after {
      letter-spacing: 2px;
      font-family: 'La Belle Aurore', cursive;
      color: rgba(255,255,255, .3);
      font-size: 14px;
      text-transform: lowercase;
      text-shadow: none;
      font-weight: 100;
    }
    &:before {
      content: '<h1>';
      position: absolute;
      top: -1rem;
      left: 0;
      @media (max-width: 600px) {
        top: -1rem;
        left: 0.3rem;
      }
    }
    &:after {
      content: '</h1>';
      position: absolute;
      left: 0;
      top: 3rem;
      @media (max-width: 600px) {
        left: 0.3rem;
        top: 2.7rem;
      }
    }
  }
  p {
    margin: 25px 20px;
    position: relative;
    &:before, &:after {
      letter-spacing: 2px;
      font-family: 'La Belle Aurore', cursive;
      color: rgba(255,255,255, .3);
      font-size: 14px;
      text-transform: lowercase;
      text-shadow: none;
      font-weight: 100;
    }
    &:before {
      content: '<p>';
      position: absolute;
      top: -0.1rem;
      left: -1.8rem;
    }
    &:after {
      content: '</p>';
      position: absolute;
      right: -2.6rem;
      top: -0.1rem;
    }
    @media (max-width: 600px) {
      margin: 55px 5px;
      &:before {
        top: -1.5rem;
        left: 0rem;
      }
      &:after {
        top: 1.3rem;
        right: 0;
      }
    }
    @media (max-width: 370px) {
      margin: 45px 25px;
      &:before {
        top: -.5rem;
        left: .5rem;
      }
      &:after {
        top: 1.3rem;
        right: 0;
      }
    }
  }
  ul {
    padding: 0;
    list-style-type: none;
    position: relative;
    &:before, &:after {
      letter-spacing: 2px;
      font-family: 'La Belle Aurore', cursive;
      color: rgba(255,255,255, .3);
      font-size: 14px;
      text-transform: lowercase;
      text-shadow: none;
      font-weight: 100;
    }
    &:before {
      content: '<ul>';
      position: absolute;
      top: -1rem;
      left: -3.5rem;
    }
    &:after {
      content: '</ul>';
      position: absolute;
      left: -3.5rem;
      bottom: -2rem;
    }
  }
  li {
    position: relative;
    text-align: center;
    &:before, &:after {
      letter-spacing: 2px;
      font-family: 'La Belle Aurore', cursive;
      color: rgba(255,255,255, .3);
      font-size: 14px;
      text-transform: lowercase;
      text-shadow: none;
      font-weight: 100;
    }
    &:before {
      content: '<li>';
      position: absolute;
      top: .5rem;
      left: -1.8rem;
     
    }
    &:after {
      content: '</li>';
      position: absolute;
      right: -2.6rem;
      top: .5rem;
    }
  }
  .button {
    min-width: 220px;
    text-align: center;
    font-family: 'Montserrat';
    color: white;
    text-decoration: none;
    margin-top: 15px;
    display: block;
    background: rgba( 255, 255, 255, 0.05 );
    box-shadow: 0 8px 22px 0 rgba( 31, 38, 135, 0.2 );
    backdrop-filter: blur( 12.5px );
    -webkit-backdrop-filter: blur( 12.5px );
    border: 1px solid rgba(161, 107, 107, 0.18); 
    font-size: 20px;
    border-radius: 15px;
    padding: 8px;
    transition: 0.2s;
    &:hover {
      padding-left: 2px;
      background: rgba( 255, 255, 255, 0.1 );
    }
  }
`;

const items = [
  {
    title: 'My Resume',
    type: <AiOutlineFilePdf/>,
    link: '/Gaston_Cusimano_fullstack.pdf'
  },
  {
    title: 'LinkedIn',
    type: <AiOutlineLinkedin/>,
    link: 'https://www.linkedin.com/in/gaston-cusimano/'
  },
  {
    title: 'Portfolio',
    type: <AiOutlineLayout/>,
    link: '/portfolio'
  },
  {
    title: 'Github',
    type: <AiFillGithub/>,
    link: 'https://github.com/gastoncusimano'
  },
  {
    title: 'Buy me a coffee',
    type: <AiOutlineCoffee/>,
    link: 'https://ko-fi.com/gastoncusimano/'
  },
]

