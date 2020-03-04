import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

export const Blog = props => {
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const url = node.data.target.fields.file['en-US'].url
        const alt = node.data.target.fields.title['en-US']
        return <img src={url} alt={alt} />
      },
    },
  }

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      <div>{documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}</div>
    </Layout>
  )
}

export default Blog
