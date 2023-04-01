import React from "react"
import "./Navbar.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCoffee,
  faHome,
  faEnvelope,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faLinkedin,
  faReadme,
} from "@fortawesome/free-brands-svg-icons"

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <ul id="nav">
          <div>
            <title>
              DEVON M GEERTSEN <FontAwesomeIcon icon={faCoffee} />
            </title>
          </div>
          <li>
            <a href="#">
              <div>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              Contact
            </a>
          </li>
          <li>
            <a href="#">
              <div>
                <FontAwesomeIcon icon={faReadme} />
              </div>
              Resume
            </a>
          </li>
          <li>
            <a href="https://github.com/dgeertsen">
              <div>
                <FontAwesomeIcon icon={faGithub} />
              </div>
              Github
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/devongeertsen/">
              <div>
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              Linkedin
            </a>
          </li>
          <li>
            <a href="#">
              <div>
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              Projects
            </a>
          </li>
          <li>
            <a href="#">
              <div>
                <FontAwesomeIcon icon={faHome} />
              </div>
              Home
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar
