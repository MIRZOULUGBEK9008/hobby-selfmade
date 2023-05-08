import React from 'react'
import SiteLogo from '../img/site-logo-min.svg'

function SiteHeader() {
  const SiteHeaderLinks = [
    {id: 1, link: "Home"},
    {id: 2, link: "About us"},
    {id: 3, link: "Service"},
    {id: 4, link: "Contact"}
  ]
  return (
    <header className='site-header'>
    <div className="site-header__container container">
    <a className="site-header__logo logo" href="index.html">
    <img className="logo__img" src={SiteLogo} alt="Site logo"  width="145" height="34" />
    </a>
    <nav className="site-header__sitenav sitenav">
    <ul className="sitenav__list">
    {
    SiteHeaderLinks.map((item) => {
      return (
        <li className="sitenav__item">
        <a className="sitenav__link" href="#" key={item.id}>{item.link}</a>
        </li>
      )
    })
    }
      </ul>
      <button className="site-header__button button button--green-small">Login</button>
      </nav>
      </div>
      </header>
  )
}

    export default SiteHeader