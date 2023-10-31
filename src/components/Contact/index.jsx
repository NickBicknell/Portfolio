function Contact() {
    return (
      <div className="container mb-4 pb-5">
      <div className="row justify-content-center">
        <div className="col-3">
        <h1 className="display-2 text-white text-decoration-underline pb-3">Contact</h1>
        </div>
      </div>
      <div className="row py-4 justify-content-center">
        <div className="contact-card col-6">
        <div className="card-body mb-3">
  <label className="form-label contact-form">Email address</label>
  <input type="email" className="form-control" id="contact-email" />
  <label className="form-label pt-3 contact-form">Subject</label>
  <input type="text" className="form-control" id="contact-subject" />
</div>
<div className="mb-3">
  <label className="form-label contact-form">Message</label>
  <textarea className="form-control" id="contact-message" rows="5"></textarea>
</div>
        </div>
      </div>
      </div>
    )
  }
  
  export default Contact