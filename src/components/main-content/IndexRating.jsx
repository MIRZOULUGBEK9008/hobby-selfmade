import React from 'react'
import YellowStar from '../../img/yellow-star-min.svg'


function IndexRatingStar({rating}) {
  const emptyArr = [];
  for (let i = 0; i < rating; i++) {
    emptyArr.push(i);
  }
  return (
    emptyArr.map((item, index) => {
    return (
      <img className='index-rating__yellow-star' src={YellowStar} width="24" height="24" alt='Rating...' key={index}/>
      )
    })
  )
  }

  export default IndexRatingStar