import React from 'react'
import Card from '../shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <h1>About this project</h1>
        <p>this is a react app to gather feedback</p>
        <p>version: 1.0.0</p>
        <p>
            <Link to="/">Back to Home</Link>
        </p>
    </Card>
  )
}

export default AboutPage