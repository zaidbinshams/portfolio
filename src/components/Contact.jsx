import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2>Say Hi!</h2>

        <form className="contact-form">
          <div className="contact-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="What's on your mind?"
            />
          </div>

          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;