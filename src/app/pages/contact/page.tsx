"use client"

export default function Contact() {
  

  return (
    <div className="page contact-page">
      <h1>Contact Us</h1>
      
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Have questions? We&apos;d love to hear from you.</p>
          
          <div className="contact-details">
            <p>📍 555 Car Street, Automotive City</p>
            <p>📞 (+677) 123-4567</p>
            <p>✉️ info@carhub.com</p>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
            />
          </div>

          <button className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
}
