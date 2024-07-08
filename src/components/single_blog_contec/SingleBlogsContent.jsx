import React from 'react'
import "./SingleBlogsContent.css"

const SingleBlogsContent = ({ blog, data }) => {
    return (
        <div>
            <div className="single_blogs_content">
                <div className="single_blogs_img_content">
                <img
                    className="single_blogs_image"
                    src={blog.image}
                    alt="single_blogs_image"
                />

                </div>
                <h2 className="single_blogs_title">
                    {blog[`title_${data.i18n.language}`]
                        ? blog[`title_${data.i18n.language}`]
                        : blog[`title_en`]}
                </h2>
                <p className="single_blogs_text">
                    {blog[`info_${data.i18n.language}`]
                        ? blog[`info_${data.i18n.language}`]
                        : blog[`info_en`]}
                    <br />
                    <br />
                    {blog[`info_${data.i18n.language}`]
                        ? blog[`info_${data.i18n.language}`]
                        : blog[`info_en`]}
                    <br />
                    <br />
                    {blog[`info_${data.i18n.language}`]
                        ? blog[`info_${data.i18n.language}`]
                        : blog[`info_en`]}
                    <br />
                </p>
                <div className="blog_detals">
                 <h3>{data.t("blog.title")}</h3>
                    <p>{data.t("blog.text")}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleBlogsContent
