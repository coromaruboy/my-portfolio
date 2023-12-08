import * as React from "react"
import Layout from "../components/layout"
import Tanplate from "../components/template"

const title = "Welcome My Portfolio!"

const article = "遊びに来てくれてありがとう！"

const Home = () => {
  return (
    <Layout>
      <Tanplate title={title} />
      <div>{article}</div>
    </Layout>
  )
}

export default Home

export const Head = () => <title>Home Page</title>
