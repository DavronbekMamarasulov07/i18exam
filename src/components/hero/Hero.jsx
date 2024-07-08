import "./Hero.css"



import twitter from "../../images/twitter.svg"
import linkedin from "../../images/linkedin.svg"
import medium from "../../images/medium.svg"
import hero from "../../images/hero.png"
import { useTranslation } from "react-i18next"

const Hero = () => {
  const  data  = useTranslation()



  return (
    <section className='hero'>
      <div className="hero__wrapper">
        <h2 className="hero__title">
          <strong>{data.t("hero.title")}</strong>
          {data.t("hero.subtitle")}
        </h2>
        <p className="hero__text">{data.t("hero.info")}</p>
        <div className="social_items">
          <button>
            <a href="/" className="twitter">
              <img src={twitter} alt="twitter" />
              twitter
            </a>
          </button>
          <button>
            <a href="/" className="linkedin">
              <img src={linkedin} alt="linkedin" />
              linkedin
            </a>
          </button>
          <button>
            <a href="/" className="medium">
              <img src={medium} alt="medium" />
              medium
            </a>
          </button>
        </div>
      </div>
      <div className="hero__img_content">
        <img src={hero} alt="hero" />
      </div>
    </section>
  )
}

export default Hero
