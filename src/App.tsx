import { useState } from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick_theme.css";
import data from "./data.json";
import Banner from "./components/Banner.tsx";


function App() {
  const [countOfBanners, setCountOfBanners] = useState(4);

  const { bannerList } = data;
  const bannerSlice = bannerList.slice(0, countOfBanners);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {bannerSlice.map((item) => (
          <div key={item.id} className="banner_wrapper">
            <Banner {...item} />
          </div>
        ))}
      </Slider>
      <button className="up-counter" type="button" onClick={() => setCountOfBanners((count) => count + 1)}>+</button>
      <button className="down-counter" type="button" onClick={() => setCountOfBanners((count) => count - 1)}>-</button>
    </div>
  );
}

export default App;
