import type { JSX } from "react";
import { useTranslation } from "react-i18next";
import "../styles/Home.css";
import InstructorIntro from "./InstructorIntro";
import TravelExperience from "./TravelExperience";

export default function Home(): JSX.Element {
  const { t } = useTranslation();

  return (
    <main className="home-page">
      <section className="hero-section">
        <h1>{t("hero_title")}</h1>
        <p>{t("hero_subtitle")}</p>
        <TravelExperience />
        <InstructorIntro />




        {/* Maintenance Block */}
        <section className="maintenance-section">
          <div className="maintenance-card">
            <h2>{t("maintenance_title")}</h2>
            <p>{t("maintenance_description")}</p>
          </div>
        </section>

      </section>
    </main>
  );
}
