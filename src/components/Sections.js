import React, { Component } from "react";
import styled from 'styled-components';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import { Spring } from 'react-spring/renderprops'
import ScrollAnimation from 'react-animate-on-scroll';
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import "animate.css/animate.min.css";

// css
import './App.scss';

const Header = styled.div`
  position: absolute;
  bottom: 5%;
  @media (max-width: 500px) {
   bottom: 10%;
  }
  h1 {
    letter-spacing: 7px;
    margin:  30px 0;
    @media (max-width: 500px) {
    font-size: 55px;
    line-height: 50px;
     margin: 10px 0;
   }
  }
`



const Section = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 0;
   h1, p {
     padding: 0 5vw;
   }
   @media (max-width: 500px) {
    height: 90vh;
  }
`
const SectionXL = styled(Section)`
  height: 125vh;
  @media (max-width: 500px) {
   height: 100vh;
 }
`
const SectionXXL = styled(Section)`
  height: 200vh;
  @media (max-width: 500px) {
   height: 100vh;
 }
`
const CastSection = styled(Section)`
  height: 100vh;
  @media (max-width: 500px) {
   height: 70vh;
 }
`
const CastSectionImage = styled(CastSection)`
  height: 90vh;
`
const FullImageSection = styled(Section)`
  height: 70vh;
  @media (max-width: 500px) {
   height: 70vh;
 }
`

export default class Sections extends Component {
  render() {
  return (
  <React.Fragment>
    <Spring  from={{ opacity: 1, marginTop: 1000}} to={{ opacity: 1, marginTop: 0}}>
    {props =>
      <Section style={ props } className="brown">
        <ParallaxLayer factor={1} offset={0} speed={1}>
        <Spring from={{ opacity: 1, transform: "translateY(150vh)" }} to={{ opacity: 1, transform: "translateY(0%)" }}>
        {props =>
          <Header style={ props } >
            <p>Based on True Events</p>
            <h1>Chula<br />Juana</h1>
            <p>Written & Directed by Eric Armando Ibarra</p>
          </Header>
        }
        </Spring>
        </ParallaxLayer>
      </Section>
    }
    </Spring>


      <SectionXL className="blue">
          <ParallaxLayer factor={1.25} offset={0.3} speed={-0.2}>
            <h1>Chula Vista,<br />California</h1>
          </ParallaxLayer>
          <img className="img-center" src="img/chulavista.png" />
      </SectionXL>

      <SectionXL className="brown">
          <ParallaxLayer factor={1.25} offset={0} speed={-0.2}>
            <h1>Tijuana,<br />Mexico</h1>
          </ParallaxLayer>
          <img className="img-center" src="img/tijuana.png" />
      </SectionXL>

      <Section className="white">
        <ParallaxLayer factor={1} offset={.4} speed={0.1}>
          <div className="text">
              <h2>A Mexican-American teenager living in a small border town of Chula Vista, CA finds himself at a low point in his life forcing him to join a Mexican drug cartel that he cannot escape.</h2>
          </div>

        </ParallaxLayer>
      </Section>

      <FullImageSection>
        <img className="img-full" src="img/logline.png"/>
      </FullImageSection>

      <Section className="white">
        <ParallaxLayer factor={1} offset={.55} speed={0.1}>
          <div className="text">
            <h2>After losing his family and beloved dog, Armando (18) is forced to join the Chulajuana cartel. This cartel runs havoc amongst both Baja California and Southern California and Armando is in the middle of it all. Trying to free himself of this horrible nightmare, he also loses his true self along the way.</h2>
          </div>
        </ParallaxLayer>
      </Section>

      <FullImageSection>
        <img className="img-full" src="img/synopsis.png"/>
      </FullImageSection>

      <ParallaxLayer factor={1.25} offset={3} speed={1}>
        <SectionXL className="blue">

        </SectionXL>
      </ParallaxLayer>

      <ParallaxLayer factor={3} offset={.5} speed={0}>
      <CastSection className="brown">
        <ParallaxLayer factor={1} offset={.7} speed={0.1}>
          <div className="cast">
            <h1>Rossi Rock</h1>
            <h2>AS</h2>
            <h1>Armando</h1>
          </div>
        </ParallaxLayer>
        <div className="img-cast">
          <img src="img/RossiRock-b.png"/>
        </div>
        <div className="info-cast">
            <div className="text">
            <h2>A ‘gentle giant’ type who follows orders, stays in his lane, and has a big heart, but when pushed to his edge – turns into a killer. (NO BEARD)</h2>
            </div>
        </div>
      </CastSection>

      <CastSection className="brown">
        <ParallaxLayer factor={1} offset={.85} speed={0.1}>
          <div className="cast">
          <h1>eddie zuko</h1>
          <h2>AS</h2>
          <h1>Josue</h1>
        </div>
        </ParallaxLayer>
        <div className="img-cast">
          <img src="img/EddieZuko-b.png"/>
        </div>
        <div className="info-cast">
            <div className="text">
            <h2>An arrogant teenager with an ‘Napoleon complex’ that stirs up trouble wherever he goes and this leads to his fatal end.</h2>
            </div>
        </div>
      </CastSection>

      <CastSection className="brown">
        <ParallaxLayer factor={2} offset={.65} speed={0.1}>
          <div className="cast">
          <h1>Julio Macias</h1>
          <h2>AS</h2>
          <h1>Trejo</h1>
        </div>
        </ParallaxLayer>
        <div className="img-cast">
          <img src="img/JulioMacias-b.png"/>
        </div>
        <div className="info-cast">
            <div className="text">
            <h2>In his 20’s, this man has been in the cartel for several years. He means well and will always protect his family, but now the cartel is his family. </h2>
            </div>
        </div>
      </CastSection>

      </ParallaxLayer>






  </React.Fragment>
  );
}
}
