import React from "react";
import emailjs from "emailjs-com";

function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("service_gd267mb", "template_4iik70o", e.target, "KJh3qHLSfN9B91nQU")
      .then(
        (result) => {
          document
            .querySelector('#contact-name')
            .value = ''
          document
            .querySelector('#contact-email')
            .value = ''
          document
            .querySelector('#contact-subject')
            .value = ''
          document
            .querySelector('#contact-message')
            .value = ''
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(
        document
          .querySelector('#response-message')
          .classList.remove('d-none')
      )
  }

  return (
    <div className="container mb-4 pb-5">
      <div className="row justify-content-center">
        <div className="col-6 col-lg-3">
          <h1 className="display-2 text-white text-decoration-underline pb-3">
            Contact
          </h1>
        </div>
      </div>
      <div className="row py-4 justify-content-center">
        <form className="contact-card col-11 col-lg-6" onSubmit={sendEmail}>
          <div className="card-body mb-3">
            <label className="form-label contact-form">Name</label>
            <input type="text" className="form-control" id="contact-name" name="from_name" />
            <label className="form-label contact-form pt-3">Email address</label>
            <input type="email" className="form-control" id="contact-email" name="from_email" />
            <label className="form-label pt-3 contact-form">Subject</label>
            <input type="text" className="form-control" id="contact-subject" name="subject" />
          </div>
          <div className="mb-3">
            <label className="form-label contact-form">Message</label>
            <textarea
              className="form-control"
              id="contact-message"
              name="message"
              rows="5"
            ></textarea>
            <button className="btn btn-primary mt-3 float-end" type="submit" value="Send">Submit</button>
          </div>
        </form>
        <p className="d-none" id="response-message">Message Sent. Thanks for reaching out!</p>
      </div>
    </div>
  );
}

export default Contact;
