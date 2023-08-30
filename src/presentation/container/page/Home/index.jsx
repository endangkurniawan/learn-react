// -- core
import { useEffect, useState } from "react";

// dummy
import dataProduct from "./dummy/dataProduct";

// -- component
import Default from "presentation/component/template/Default";
import SectionProductCard from "presentation/component/organism/SectionProductCard";

const Home = () => {
  const [dataNewProduct, setDataNewProduct] = useState([]);

  useEffect(() => {
    fetch("https://x-api.alpha-x.id/v1/product")
      .then((response) => response.json())
      .then((data) => {
        setDataNewProduct(data.data);
      });
  }, []);
  return (
    <Default>
      <SectionProductCard title="Produk Terbaru" data={dataNewProduct} />
      <div className="container">
        <h1>Home page</h1>
      </div>
    </Default>
  );
};

export default Home;
