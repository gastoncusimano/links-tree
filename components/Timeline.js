import styled from "styled-components";
import { AiOutlineLinkedin } from "react-icons/ai";

export default function TimelinePage() {
  return (
    <Wrapper>
      <h1 className="purple-underline">Experience</h1>
      <Timeline/>
    </Wrapper>
  )
}

const data = [
  {
    where: "BUK - Mexico",
    title: "Ruby on Rails Engineer Level 2",
    date: "May 2023 - Present",
    url: "https://www.buk.mx/",
    linkedin: "https://www.linkedin.com/company/buk-cl",
    body: "Improving performance on critical workflows. Mentorship to interns.",
    id: 0
  },
  {
    where: "Beetrack / DispatchTrack",
    title: "Ruby on Rails Engineer",
    date: "Sep 2021 - Apr 2023",
    url: "https://www.beetrack.com/",
    linkedin: "https://www.linkedin.com/company/beetrack/",
    body: "Migrate core queues from SQS to RabbitMQ. Cloud functions on GCP; React Native to RoR. Built an Rails Engine based on OnDemand (existent product) to be mounted on top of our core product.",
    id: 1
  },
  {
    where: "KeyClouding",
    title: "Full Stack Engineer",
    date: "Dec 2020 - Sep 2021",
    url: "https://www.linkedin.com/company/keyclouding/",
    linkedin: "https://www.linkedin.com/company/keyclouding/",
    body: "First long-term freelance contract through Upwork. Dockerize many services. Help migration from Heroku to AWS. Improve performance and built new features. Ruby on Rails and VueJS/React.",
    id: 2
  },
  {
    where: "GOIAR",
    title: "Full Stack Engineer",
    date: "Oct 2019 - Nov 2020",
    url: "https://www.goiar.com/",
    linkedin: "https://www.linkedin.com/company/goiar/",
    body: "First remote experience. Work with many technologies. In this step I wanted to be more open to more front end techs. Worked with .NET, React (Intel Marketing Studio), Node, Python & React Native.",
    id: 3
  },
  {
    where: "Aldibs",
    title: "Jr Full Stack",
    date: "May 2017 - Oct 2019",
    url: "https://aldibs.com/",
    linkedin: "https://www.linkedin.com/company/aldibs-software-solutions/",
    body: "First real world experience. In this step I started working with the engineers from the RoR bootcamp.",
    id: 4
  },
]

const TimelineItem = ({data, key}) => (
  <div className="timeline-item clearfix">
    <div className='circle'></div> 
    <div className={`timeline-content ${data.id % 2 == 0 && 'right'}`}>
      <p className="date">{data.date} </p>
      <h2><a href={data.url} target="_blank" className="h2-link">{data.where}</a></h2>
      <p className="body">{data.title}. {data.body}</p>
      <a href={data.linkedin} target="_blank" className="linkedin"><AiOutlineLinkedin /></a>
      <span className="circle" />
    </div>
  </div>
);

const Timeline = () =>
    data.length > 0 && (
        <div className="timeline-container" style={{boxSizing: 'border-box'}}>
            {data.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );
const Wrapper = styled.div`
  background:
  radial-gradient(circle at 100% 50%, transparent 20%, rgba(255,255,255,.1) 21%, rgba(255,255,255,.1) 34%, transparent 35%, transparent),
  radial-gradient(circle at 0% 50%, transparent 20%, rgba(255,255,255,.1) 21%, rgba(255,255,255,.1) 34%, transparent 35%, transparent) 0 -50px;
  background-color: rgb(229, 226, 218);
  background-size: 75px 100px;
  position: relative;
  overflow: visible;
  width: 60%;
  max-width: 1200px;
  margin-left: 40%;
  z-index: 2;
  float: none;
  clear: none;
  padding: 3rem;
  display: block;
  box-sizing: border-box;
  @media (max-width: 767px) {
    width: 100%;
    margin-left: 0;
    padding: 1rem;
    text-align: center;
    padding: 1rem;
    display: block;
    box-sizing: border-box;
  }
  h1 {
    text-transform: uppercase;
    color: black;
  }
  h1, p {
    font-family: 'Montserrat';
  }
  p {
    font-weight: 300;
    color: rgba(0,0,0, .8)
  }
  .purple-underline {
    position: static;
    max-width: 17.7rem;
    font-size: 42px;
    border-bottom: 5px solid rgb(120,82,122);
    @media (max-width: 767px) {
      max-width: 100%;
      position: static;
      border: none;
    }
  }
  .timeline-container {
    width: 100%;
    position: relative;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
    &:before {
      content: "";
      width: 3px;
      height: 100%;
      background: #2F4858;
      left: 50%;
      -webkit-transform: translate(-50%);
      transform: translate(-50%);
      top: 0;
      position: absolute;
    }
    &:after{
      content: "";
      clear: both;
      display: table;
      width: 100%;
    }
    @media (max-width: 767px) {
      &:before {
        left: 2%;
        -webkit-transform: translate(-50%);
        transform: translate(-50%);
        top: 0;
        position: absolute;
      }
    }
  }
  .timeline-item {
    margin-bottom: 50px;
    position: relative;
    text-align: right;
    @media (max-width: 767px) {
      text-align: left
    }
  }
  .timeline-content {
    width: 45%;
    &.right {
      float: right;
      text-align: left;
      @media (max-width: 767px) {
        float: left;
      }
    }
    .body {
      font-weight: 500;
    }
    @media (max-width: 767px) {
      width: 100%;
      display: block;
      padding: 7px 35px;
      box-sizing: border-box;
    }
  }
  .circle {
    background: #2F4858;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    left: 50%;
    overflow: hidden;
    margin-left: -10px;
    border-radius: 50%;
    @media (max-width: 767px) {
      left: 2%;
    }
  }
  .date {
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 10px;
    border-radius: 3px;
    margin: 0;
  }
  .h2-link {
    text-decoration: underline;
    text-transform: uppercase;
    color: #3d4e6a;
    font-family: 'Rubik', sans-serif;
  }
  .clearfix {
    display: block;
    clear: both;
    content: "";
  }
  .linkedin {
    text-decoration: none;
    color: #585177;
    font-size: 22px;
  }
 
`
