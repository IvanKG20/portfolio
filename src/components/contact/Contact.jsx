import React from 'react'
import "./contact.css"
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p4mef6f', 'template_zk890ji', form.current, 'bjMBvvUDuEoyKmKTE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };


  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">Contact Me</h2>

      <div className="contact__container grid">

        <div className="contact__info">
          <h3 className="contact__title">Text me!</h3>
          <p className="contact__details">I will respond as soon as possible.</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-group">

            <div className="contact__form-div">
              <input type="text" name="name" className="contact__form-input" placeholder='Insert your name'/>
            </div>

            <div className="contact__form-div">
              <input type="email" name='email' className="contact__form-input" placeholder='Insert your email'/>
            </div>
          </div>

          <div className="contact__form-div">
              <input type="text" className="contact__form-input" name='subject' placeholder='Insert your subject'/>
            </div>

          <div className="contact__form-div">
              <textarea name="message" id="" cols="30" rows="10" className='contact__form-input contact__form-area' placeholder='Write your message'></textarea>
            </div>

            <button type="submit" className="btn btnContact">Send your message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact