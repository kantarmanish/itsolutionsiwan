import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map ='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57270.71088177351!2d84.2805356486328!3d26.215557899999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992fc006151d267%3A0x5df69c14d63ef24c!2sIt%20solutions%20computer%20center!5e0!3m2!1sen!2sin!4v1737181237653!5m2!1sen!2sin';

  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>I T Solution · Address
                  Arya Samaj Campus, D A V College More, Siwan, Bihar 841226</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> itsolutionsiwan@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +91 9279501441</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
