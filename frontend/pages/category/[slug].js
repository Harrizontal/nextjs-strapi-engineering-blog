import Articles from "../../components/articles"
import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import MainNav from "../../components/mainnav"
import Nav from "../../components/nav"
import Footer from "../../components/footer"

const Category = ({ category, categories, writers }) => {
  const seo = {
    metaTitle: category.name,
    metaDescription: `All ${category.name} articles`,
  }

  return (
    <Layout>
      <Seo seo={seo} />
      <MainNav/>
      <Nav categories={categories} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <h1 className="text-4xl">{category.name}</h1>
      </div>
      <Articles articles={category.articles} writers={writers} />
      <Footer/>
    </Layout>
  )
}

export async function getStaticPaths() {
  const categories = await fetchAPI("/categories")

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const category = (await fetchAPI(`/categories?slug=${params.slug}`))[0]
  const categories = await fetchAPI("/categories")
  const writers = await fetchAPI("/writers")

  console.log(category);
  return {
    props: { category, categories,writers },
    revalidate: 1,
  }
}

export default Category
