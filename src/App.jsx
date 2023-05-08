import React from 'react'
import Loader from './components/Loader'
import SiteHeroHeader from './components/SiteHeroHeader'
import MainContent from './components/main-content/MainContent'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Loader />
    <SiteHeroHeader />
    <MainContent />
    <Footer />
    </>
    )
  }

  export default App