import FeaturesItem from "presentation/component/molecule/FeaturesItem";
import { Fragment } from "react";

const SectionFeatures = (props) => {
  const { title, desc, list } = props;
  return (
    <div className="features" id="features">
      <div className="container">
        <div className="features__head">
          <h2 className="features__title">{title}</h2>
          <p className="features__desc">{desc}</p>
        </div>
        <div className="features__list">
          {list.map((val, idx) => {
            return (
              <Fragment key={`fi-${idx}`}>
                <FeaturesItem image={val.image} imgBg={val.imgBg} title={val.title} desc={val.desc} btnTo={val.btnTo} />
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionFeatures;
