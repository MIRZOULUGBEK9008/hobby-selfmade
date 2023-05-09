import React from 'react'
import GardenerGril from '../../img/gardener-gril-min.svg'

function IndexData() {
  return (
    <section className="index-data">
    <div className="index-data__container container">
    <div className="index-data__content data-content">
    <h2 className="data-content__title title">We professional gardener!</h2>
    <p className="data-content__description">Morbi magna metus, scelerisque at risus a, tristique laoreet orci. Duis posuere eros vel dui pulvinar, pulvinar molestie erat iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.</p>
    <div className="arrow-button-wrapper">
    <button className="data-content__button button button--arrow">Shop now</button>
    </div>
    </div>
    <img className="index-data__img" src={GardenerGril} alt="A gardener gril" />
    </div>
    </section>
    )
  }

  export default IndexData