import React from 'react'
import CactusImg from '../img/index-hero-cactus-min.svg'

function SiteHero() {
  return (
    <div className='hero'>
    <div className="hero__container container">
    <div className="hero__content">
    <h1 className="hero__title title">Make a <b>Beautiful Garden</b> with Your own Hand</h1>
    <p className="hero__description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
    </p>
    <div className="arrow-button-wrapper">
    <a className="hero__button button button--arrow" href='#'>Shop now</a>
    </div>
    </div>
    <div className="hero__cactus-img-wrapper">
      <img className="hero__cactus-img" src={CactusImg} alt="Cactus img" width="101" height="210" />
    </div>
    </div>
    </div>
    )
  }

  export default SiteHero