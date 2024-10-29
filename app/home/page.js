
import React from 'react'
import Project from '../components/Projects/Project'
import Name from '../components/Home/name'
import Contact from '../components/Contact/dd'
import About from '../components/About/about'
// import Experience from '../components/Experience/exp'

function Home() {
  return (
    <>
    <Name/>
    <About/>
    {/* <Experience/> */}
    <Project/>
    <Contact/>
    </>
  )
}

export default Home


