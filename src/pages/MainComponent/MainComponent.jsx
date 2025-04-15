import React from 'react'
import './MainComponent.scss'
import SearchComponent from '../../components/SearchComponent/SearchComponent'

const MainComponent = () => {
  return (
    <>
      <div class='ellipse' id='topEllipse'></div>
      <div class='ellipse' id='bottomEllipse'></div>

      <div>
        <SearchComponent></SearchComponent>
      </div>
      

    </>
  )
}

export default MainComponent
