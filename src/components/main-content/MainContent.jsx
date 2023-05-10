import React from 'react'
import IndexStatistic from './IndexStatistic'
import IndexData from './IndexData'
import IndexDataPro from './IndexDataPro'
import IndexDream from './IndexDream'

function MainContent() {
  return (
    <main className='main-content main-content--bg'>
    <IndexStatistic/>
    <IndexData/>
    <IndexDataPro/>
    <IndexDream/>
    </main>
    )
  }

  export default MainContent