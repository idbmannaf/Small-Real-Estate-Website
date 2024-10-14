import ExpertGuidance from "../svg/features/ExpertGuidance";
import PersonalizedProperty from "../svg/features/PersonalizedProperty";
import PremiumProperty from "../svg/features/PremiumProperty";
import VirtualTours from "../svg/features/VirtualTours";
import FeatureCard from "./FeaturesCard";
import { featuresData } from "./FeatursData";

const FeatureLists = () => {
  return (
    <div className="-mx-4 flex flex-wrap">
      {featuresData.map((feature) => {
        if (feature.svg === "Premium_Property") {
          feature.icon = <PremiumProperty />;
        } else if (feature.svg === "Personalized_Property") {
          feature.icon = <PersonalizedProperty />;
        } else if (feature.svg === "Expert_Guidance") {
          feature.icon = <ExpertGuidance />;
        } else if (feature.svg === "Virtual_Tours") {
          feature.icon = <VirtualTours />;
        }

        return <FeatureCard key={feature.id} {...feature} />;
      })}
    </div>
  );
};

export default FeatureLists;
