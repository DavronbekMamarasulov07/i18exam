import "./Nav.css"
import logo_text from "../../images/logo_text.svg"
import logo from "../../images/logo.svg"
import { Link, NavLink } from "react-router-dom"
import { Select } from "antd"
import { languages } from "../../utils"
import Container from "../container/Container"
import { useTranslation } from "react-i18next"
import i18n from "../../locales/index.js"

const Nav = () => {
  const data = useTranslation()

  const handleChangeLang = (e) => {
    i18n.changeLanguage(e)
  }

  const normalizedLang = () => {
    const updated = languages.map((language) => (
      {
        value: language.value,
        label: (
          <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: 'space-between' }}>
            <img
              src={language.flag}
              width="30px"
              alt={language.label}
            />
            
            {language.label}
        </div>
        )
      }
    ))
  
    return updated
  }

 
  return (
    <nav className="nav">
      <Container>
        <div className="nav_content">
           <Link to="/">  
            <div className="nav_logo_content">
                <img src={logo_text} alt="logo" />
                <img src={logo} alt="logo" />
            </div>
            </Link>
            <ul className="nav_list">
              <li className="nav_list_item">
                <NavLink to={"/portfolio"} className="nav_list_item_link">
                {data.t("nav.portfolio")}
                </NavLink>
              </li>
              <li className="nav_list_item">
                <NavLink to={"/blog"} className="nav_list_item_link">
                {data.t("nav.blog")}
                </NavLink>
              </li>
              <li className="nav_list_item">
                <NavLink to={"/cv"} className="nav_list_item_link">
                {data.t("nav.cv")}
                </NavLink>  
              </li>
              <li className="nav_list_item">
                <NavLink to={"/store"} className="nav_list_item_link">
                {data.t("nav.store")}
                </NavLink>
              </li>
              <li className="nav_list_item">
                <NavLink  to={"/freelance"} className="nav_list_item_link">
                {data.t("nav.freelance")}
                </NavLink>
              </li>
              <li className="nav_list_item">
                <NavLink to={"/aboutme"} className="nav_list_item_link">
                {data.t("nav.aboutme")}
                </NavLink>
              </li>
              <li className="nav_list_item">
                <NavLink to={"/contact"}  className="nav_list_item_link">
                {data.t("nav.contact")}
                </NavLink>
              </li>
              <Select 
                  className=" nav_list_item_select"
                  showSearch
                  defaultValue={"Select Language"}  
                  onChange={handleChangeLang}
                  style={{ width: 130 }}
                  options={normalizedLang()}
              />
            </ul>
        </div>
      </Container>
    </nav>
  )
}

export default Nav
