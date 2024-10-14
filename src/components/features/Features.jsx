import FeatureHeader from "./FeatureHeader";
import FeatureLists from "./FeatureLists";

const Features = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <FeatureHeader />
        <FeatureLists />
      </div>
    </section>
  );
};

export default Features;
