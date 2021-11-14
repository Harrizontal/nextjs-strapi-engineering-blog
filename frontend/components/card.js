import React from "react"
import Link from "next/link"
import Image from "next/image"
import { getStrapiMedia } from "../lib/media"

const Card = ({ article, writer }) => {

  const loader = () => {
    return getStrapiMedia(article.image)
  }

  const displayAuthor = () => {

    let name;

    if(article.author.name != null){
      name = article.author.name
    }

    if(writer?.name != null){
      name = writer.name
    }

    return (
        <a className="text-md">by {name}</a>
    )
  }

  return (
        <div>
          <div className="relative w-full h-96">
            <Image
              loader={loader}
              src={article.image.url}
              objectFit="cover"
              layout="fill"
              />
          </div>
          <div>
            <Link href={`/category/${article.category.slug}`}>
              <p className="mt-2 text-purple-600">
                {article.category.name}
              </p>
            </Link>
            <div className="mb-2 mt-2">
              <Link href={`/article/${article.slug}`}>
                <a className="text-2xl">{article.title}</a>
              </Link>
            </div>
            <p>
              {displayAuthor()}
            </p>
          </div>
        </div>
  )
}

export default Card
