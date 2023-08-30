// -- component
import LearnMore from "presentation/component/atom/LearnMore";

const FeaturesItem = (props) => {
  const { image, imgBg, title, desc, btnTo } = props;
  return (
    <div className="features__item">
      <div
        className="features__rectangle"
        style={{
          backgroundImage: `${imgBg}`,
        }}
      >
        <div className="features__img">
          <img className="features__img__el" src={image} alt={title} />
        </div>
        <div className="features__txt">
          <h3 className="features__txt__title">{title}</h3>
          <p className="features__txt__desc">{desc}</p>
          <div className="features__btn">
            <LearnMore href={btnTo}>Learn more</LearnMore>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesItem;
