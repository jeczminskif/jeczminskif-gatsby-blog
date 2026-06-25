import * as React from 'react'
import { Link } from 'gatsby'

const About = () => {
    return (
        <main>
            <h1>About me</h1>
            <Link to="/">Back to Home</Link>
        </main>
    )
}

export const Head = () => <title>jeczminskif-about</title>

export default About