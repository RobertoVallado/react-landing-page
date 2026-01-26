import { useTranslation } from "react-i18next";
import '../styles/TravelExperience.css'

export default function TravelExperience() {
  const { t } = useTranslation();

  return (
    <section className="travel-experience-section">
      <div className="benefits-bar">
        <div className="benefits-container">
          <div className="benefit-item">
            <h3>{t("nativeKnowledgeTitle")}</h3>
            <p>{t("nativeKnowledgeDesc")}</p>
          </div>
          <div className="benefit-item">
            <h3>{t("culturalInsightTitle")}</h3>
            <p>{t("culturalInsightDesc")}</p>
          </div>
          <div className="benefit-item">
            <h3>{t("conversationalMethodTitle")}</h3>
            <p>{t("conversationalMethodDesc")}</p>
          </div>
        </div>
      </div>

      <div className="travel-content">
        <h2>{t("enhancedTravelTitle")}</h2>
        <p>{t("enhancedTravelDesc")}</p>
      </div>
    </section>
  );
}
