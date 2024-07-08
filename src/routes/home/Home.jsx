import React from 'react'
import Nav from '../../components/nav/Nav'
import Hero from '../../components/hero/Hero'
import Main from '../../components/main/Main'
import Container from '../../components/container/Container'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Nav/>
      <Container>
        <Hero/>
        <Main/>
        <Footer/>
      </Container>
    </div>
  )
}

export default Home
