import React from "react"
import Articles from "../components/articles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Hero from "../components/hero"
import Nav from "../components/nav"
import Footer from "../components/footer"


const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout>
      <Seo seo={homepage.seo} />
      <Hero/>
      <Nav categories={categories} />
      <Articles articles={articles} />
      <Footer/>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ])

  console.log(articles)

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  }
}

export default Home
