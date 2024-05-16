import Head from 'next/head'
import styled from "styled-components";
import Personal from '../../components/Personal';
import Timeline from '../../components/Timeline';
import Skills from '../../components/Skills';
import Contact from '../../components/Contact';
export default function Portfolio() {
  return (
    <Wrapper>
      <Head>
        <title>Gastón Cusimano - Portfolio</title>
      </Head>
      <Personal />
      <Timeline />
      <Skills />
      <Contact />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display:block;
  background:
  radial-gradient(circle at 100% 50%, transparent 20%, rgba(255,255,255,.03) 21%, rgba(255,255,255,.03) 34%, transparent 35%, transparent),
  radial-gradient(circle at 0% 50%, transparent 20%, rgba(255,255,255,.03) 21%, rgba(255,255,255,.03) 34%, transparent 35%, transparent) 0 -50px;
  background-color: rgb(120,82,122);
  background-size:75px 100px;
  @media (max-width: 767px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`
