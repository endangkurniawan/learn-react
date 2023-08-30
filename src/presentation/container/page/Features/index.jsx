// -- component
import Default from "presentation/component/template/Default";
import SectionFeatures from "presentation/component/organism/SectionFeatures";

// -- data
import dataFeatures from "./dataFeatures";

const Features = () => {
  return (
    <Default>
      <SectionFeatures title={dataFeatures.title} desc={dataFeatures.desc} list={dataFeatures.list} />
    </Default>
  );
};

export default Features;
