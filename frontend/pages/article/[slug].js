import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"
import NextImage from "../../components/image"
import Seo from "../../components/seo"
import { getStrapiMedia } from "../../lib/media"
import MainNav from "../../components/mainnav"
import Image from "next/image"
import Link from "next/link"
import Footer from "../../components/footer"

const Article = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.image)

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  }

  const loader = () => {
    return getStrapiMedia(article.image)
  }

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <MainNav/>
      <div className="relative w-full h-96 h0">
        <Image
          loader={loader}
          src={article.image.url}
          objectFit="cover"
          layout="fill"
        >
        </Image>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="mt-10">
          <h1 className="text-3xl mb-4">{article.title}</h1>
          <span>By {article.author.name}</span> - <span><Link href={`/category/${article.category.slug}`}>{article.category.name}</Link></span>
        </div>
        
        
        <Moment format="MMM Do YYYY">{article.published_at}</Moment>
          
        <div className="mt-10">
          <ReactMarkdown source={article.content} escapeHtml={false} />
          {/* {article.author.picture && (
                    <NextImage image={article.author.picture} />
                  )} */}
          
        </div>
      </div>
      <Footer/>
    </Layout>
  )
}

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles")

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(`/articles?slug=${params.slug}`)
  const categories = await fetchAPI("/categories")

  console.log(articles[0])

  return {
    props: { article: articles[0], categories },
    revalidate: 1,
  }
}

export default Article
