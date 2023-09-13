// Hooks
import useFetch from "core/hooks/useFetch";

// component
import SectionProductCard from "presentation/component/organism/SectionProductCard";

const WidgetProduct = () => {
  const { data: getDataProduct } = useFetch("https://x-api.alpha-x.id/v1/product");
  const dataProduct = getDataProduct.data !== undefined ? getDataProduct.data : [];

  return <SectionProductCard title="Produk Terbaru Minggu ini" data={dataProduct} />;
};

export default WidgetProduct;
