import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
      alt="not-found"
      className="not found"
    />
    <h1 className="heading-nf">Page Not Found</h1>
    <p className="paragraph-nf">
      We are sorry, the page you requested could not be found
    </p>
  </div>
)

export default NotFound
