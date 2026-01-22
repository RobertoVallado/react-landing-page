import type { JSX } from "react";
import { useTranslation } from "react-i18next";

export default function About(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section className="section">
      <h2>{t("about_title")}</h2>
      <p>{t("about_description")}</p>
    </section>
  );
}
