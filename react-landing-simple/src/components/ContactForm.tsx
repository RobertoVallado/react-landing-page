import { useForm, ValidationError } from '@formspree/react';
import type { JSX } from "react";
import "../styles/ContactForm.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function ContactForm(): JSX.Element {
  const [state, handleSubmit] = useForm("xpqpzokp");
  const { t } = useTranslation();

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  if (state.succeeded) {
    return <p>{t("success")}</p>;
  }

  function validate(form: HTMLFormElement) {
    const newErrors: typeof errors = {};

    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value.trim();

    if (!name) newErrors.name = t("nameRequired");
    if (!email) newErrors.email = t("emailRequired");
    if (!message) newErrors.message = t("messageRequired");

    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = t("emailInvalid");
    }

    return newErrors;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const validationErrors = validate(form);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return; 
    }

    await handleSubmit(e);
  }
  
  return (
    <form onSubmit={onSubmit} className="contact-form" noValidate>

      <div className="form-group">
        <label htmlFor="name" className="form-label">{t("nameLabel")}</label>
        <input id="name" type="text" name="name" className="form-input" />
        {errors.name && <div className="form-error">{errors.name}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">{t("emailLabel")}</label>
        <input id="email" type="email" name="email" className="form-input" />
        {errors.email && <div className="form-error">{errors.email}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">{t("messageLabel")}</label>
        <textarea id="message" name="message" className="form-textarea" rows={5} />
        {errors.message && <div className="form-error">{errors.message}</div>}
      </div>

      <button type="submit" disabled={state.submitting} className="form-submit-button">
        {state.submitting ? t("sending") : t("submit")}
      </button>

      <input
        type="text"
        name="_gotcha"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
        />

    </form>
  );
}
