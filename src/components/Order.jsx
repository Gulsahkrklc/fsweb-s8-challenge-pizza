import React, { useState } from 'react';

function Order() {
  const [size, setSize] = useState('');
  const [hamur, setHamur] = useState('Hamur Kalınlığı');
  const [extras, setExtras] = useState([]);
  const [miktar, setMiktar] = useState(1);
  const [totalPrice, setTotalPrice] = useState(85.5); // Başlangıç fiyatı

  const handleExtraChange = (e) => {
    const value = e.target.value;
    const isSelected = extras.includes(value);

    setExtras((prevExtras) =>
      isSelected
        ? prevExtras.filter((extra) => extra !== value)
        : [...prevExtras, value]
    );

    // Fiyatı güncelle
    setTotalPrice((prevPrice) =>
      isSelected ? prevPrice - 5 : prevPrice + 5
    );
  };

  const handleMiktarChange = (type) => {
    setMiktar((prevMiktar) => {
      const newMiktar = type === 'increase' ? prevMiktar + 1 : prevMiktar - 1;
      return newMiktar < 1 ? 1 : newMiktar; // 1'den küçük miktar olmaz
    });

    // Fiyatı miktara göre güncelle
    setTotalPrice((prevPrice) =>
      type === 'increase' ? prevPrice + 85.5 : prevPrice - 85.5
    );
  };

  return (
    <div className="container">
      <h2 className="position">Position Absolute Acı Pizza</h2>
      <div className='degerlendirmek'>
        <p className="fiyat">85.50₺</p>
        <div className='degerlendirme'>
          <p>4.9</p>
          <p className='puan'>(200)</p>
        </div>
      </div>
      <p className="text">
        Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre...
      </p>

      <div className='sec'>
        <div className='byt'>
          <h3>Boyut Seç <span className="required">*</span></h3>
          <div className="radio-group">
            <label>
              <input type="radio" name="size" value="Küçük" onChange={() => setSize('Küçük')} />
              Küçük
            </label>
            <label>
              <input type="radio" name="size" value="Orta" defaultChecked onChange={() => setSize('Orta')} />
              Orta
            </label>
            <label>
              <input type="radio" name="size" value="Büyük" onChange={() => setSize('Büyük')} />
              Büyük
            </label>
          </div>
        </div>

        <div className='hmr'>
          <span className="black-text">Hamur Seç</span>
          <span className="red-text">*</span>
          <select value={hamur} onChange={(e) => setHamur(e.target.value)}>
            <option disabled>Hamur Kalınlığı</option>
            <option>İnce</option>
            <option>Normal</option>
            <option>Kalın</option>
          </select>
        </div>
      </div>

      <div className="ek">
        <label className="ekmalzeme">Ek Malzemeler</label>
        <p className='uyarı'>En fazla 10 malzeme seçebilirsiniz.5₺</p>
        <div className="checkbox-container">
          <label><input type="checkbox" value="Mısır" onChange={handleExtraChange} /> Mısır</label>
          <label><input type="checkbox" value="Sucuk" onChange={handleExtraChange} /> Sucuk</label>
          <label><input type="checkbox" value="Jalapeno" onChange={handleExtraChange} /> Jalapeno</label>
          <label><input type="checkbox" value="Sosis" onChange={handleExtraChange} /> Sosis</label>
          <label><input type="checkbox" value="Soğan" onChange={handleExtraChange} /> Soğan</label>
          <label><input type="checkbox" value="Tavuk Izgara" onChange={handleExtraChange} /> Tavuk Izgara</label>
          <label><input type="checkbox" value="Kanada Jambonu" onChange={handleExtraChange} /> Kanada Jambonu</label>
          <label><input type="checkbox" value="Pepperoni" onChange={handleExtraChange} /> Pepperoni</label>
          <label><input type="checkbox" value="Domates" onChange={handleExtraChange} /> Domates</label>
          <label><input type="checkbox" value="Sarımsak" onChange={handleExtraChange} /> Sarımsak</label>
          <label><input type="checkbox" value="Biber" onChange={handleExtraChange} /> Biber</label>
          <label><input type="checkbox" value="Ananas" onChange={handleExtraChange} /> Ananas</label>
          <label><input type="checkbox" value="Kabak" onChange={handleExtraChange} /> Kabak</label>
        </div>
      </div>

      <div className="siparisNotu">
        <label className="siparisNotuBaslik">Sipariş Notu</label>
        <textarea className="not" placeholder="Siparişine eklemek istediğin bir not var mı?"></textarea>
      </div>

      <div className="buttonlar">
        <button className="eksiButton" onClick={() => handleMiktarChange('decrease')}>-</button>
        <span className="miktar">{miktar}</span>
        <button className="artiButton" onClick={() => handleMiktarChange('increase')}>+</button>
      </div>

      <div className="total-price">
        <p className='toplamsiparis'>Sipariş Toplamı</p>
        <p className='toplam'>Toplam: {totalPrice.toFixed(2)}₺</p>
      </div>

      <div className="text-right">
        <button className="siparisVer">Siparişi Ver</button>
      </div>
    </div>
  );
}

export default Order;
