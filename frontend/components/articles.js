import React from "react"
import Card from "./card"

const Articles = ({ articles, writers }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5)
  const leftArticles = articles.slice(0, 1)
  const rightArticles = articles.slice(1, articles.length)


  const getWriter = (writerId) => {
    if(writers == null){
      return;
    }

    for (let i = 0; i < writers.length; i++) {
      if(writers[i]['id'] === writerId){
        console.log(writers[i])
        return writers[i];
      }
    }
  }

  

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid gap-16 grid-cols-1 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
        {leftArticles.map((article) => (
            <div className="col-span-1 lg:col-span-2">
              <Card article={article} writer={getWriter(article.author)} key={`article__left__${article.slug}`}></Card>
            </div>
          ))
        }
        {rightArticles.map((article) => (
              <div>
                <Card article={article} writer={getWriter(article.author)} key={`article__left__${article.slug}`}></Card>
              </div>
            ))}
      </div>
    </div>
    // <div>
    //   <div className="uk-child-width-1-2@s" data-uk-grid="true">
    //     <div>
    //       {leftArticles.map((article, i) => {
    //         return (
    //           <Card article={article} key={`article__left__${article.slug}`} />
    //         )
    //       })}
    //     </div>
    //     <div>
    //       <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
    //         {rightArticles.map((article, i) => {
    //           return (
    //             <Card
    //               article={article}
    //               key={`article__left__${article.slug}`}
    //             />
    //           )
    //         })}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Articles
