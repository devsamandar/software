import React from "react";
import pricingsData from "../../data/pricings.data";
import PricingCard from "../../components/PricingCard";

function Pricing() {
  return (
    <section className="py-16 sm:py-24" id="pricing">
      <div className="container">
        <div className="text-center">
          <h1 className="text-3xl/tight font-medium mb-4">Pricing</h1>
          <p className="text-gray-500">
            Pricing that <span className="text-primary">works </span> for
            everyone
          </p>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 mt-14">
          {pricingsData.map((item, index) => (
            <PricingCard item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
