import React from 'react'
import "./about.css"
import Image from "../../assets/avatar-2.svg"

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
      <img className='about__img' src={Image} alt="" srcset="" />

      <div className="about__data grid">
        <div className="about__info">
          <p className="about__description">I am Ivan Georgiev, web developer from Burgas, Bulgaria. As of right now im trying to learn more about web development and im always keen on trying new things! In my free time I like to play video games or skateboard. </p>
          <a href="#" className="btn">My CV</a>
        </div>

        <div className="about__skills grid">

          <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__name">Development</h3>
              <span className="skills__number"></span>
            </div>

            <div className="skills__bar">
              <span className="skills__percentage development"></span>
            </div>
          </div>

          <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__name">UX/UI Design</h3>
              <span className="skills__number"></span>
            </div>

            <div className="skills__bar">
              <span className="skills__percentage ui__design"></span>
            </div>
          </div>

        </div>
      </div>
    </div>
      
    </section>
  )
}

export default About