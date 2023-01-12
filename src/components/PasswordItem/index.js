import './index.css'

const PasswordItem = props => {
  const {passwordDetails} = props
  console.log(passwordDetails)
  const {website, username, password} = passwordDetails
  const websiteInitial = website.slice(0, 1).toUpper()

  return (
    <li className="passwords-item">
      <div className="left-container">
        <p className="websiteInitial">{websiteInitial}</p>
        <div className="mid-container">
          <p className="text">{website}</p>
          <p className="text">{username}</p>
          <p className="text">{password}</p>
        </div>
      </div>
      <button type="button" className="delete-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-button"
        />
      </button>
    </li>
  )
}

export default PasswordItem
