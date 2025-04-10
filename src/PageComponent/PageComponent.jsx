import React from 'react'
import SearchComponent from '../SearchComponent/SearchComponent'
import './PageComponent.css'

const PageComponent = () => {
  return (
    <>
      <div class='ellipse' id='topEllipse'></div>
      <div class='ellipse' id='bottomEllipse'></div>

      <SearchComponent></SearchComponent>

    </>
  )
}

export default PageComponent
