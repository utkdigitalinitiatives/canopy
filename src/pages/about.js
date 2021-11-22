import * as React from "react"

import Contact from "../components/layout/Contact"
import Layout from "../components/layout/layout"
import ProjectSummary from "../components/layout/project-summary"
import Seo from "../components/layout/seo"
import TeamAndFunding from "../components/layout/teamandfunding"


const About = ({ location }) => (
  <Layout location={location}>
    <Seo title="About Rising from the Ashes" />
    <div className="text-center text-lg-start mx-3 mx-md-5 my-4">
      <h2>About the Project: Hero text/heading here</h2>
    </div>
    <ProjectSummary />
    <TeamAndFunding />
    <Contact />
  </Layout>
)

export default About
