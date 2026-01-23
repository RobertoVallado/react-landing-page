import type { JSX } from "react";
import { useTranslation } from "react-i18next";
import "../styles/Contact.css";
import ContactForm from './ContactForm';

export default function Contact(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section className="section">
      <h2>{t("contact_title")}</h2>
      <p>{t("contact_description")}</p>
      {/* <a
        href="mailto:contact@robertovallado.dev"
        className="contact-button"
      >
        {t("contact_button")}
      </a> */}

          <ContactForm />

    </section>
  );
}
