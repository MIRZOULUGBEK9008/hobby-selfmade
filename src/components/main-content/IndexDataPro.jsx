import React from 'react'
import PlantTree from '../../img/plant-trees-min.svg'
import PrunPlant from '../../img/pruning-plants-min.svg'
import PlantFlower from '../../img/plant-flowers-min.svg'
import IndexDataProBg from '../../img/index-service-bg-min.svg'

function IndexDataPro() {
  const dataProList = [
    {
      img: PlantTree,
      id: 1,
      title: "Plant trees",
      text: "There are many variations of passages long established fact reader"
    },
    {
      img: PrunPlant,
      id: 2,
      title: "Pruning plants",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, ratione!",
    },
    {
      img: PlantFlower,
      id: 3,
      title: "Plant flowers",
      text: "There are many variations of passages long established fact reader",
    }
  ]

  return (
    <section className="index-data-pro">
    <div className="index-data-pro__container container">
    <div className="index-data-pro__content">
    <h2 className="index-data-pro__title title">Professional service</h2>
    <p className="index-data-pro__description">There are many variations of passages of Lorem
    Ipsum available,  Duis posuere eros vel dui pulvinar, pulvinar molestie erat iaculis. Vestibulum ante
    ipsum primis in faucibus orci luctus et ultrices posue</p>
    <p className="index-data-pro__description">Mauris vel auctor enim many variations. There are many variations of passages of Lorem Ipsum .</p>
    <div className="arrow-button-wrapper">
    <a className="data-content__button button button--arrow" href='#'>Read more</a>
    </div>
    </div>

    <ul className="index-data-pro__list">
    {
      dataProList.map((proCard) => {
        return (
          <li className="index-data-pro__card data-pro-card" key={proCard.id}>
          <div className="data-pro-card__inner">
          <img className="data-pro-card__img" src={proCard.img} alt="" aria-hidden="true" />
          <h3 className="data-pro-card__title">{proCard.title}</h3>
          <p className="data-pro-card__description">{proCard.text}</p>
          </div>
          </li>
          )
        })
      }
      </ul>
      </div>
      <img className="index-data-pro__bg" src={IndexDataProBg} alt="" aria-hidden="true" />
      </section>
      )
    }

    export default IndexDataPro