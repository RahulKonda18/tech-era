import {Component} from 'react'
import Loader from 'react-loader-spinner'
import HomeItem from '../HomeItem'
import './index.css'

class Home extends Component {
  state = {isLoading: true, details: [], status: 400}

  componentDidMount() {
    this.getDetails()
  }

  retry = () => {
    this.setState({isLoading: true})
    this.getDetails()
  }

  displayResult = () => {
    const {details, status} = this.state
    if (status === 200) {
      return details.map(each => <HomeItem details={each} key={each.id} />)
    }
    return (
      <div className="con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
          alt="failure view"
          className="ima"
        />
        <h1 className="head">Oops! Something Went Wrong</h1>
        <p className="para">
          We cannot seem to find the page you are looking for
        </p>
        <button onClick={this.retry} className="but" type="button">
          Retry
        </button>
      </div>
    )
  }

  getDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/te/courses')
    const {status} = response
    if (status === 200) {
      const data = await response.json()
      console.log(data)
      const results = data.courses.map(each => ({
        id: each.id,
        name: each.name,
        logoUrl: each.logo_url,
      }))
      this.setState({isLoading: false, details: results, status: 200})
    } else {
      this.setState({isLoading: false, status: 400})
    }
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-container">
        <h1 className="heading-home">Courses</h1>
        <ul className="ul-home">
          {isLoading ? (
            <div data-testid="loader" className="loading">
              <Loader size={30} />
            </div>
          ) : (
            this.displayResult()
          )}
        </ul>
      </div>
    )
  }
}

export default Home
