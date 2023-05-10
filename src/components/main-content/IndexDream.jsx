import React from 'react'

import IndoorsTropical from '../../img/indoors-tropical-plant.png'
import IndoorsTropicalResponsive from '../../img/indoors-tropical-plant@2x.png'

import MonsteraDeliciosaCare from '../../img/monstera-deliciosa-care.png'
import MonsteraDeliciosaCareResponsive from '../../img/monstera-deliciosa-care@2x.png'

import IndoorsLeafPotted from '../../img/indoors-leaf-potted.png'
import IndoorsLeafPottedResponsive from '../../img/indoors-leaf-potted@2x.png'

import IndexRating from './IndexRating'

function IndexDream() {
  const indexDreamListCard = [
    {
      id: 1,
      img: {
        img: IndoorsTropical,
        imgResponsive: IndoorsTropicalResponsive,
        with: 179,
        height: 233
      },
      title: "Indoors tropical plant",
      rating: 5.0,
      warehouse: 134,
      price: "$150",
      type: "Indoors tropical"
    },
    {
      id: 2,
      img: {
        imgName: MonsteraDeliciosaCare,
        imgResponsive: MonsteraDeliciosaCareResponsive,
        with: 231,
        height: 233
      },
      title: "Monstera deliciosa care",
      rating: 5.0,
      warehouse: 120,
      price: "$200",
      type: "Monstera deliciosa care"
    },
    {
      id: 3,
      img: {
        imgName: IndoorsLeafPotted,
        imgResponsive: IndoorsLeafPottedResponsive,
        with: 152,
        height: 240
      },
      title: "Indoors leaf potted",
      rating: 5.0,
      warehouse: 183,
      price: "$150",
      type: "Indoors leaf potted"
    }
  ]

  const indexRating = (e) => {
    for (let i = 1; i <= e; i++) {
      <IndexRating />
    }
  }

  return (
    <section className="index-dream">
    <div className="index-dream__container container">
    <div className="index-dream__content">
    <h2 className="index-dream__title title">Choose your Dream Plant</h2>
    <p className="index-dream__description">Many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
    </div>
    <ul className="index-dream__list">
    {
      indexDreamListCard.map((dreamCard) => {
        return (
          <li className="index-dream__item dream-card" key={dreamCard.id}>
          <div className="dream-card__inner">
          <h3 className="dream-card__title">{dreamCard.title}</h3>
          <img className="dream-card__img" src={dreamCard.img.imgName} srcSet={`${dreamCard.img.imgResponsive} 1x, ${dreamCard.img.imgResponsive}2x`} alt={dreamCard.type} width={dreamCard.img.with} height={dreamCard.img.height}/>
          <div className="dream-card__rating index-rating">
          <div className="index-rating__inner">
          {
            indexRating(dreamCard.rating)
          }
          <div className="index-rating__rating">{dreamCard.rating}</div>
          <div className="index-rating__warehouse">{dreamCard.warehouse}</div>
          </div>
          <div className="index-rating__bottom">
          <dl className="index-rating__price">
          <div className="index-rating__price-term-detail-wrapper">
          <dt className="index-rating__price-term">Price</dt>
          <dd className="index-rating__price-detail">{dreamCard.price}</dd>
          </div>
          </dl>
          <button className="index-rating__button button button--card" type='button'>Add To Cart</button>
          </div>
          </div>
          </div>
          </li>
          )
        })
      }
      </ul>
      </div>
      </section>
      )
    }

    export default IndexDream