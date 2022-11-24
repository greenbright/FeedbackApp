import React from 'react'
import {Link} from 'react-router-dom'
import Card from '../components/shared/Card'


function About() {
  return (
    <Card>
       <h3>This is the about page</h3>
       <p>A feedback review for knowing the rate of our service</p>
       <Link to='/'>Back to home</Link>
    </Card>
  )
}

export default About
