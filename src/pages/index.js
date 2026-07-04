// https://24timezones.com/Warsaw/time

// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="homepage">
      <p><i>current time in Warsaw: </i></p>
    </Layout>
  )
}
// You'll learn about this in the next task, just copy it for now
export const Head = () =><title>jeczminskif-homepage</title>

// Step 3: Export your component
export default IndexPage
