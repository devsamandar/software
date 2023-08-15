import React from "react";

function FeatureCard({ item }) {
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="bg-primary/10 rounded-lg flex items-center justify-center h-12 w-12">
          {item.image}
        </div>
        <h1 className="font-medium">{item.text}</h1>
      </div>
    </>
  );
}

export default FeatureCard;
