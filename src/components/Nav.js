import React, { Component } from 'react'
import { Location } from '@reach/router'
import { Link } from 'gatsby'
import { Menu, X } from 'react-feather'
import NavLink from './NavLink'
import Logo from './Logo'

import './Nav.css'

export class Navigation extends Component {
  state = {
    active: false,
    activeSubNav: false,
    currentPath: false
  }

  componentDidMount = () =>
    this.setState({ currentPath: this.props.location.pathname })

  handleMenuToggle = () => this.setState({ active: !this.state.active })

  // Only close nav if it is open
  handleLinkClick = () => this.state.active && this.handleMenuToggle()

  toggleSubNav = subNav =>
    this.setState({
      activeSubNav: this.state.activeSubNav === subNav ? false : subNav
    })

  render() {
    const { active } = this.state,
      { subNav } = this.props,
      NavLink = ({ to, className, children, ...props }) => (
        <Link
          to={to}
          className={`NavLink ${
            to === this.state.currentPath ? 'active' : ''
          } ${className}`}
          onClick={this.handleLinkClick}
          {...props}
        >
          {children}
        </Link>
      )

    return (
      <nav className={`Nav ${active ? 'Nav-active' : ''}`}>
        <div className="Nav--Container container">
          <div className="Nav--Links">
            <NavLink to="/">SHE DRUMS PROJECT</NavLink>
            <NavLink to="/about/">About</NavLink>
            <NavLink to="/interviews/">Interviews</NavLink>
            <NavLink to="/resources/">Resources</NavLink>
            <div
              className={`Nav--Group ${
                this.state.activeSubNav === 'support' ? 'active' : ''
              }`}
            >
              <span
                className={`NavLink Nav--GroupParent ${
                  this.props.location.pathname.includes('donate') ||
                  this.props.location.pathname.includes('sponsor')
                    ? 'active'
                    : ''
                }`}
                onClick={() => this.toggleSubNav('support')}
              >
                Support
              </span>
              <div className="Nav--GroupLinks">
                <NavLink to="/donate/" className="Nav--GroupLink">
                  Donate
                </NavLink>
                <NavLink to="/sponsor/" className="Nav--GroupLink">
                  Sponsor
                </NavLink>
              </div>
            </div>
          </div>
          <button
            className="Button-blank Nav--MenuButton"
            onClick={this.handleMenuToggle}
          >
            {active ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    )
  }
}

export default ({ subNav }) => (
  <Location>{route => <Navigation subNav={subNav} {...route} />}</Location>
)
