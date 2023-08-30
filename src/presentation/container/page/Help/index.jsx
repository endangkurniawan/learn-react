// -- core
import React from "react";

// -- component
import Default from "presentation/component/template/Default";
import Overview from "presentation/component/organism/Overview";

// --- data
import dataOverview from "./dataOverview";

const Help = () => {
  return (
    <Default>
      <Overview image={dataOverview.image} title={dataOverview.title} desc={dataOverview.desc} />
    </Default>
  );
};

export default Help;
