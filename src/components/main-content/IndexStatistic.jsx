import React from 'react'
import IndexStatisticFlowerBg from '../../img/section-statistic-flower-bg.png'
import IndexStatisticFlowerBgResponsive from '../../img/section-statistic-flower-bg@2x.png'
import IndexStatisticBlurBg from '../../img/section-statistic-blur-bg-min.svg'

function IndexStatistic() {
  const indexStatistic = [
    {id: 1, detail: "25+", term: "Complete project per month"},
    {id: 2, detail: "10+", term: "Years practical experience"},
    {id: 3, detail: "60+", term: "Awesome team members"},
  ]
  return (
    <section className='index-statistic'>
    <div className="index-statistic__container container">
    <div className="index-statistic__index-info index-info">
    <div className="index-info__content">
    <h2 className="index-info__title title">We give awesome landscape service</h2>
    <p className="index-info__description">It is a long established fact that a reader will be distracted by the thing.</p>
    </div>
    <dl className="index-info__statistic-list statistic-list">
    {
      indexStatistic.map((statistic) => {
        return (
          <div className="statistic-list__detail-term-wrapper" key={statistic.id}>
          <dd className="statistic-list__detail">{statistic.detail}</dd>
          <dt className="statistic-list__term">{statistic.term}</dt>
          </div>
          )
        })
      }
      </dl>
      </div>
      <img className="index-statistic__flower" src={IndexStatisticFlowerBg} width="289" height="350" alt="Flower" srcSet={`${IndexStatisticFlowerBg} 1x, ${IndexStatisticFlowerBgResponsive} 2x`} />
      </div>
      <img className="index-statistic__blur-bg" src={IndexStatisticBlurBg} alt="" aria-hidden="true" />
      </section>
      )
    }

    export default IndexStatistic