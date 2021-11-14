import React from "react"
import Link from "next/link"

const Nav = ({ categories }) => {
  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 mt-10">
      <div className="flex">
          {categories.map((category) => {
            return (
              <div className="mr-5" key={category.id}>
                <Link href={`/category/${category.slug}`}>
                  <a className="font-bold">{category.name}</a>
                </Link>
              </div>
            )
          })}
      </div>
    </nav>
  )
}

export default Nav
