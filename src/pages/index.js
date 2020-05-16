import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
    <SEO title="Home" />
    <div style={{ margin: "auto" }}>
      <h1>No Words</h1>
      <p>更懂你的单词学习工具</p>
    </div>
  </div>
)

export default IndexPage
