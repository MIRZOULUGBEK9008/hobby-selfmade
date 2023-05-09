import React from 'react'
import IndexStatistic from './IndexStatistic'
import IndexData from './IndexData'

function MainContent() {
  return (
    <main className='main-content main-content--blur'>
    <IndexStatistic/>
    <IndexData/>
    </main>
    )
  }

  export default MainContent