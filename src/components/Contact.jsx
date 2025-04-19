import React from 'react'

const Contact = () => {
  return (
    <>
<div className="breadcrumb-container">
  <div className="breadcrumb-wrapper">
    <nav className="breadcrumb-nav">
      <a href="/" className="breadcrumb-link">Home</a>
      <span className="breadcrumb-separator">&gt;</span>
      <span className="breadcrumb-current">Contact</span>
    </nav>
  </div>
</div>
    <div className="contact-main">
    <div className="container">
        <div className="contact-info">
            <h1>Contact Us</h1>
            
            <div className="info-section">
                <div className="info-title">
                    <div className="icon"><i class="fa-solid fa-house"></i></div>
                    <h3>Address</h3>
                </div>
                <div className="info-content">
                    <p>123 Main Street, Anytown, CA 12345 - USA</p>
                </div>
            </div>
            
            <div className="info-section">
                <div className="info-title">
                    <div className="icon"><i class="fa-solid fa-envelope-open-text"></i></div>
                    <h3>Phone</h3>
                </div>
                <div className="info-content">
                    <p>Mobile: (08) 123 456 789</p>
                    <p>Hotline: 1009 678 456</p>
                </div>
            </div>
            
            <div className="info-section">
                <div className="info-title">
                    <div className="icon"><i class="fa-solid fa-phone"></i></div>
                    <h3>Email</h3>
                </div>
                <div className="info-content">
                    <p>yourmail@domain.com</p>
                    <p>support@roadthemes.com</p>
                </div>
            </div>
        </div>
        
        <div className="contact-form">
            <h1>Tell Us Your Message</h1>
            
            <form>
                <div className="form-group">
                    <label for="name">Your Name (required)</label>
                    <input type="text" id="name" required />
                </div>
                
                <div className="form-group">
                    <label for="email">Your Email (required)</label>
                    <input type="email" id="email" required />
                </div>
                
                <div className="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" />
                </div>
                
                <div className="form-group">
                    <label for="message">Your Message</label>
                    <textarea id="message"></textarea>
                </div>
                
                <button type="submit">Send</button>
            </form>
        </div>
    </div>
    </div>
        
    </>
  )
}

export default Contact
