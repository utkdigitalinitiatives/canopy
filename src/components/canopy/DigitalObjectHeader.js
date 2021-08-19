import React, { Component } from 'react';
import { Link } from "gatsby"
import IIIFBadge from "./IIIFBadge"

class DigitalObjectHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {title} = this.props

    return (
      <header>
        <h1>{title}</h1>
        <div>
          <IIIFBadge />
          <Link to={'/'} className="canopy-button canopy-button-svg">
            Back to Search
            <svg version="1.1"
                 viewBox="0 0 92 92"
                 id="back-arrow">
              <path d="M82,32.3V72c0,2.2-1.8,4-4,4H19.1c-2.2,0-4-1.8-4-4s1.8-4,4-4H74V36H23.7l5.5,5.6c1.6,1.6,1.6,4.2,0,5.8c-0.8,0.8-1.8,1.2-2.8,1.2c-1,0-2-0.4-2.8-1.2L11.2,35.1c-0.8-0.8-1.2-1.8-1.2-2.8c0-1.1,0.4-2.1,1.2-2.8l12.4-12.3c1.6-1.6,4.1-1.6,5.7,0s1.5,4,0,5.6L23.7,28H78C80.2,28,82,30.1,82,32.3z"/>
            </svg>
          </Link>
        </div>
      </header>
    )
  }
}

export default DigitalObjectHeader;
