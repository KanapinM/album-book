import BannerInterface from "../types/BannerInterface.ts";

export default function Banner({
  color,
  title,
  titleStrong = undefined,
  descriptionAvailability = undefined,
  buttonPrice = undefined,
  buttonLink = undefined
}: BannerInterface) {

  return (
    <div className="banner" style={{ backgroundColor:  color }}>
      <h3 className="banner__title">
        { title}
        <strong className="banner__title_strong">{titleStrong}</strong>
      </h3>
      {descriptionAvailability && (
        <span className="banner__availability">
          {descriptionAvailability}
        </span>
      )}
      {buttonPrice && (
        <a
          href={ buttonLink}
          className="banner__btn"
        >
          Собрать книгу
          <span className="banner__price">от {buttonPrice} ₽</span>
        </a>
      )}
    </div>
  );
}
