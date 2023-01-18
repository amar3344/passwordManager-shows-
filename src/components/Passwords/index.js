import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import PasswordItem from '../PasswordItem'

import './index.css'

class Passwords extends Component {
  state = {
    passwordsList: [],
    website: '',
    username: '',
    password: '',
    isShowPasswords: false,
  }

  addPasswordByClick = event => {
    event.preventDefault()
    const {website, username, password} = this.state

    const addNewPassword = {
      id: uuidv4,
      website,
      username,
      password,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, addNewPassword],
      website: '',
      username: '',
      password: '',
    }))
  }

  clickDelete = id => {
    const {passwordsList} = this.state
    console.log(passwordsList, id)
    // this.setState({passwordsList: passwordsList.filter(item => item.id !== id)})
  }

  getNonEmptyList = () => {
    const {passwordsList, isShowPasswords} = this.state
    return (
      <ul className="passwords-list-container">
        {passwordsList.map(eachPassword => (
          <PasswordItem
            key={eachPassword.id}
            passwordDetails={eachPassword}
            displayPassword={isShowPasswords}
            onClickDelete={this.clickDelete}
          />
        ))}
      </ul>
    )
  }

  getEmptyList = () => (
    <div className="empty-passwords-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-passwords-image"
      />
      <p className="no-passwords-text">No Passwords</p>
    </div>
  )

  getWebsiteInput = event => {
    this.setState({website: event.target.value})
  }

  getUserNameInput = event => {
    this.setState({username: event.target.value})
  }

  getPasswordInput = event => {
    this.setState({password: event.target.value})
  }

  makeDisplayPasswords = () => {
    this.setState(prevState => ({isShowPasswords: !prevState}))
  }

  render() {
    const {passwordsList} = this.state
    const {website, username, password} = passwordsList
    const list =
      passwordsList.length === 0 ? this.getEmptyList() : this.getNonEmptyList()
    return (
      <div className="container">
        <div className="bg-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="logo-image"
          />
          <div className="top-card-container">
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
                alt="password manager"
                className="password-manger-logo"
              />
            </div>
            <form className="form-container" onSubmit={this.addPasswordByClick}>
              <h1 className="heading">Add New Password</h1>
              <div className="input-containers">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="input-images"
                />
                <hr className="horizontal-line" />
                <input
                  type="website"
                  value={website}
                  placeholder="Enter Website"
                  className="input-elements"
                  onChange={this.getWebsiteInput}
                />
              </div>
              <div className="input-containers">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="input-images"
                />
                <hr className="horizontal-line" />
                <input
                  type="text"
                  value={username}
                  placeholder="Enter Username"
                  className="input-elements"
                  onChange={this.getUserNameInput}
                />
              </div>
              <div className="input-containers">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="input-images"
                />
                <hr className="horizontal-line" />
                <input
                  type="password"
                  value={password}
                  placeholder="Enter Password"
                  className="input-elements"
                  onChange={this.getPasswordInput}
                />
              </div>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>
          <div className="bottom-container">
            <div className="search-passwords-container">
              <div className="password-container">
                <h1 className="no-of-passwords">Your Passwords</h1>
                <p className="passwords-length">{passwordsList.length}</p>
              </div>
              <div className="search-input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-image"
                />
                <hr className="horizontal-line" />
                <input
                  type="search"
                  placeholder="search"
                  className="input-search"
                />
              </div>
            </div>
            <hr className="horizontal-line-bottom-container" />
            <div className="show-password-container">
              <input
                type="checkbox"
                id="checkbox"
                className="checkbox"
                onClick={this.makeDisplayPasswords}
              />
              <label className="show-passwords" htmlFor="checkbox">
                Show Passwords
              </label>
            </div>
            <div>{list}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Passwords
