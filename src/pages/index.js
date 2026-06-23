// https://24timezones.com/Warsaw/time

// Step 1: Import React
import * as React from 'react'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to my blog!</h1>
      <p>
        <b>I created it by following Gatsby's official tutorial!</b>
        <a href = "https://24timezones.com/Warsaw/time">TIME IN WARSAW - </a>
      </p>
    </main>
  )
}
// You'll learn about this in the next task, just copy it for now
export const Head = () =><title>jeczminskif-blog</title>

// Step 3: Export your component
export default IndexPage
