const Overview = (data) => {
  const { image, title, desc } = data;
  return (
    <div className="overview" id="help">
      <div className="container">
        <div className="overview__box">
          <div className="overview__img">
            <img className="overview__img__el" src={image} alt={image} />
          </div>
          <div className="overview__txt">
            <h2 className="overview__title">{title}</h2>
            <p className="overview__desc">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
