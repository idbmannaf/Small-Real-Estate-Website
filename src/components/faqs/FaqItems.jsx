import FaqItem from "./FaqItem";

const FaqItems = () => {
  return (
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4 lg:w-1/2">
        <FaqItem
          title="Is TailGrids Well-documented?"
          description=" It takes 2-3 weeks to get your first blog post ready. That includes
          the in-depth research & creation of your monthly content ui/ux
          strategy that we do writing your first blog post."
        />
        <FaqItem
          title="Is TailGrids Well-documented?"
          description=" It takes 2-3 weeks to get your first blog post ready. That includes
          the in-depth research & creation of your monthly content ui/ux
          strategy that we do writing your first blog post."
        />
      </div>
      <div className="w-full px-4 lg:w-1/2">
        <FaqItem
          title="Is TailGrids Well-documented?"
          description=" It takes 2-3 weeks to get your first blog post ready. That includes
          the in-depth research & creation of your monthly content ui/ux
          strategy that we do writing your first blog post."
        />
        <FaqItem
          title="Is TailGrids Well-documented?"
          description=" It takes 2-3 weeks to get your first blog post ready. That includes
          the in-depth research & creation of your monthly content ui/ux
          strategy that we do writing your first blog post."
        />
      </div>
    </div>
  );
};

export default FaqItems;
