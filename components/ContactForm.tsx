"use client";

import { FormEvent, useState } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  practiceArea: "",
  message: "",
};

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setValues(initialState);
      setStatus({
        type: "success",
        message: "Thank you. Your message has been sent successfully.",
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong.";
      setStatus({
        type: "error",
        message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Full name
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email address
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          Phone number
          <input type="tel" name="phone" value={values.phone} onChange={handleChange} />
        </label>

        <label>
          Area of interest
          <select name="practiceArea" value={values.practiceArea} onChange={handleChange}>
            <option value="">Select a practice area</option>
            <option value="Business & Corporate Law">Business & Corporate Law</option>
            <option value="Contracts & Agreements">Contracts & Agreements</option>
            <option value="Dispute Resolution">Dispute Resolution</option>
            <option value="Employment Law">Employment Law</option>
            <option value="Estate Planning">Estate Planning</option>
            <option value="Real Estate">Real Estate</option>
          </select>
        </label>
      </div>

      <label>
        How can we help?
        <textarea
          name="message"
          rows={7}
          value={values.message}
          onChange={handleChange}
          required
        />
      </label>

      <label className="checkbox-label">
        <input type="checkbox" required />
        <span>
          I understand that submitting this form does not create an attorney-client
          relationship.
        </span>
      </label>

      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Inquiry"}
      </button>

      {status.message ? (
        <p className={status.type === "success" ? "form-success" : "form-error"}>
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
