import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const About = () => {
    return (
        <main>
            <Layout pageTitle="about me">
                <p>My name is Filip and I am 18 year old high school student from Poland. I go to <a href ='https://www.lo2konskie.pl/'>II LO in Końskie</a></p>
            <br></br><i>some links:</i>
            <ul>
                <li><a href = 'https://www.strava.com/athletes/107581717'>my strava account</a></li>
                <li><a href = 'https://github.com/jeczminskif'>my github page</a></li>
            </ul>
            </Layout>
        </main>
    )
}

export const Head = () => <title>jeczminskif-about</title>

export default About