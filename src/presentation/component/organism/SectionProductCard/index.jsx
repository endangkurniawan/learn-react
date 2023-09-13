import ProductCard from "presentation/component/molecule/ProductCard";

import useCart from "core/state/cart";

const SectionProductCard = (props) => {
  const { title, data } = props;
  const { totalCart, handleIncCart, handleDecCart, handleClearCart } = useCart();

  return (
    <div className="section-product-card">
      <div className="container">
        <h3 className="section-product-card-title">
          {title}
          <br />
          Keranjang: {totalCart}
          <br />
          <button type="button" onClick={handleDecCart}>
            -
          </button>
          <button type="button" onClick={handleIncCart}>
            +
          </button>
          <br />
          <button type="button" onClick={handleClearCart}>
            {" "}
            Clear
          </button>
        </h3>
        <div className="section-product-card-list">
          {data.map((val, idx) => (
            <div key={`pc-${idx}`} className="section-product-card-item">
              <ProductCard name={val.name} image={val.image} price={val.price} location={val.location} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionProductCard;
