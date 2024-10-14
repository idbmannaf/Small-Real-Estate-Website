import Bath from "../svg/Bath";
import Bed from "../svg/Bed";

const Property = ({ title, bed, bath, price, image }) => {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-600/10">
      <img src={image} alt="property" />

      <div className="p-6">
        <h4 className="text-2xl font-bold cursor-pointer">{title}</h4>
        <div>
          {bed} beds &bull; {bath} baths
        </div>
        <div className="mt-2">
          <span className="text-xl font-extrabold text-blue-600">${price}</span>{" "}
          /M
        </div>
      </div>
      <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
        <div className="flex items-center">
          <Bed />
          <p>
            <span className="font-bold text-gray-900">{bed}</span> Bedrooms
          </p>
        </div>
        <div className="flex items-center">
          <Bath />
          <p>
            <span className="font-bold text-gray-900">{bath}</span> Bathrooms
          </p>
        </div>
      </div>
    </div>
  );
};

export default Property;
