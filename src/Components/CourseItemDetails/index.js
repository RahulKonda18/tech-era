import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class CourseItemDetails extends Component {
  state = {isLoading: true, details: [], status: 400}

  componentDidMount() {
    this.getDetails()
  }

  retry = () => {
    this.setState({isLoading: true})
    this.getDetails()
  }

  getDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/te/courses/${id}`)
    const {status} = response
    console.log(status)
    if (status === 200) {
      const data = await response.json()
      console.log(data)
      const results = {
        id: data.course_details.id,
        name: data.course_details.name,
        description: data.course_details.description,
        imageUrl: data.course_details.image_url,
      }
      console.log(results)
      this.setState({isLoading: false, details: results, status: 200})
    } else {
      this.setState({isLoading: false, status: 400})
    }
  }

  displayResult = () => {
    const {details, status} = this.state
    const {description, name, imageUrl} = details
    if (status === 200) {
      return (
        <div className="container">
          <div className="card">
            <img src={imageUrl} alt={name} className="image-cid" />
            <div className="content">
              <h1 className="heading-cid">{name}</h1>
              <p className="para-cid">{description}</p>
            </div>
          </div>
        </div>
      )
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

  render() {
    const {isLoading} = this.state
    console.log(isLoading)
    return isLoading ? (
      <div data-testid="loader" className="loading">
        <Loader size={30} />
      </div>
    ) : (
      this.displayResult()
    )
  }
}
export default CourseItemDetails
