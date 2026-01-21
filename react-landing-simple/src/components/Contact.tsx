import type { JSX } from "react";

export default function Contact(): JSX.Element {
  return (
    <section className="section">
      <h2>Get in Touch</h2>
      <p>
        Have questions or want to book a class?{" "}
        <a href="mailto:youremail@example.com">
          Send me an email
        </a>
      </p>
    </section>
  );
}
