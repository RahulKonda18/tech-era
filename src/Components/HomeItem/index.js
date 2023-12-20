import {withRouter, Link} from 'react-router-dom'
import './index.css'

const HomeItem = props => {
  const {details} = props
  const {id, name, logoUrl} = details
  const string = `/courses/${id}`

  return (
    <Link to={string}>
      <li className="item">
        <img src={logoUrl} className="logos" alt={name} />
        <p className="name">{name}</p>
      </li>
    </Link>
  )
}

export default withRouter(HomeItem)
