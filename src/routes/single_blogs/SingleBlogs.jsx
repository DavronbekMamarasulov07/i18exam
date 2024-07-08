import { useParams } from 'react-router-dom';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';
import Container from '../../components/container/Container';
import { useTranslation } from 'react-i18next';
import { blogs } from '../../db';
import SingleBlogsContent from '../../components/single_blog_contec/SingleBlogsContent';

const SingleBlogs = () => {
  const data = useTranslation();
  let { blogsId } = useParams();

  const blog = blogs.find(blog => blog.id === parseInt(blogsId));

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <>
    <Nav />
      <Container>
        <SingleBlogsContent blog={blog}  data={data}/>
      </Container>
    <Footer />
    </>
  )
}

export default SingleBlogs
