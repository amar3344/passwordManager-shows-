import './index.css'

const PasswordItem = props => {
  const {passwordDetails, displayPassword, onClickDelete} = props
  const {website, username, password, id} = passwordDetails
  const websiteInitial = website.slice(0, 1).toUpperCase()

  const showStarsOrPassword = displayPassword ? (
    password
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      width={50}
    />
  )

  const deleteList = () => onClickDelete(id)

  return (
    <li className="passwords-item">
      <div className="left-container">
        <p className="websiteInitial">{websiteInitial}</p>
        <div className="mid-container">
          <p className="text">{website}</p>
          <p className="text">{username}</p>
          <p className="text">{showStarsOrPassword}</p>
        </div>
      </div>
      <button type="button" className="delete-container" onClick={deleteList()}>
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
