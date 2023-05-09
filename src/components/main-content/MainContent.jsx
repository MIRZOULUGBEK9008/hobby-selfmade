import React from 'react'
import IndexStatistic from './IndexStatistic'
import IndexData from './IndexData'
import IndexDataPro from './IndexDataPro'

function MainContent() {
  return (
    <main className='main-content main-content--bg'>
    <IndexStatistic/>
    <IndexData/>
    <IndexDataPro/>
    </main>
    )
  }

  export default MainContent