import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Contact extends Component {
    render() {
        return (
            <div>
                <nav>
              <div class="nav-wrapper">
                <a href="#" class="brand-logo">
                  Andrew Collier
                </a>
                <ul id="nav-mobile" class="center hide-on-med-and-down">
                <Link componentClass={Link} href="/about" to="/about" >
              About
            </Link>
            <Link componentClass={Link} href="/contact" to="/contact" >
              Contact Me
            </Link>
            <Link componentClass={Link} href="/portfolio" to="/portfolio" >
              Portfolio
            </Link>
                </ul>
              </div>
            </nav>
                <h1>This is my Contact Page</h1>
            </div>
        );
    }
}

export default Contact;