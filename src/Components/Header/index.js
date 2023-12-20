import {withRouter, Link} from 'react-router-dom'

import './index.css'

const Header = props => {
  const click = () => {
    const {history} = props
    history.push('/')
  }

  return (
    <nav className="nav-header">
      <Link to="/">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
          alt="website logo"
          onClick={click}
        />
      </Link>
    </nav>
  )
}

export default withRouter(Header)
