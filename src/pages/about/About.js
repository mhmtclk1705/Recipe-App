import React from 'react'
import coding from '../../assets/coding.svg'
import { AboutContainer } from './style'

const About = () => {
  return (
    <AboutContainer>
      <img src={coding} alt="" />
      <div>
        <h1>About Software Developer <span>Mehmet Çelik</span></h1>
      </div>
      <main>
        <h1>Hi, I'm Mehmet</h1>
        <h3>I'm currently learning Full-Stack Development Languages.</h3>
        <h3>I know JS, ReactJS, HTML-CSS, NodeJS, SQL, Python, AWS Services.</h3>
        <span>Send Email: </span><a href='mailto:mehmetcelik1705@gmail.com'> mehmetcelik1705@gmail.com</a>
      </main>
    </AboutContainer>
  )
}

export default About