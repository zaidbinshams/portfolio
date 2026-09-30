import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";

const FORM_ID = "mnpnrljj";

export default function Contact() {
  const [state, handleSubmit, reset] = useForm(FORM_ID);

  const [sent, setSent] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (!state.succeeded) return;

    setSent(true);

    const timer = setTimeout(() => {
      setSent(false);
      reset();
    }, 3000);

    return () => clearTimeout(timer);
  }, [state.succeeded, reset]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!name) {
      newErrors.name = "Please enter your name.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!email) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!message) {
      newErrors.message = "Please enter a message.";
    }

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(Boolean);

    if (hasErrors) {
      return;
    }

    handleSubmit(event);
  };

  const clearFieldError = (field) => {
    if (!errors[field]) return;

    setErrors((current) => ({
      ...current,
      [field]: "",
    }));
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2>Say Hi!</h2>

        <p className="contact-intro">
          Have something to say, build, discuss, or just want to say hello?
          Drop me a message.
        </p>

        <form
          className="contact-form"
          onSubmit={handleFormSubmit}
          noValidate
        >
          <div className="contact-field">
            <label htmlFor="name">Name</label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              autoComplete="name"
              onChange={() => clearFieldError("name")}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
            />

            {errors.name && (
              <div id="name-error" className="contact-validation-error">
                {errors.name}
              </div>
            )}

            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
            />
          </div>

          <div className="contact-field">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              name="email"
              type="text"
              inputMode="email"
              placeholder="you@example.com"
              autoComplete="email"
              onChange={() => clearFieldError("email")}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />

            {errors.email && (
              <div id="email-error" className="contact-validation-error">
                {errors.email}
              </div>
            )}

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="contact-field">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              placeholder="What's on your mind?"
              rows="5"
              onChange={() => clearFieldError("message")}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
            />

            {errors.message && (
              <div id="message-error" className="contact-validation-error">
                {errors.message}
              </div>
            )}

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <ValidationError errors={state.errors} />

          <button type="submit" disabled={state.submitting}>
            {state.submitting
              ? "Sending..."
              : sent
                ? "Sent!"
                : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}