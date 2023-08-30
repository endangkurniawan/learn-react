import { useEffect, useState } from "react";

// -- util
import formatRupiah from "core/util/formatRupiah";

// -- component
import Button from "presentation/component/atom/Button";

const SectionChapter = () => {
  // state full
  const [jumlah, setJumlah] = useState(1);
  const [total, setTotal] = useState("");
  const harga = 500;

  const handleKurang = () => {
    const jumlahAkhir = jumlah !== 1 ? jumlah - 1 : jumlah;
    setJumlah(jumlahAkhir);
  };
  const handleTambah = () => {
    setJumlah(jumlah + 1);
  };
  useEffect(() => {
    setTotal(formatRupiah(jumlah * harga));
  }, [jumlah]);

  return (
    <div className="chapter">
      <div className="chapter" id="signup">
        <div className="container">
          <div className="chapter__wrapper">
            <h2 className="chapter__title">Sub Total : {total}</h2>
          </div>
          <div className="chapter__btn">
            <div className="chapter__btn__item">
              <Button type="button" onClick={handleKurang} variant="secondary">
                Kurang
              </Button>
              <strong>{jumlah}</strong>
              <Button type="button" onClick={handleTambah}>
                Tambah
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionChapter;
