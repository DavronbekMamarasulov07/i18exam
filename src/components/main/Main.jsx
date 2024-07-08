import { MdOutlineVerticalAlignTop } from "react-icons/md"; 
import "./Main.css"
import { blogs } from '../../db'
import { useTranslation } from 'react-i18next'
import { Link, NavLink } from "react-router-dom"

import { useState } from "react"

const Main = () => {
  const data = useTranslation()
  const [step, setStep] = useState(2);

  let count = 2;



  return (
    <section className='main'>k
      <div className="main_categories">
        <ul className="main_categories_list">
          <li><NavLink to="/" className="main_categories_item_link">{data.t("categories.all")}</NavLink></li>
          <li><NavLink to="/ui-design" className="main_categories_item_link">{data.t("categories.phones")}</NavLink></li>
          <li><NavLink to="/ux-design" className="main_categories_item_link">{data.t("categories.tablets")}</NavLink></li>
          <li><NavLink to="/product-design" className="main_categories_item_link">{data.t("categories.laptops")}</NavLink></li>
          <li><NavLink to="/articles" className="main_categories_item_link">{data.t("categories.cameras")}</NavLink></li>
          <li><NavLink to="/tutorials" className="main_categories_item_link">{data.t("categories.others")}</NavLink></li>
        </ul>
      </div>
      <div className="main_content">
        {
          blogs.slice(0, count * step).map((blog) => (
            <div className='main__item' key={blog.id}>
              <img width={600} height={400} src={blog.image} alt={blog.title} />
              <div className="main__wrapper">
                <h3 className="main__title">
                  {blog[`title_${data.i18n.language}`]
                    ? blog[`title_${data.i18n.language}`]
                    : blog[`title_en`]}
                </h3>
                <p className="main__text">
                {blog[`info_${data.i18n.language}`]
                    ? blog[`info_${data.i18n.language}`]
                    : blog[`info_en`]}
                </p>
                <Link to={`/blog/${blog.id}`} className="main__link"> {data.t("main.title")} </Link>
              </div>
            </div>
          ))
        }
      </div>
      {
        step == 10 
        ?
        <div className="blog_btn_content">
            <button className="main__button to-back" onClick={() => setStep((prevData) => prevData - 8)}><MdOutlineVerticalAlignTop /> Back</button>
        </div>
        
        : 
        <div className="blog_btn_content">
           <button className="main__button" onClick={() => setStep((prevData) => prevData + 1)}>Show more</button>
        </div>
      }
      
    </section>
  )
}

export default Main
