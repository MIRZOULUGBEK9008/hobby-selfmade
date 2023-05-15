import React from 'react'

const IndexForm = () => {
  return (
    <section className="index-form">
    <div className="index-form__container container">
    <div className="index-form-content-form-wrapper">
      <div className="index-form__content">
      <h2 className="index-form__title title">Ready to bring idea for your garden?</h2>
      <p className="index-form__description">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete</p>
      </div>
      <form className="index-form__form form-index" action="https://echo.htmlacademy.ru/" method="GET" target="blank">
      <div className="form-index__inner">
      <input className="form-index__input" type="email" placeholder="Enter your email" name="email" required/>
      <button className="form-index__button button button--green-small button--green-big">Subscribe</button>
      </div>
      </form>
    </div>
    </div>
    </section>
    )
  }

  export default IndexForm