// @flow

import React from 'react'
import Viewport from '../../comp/Viewport/Viewport'
import ViewBox from '../../comp/ViewBox/ViewBox'
import D from '../../comp/D/D'

const ViewportApp = () => (
  <>

    <style>{`
      [alias="page-cont-wordList"],
      _ { width: 150px; margin:auto; text-align:center; background:blue; overflow-x:hidden; }

      [alias="page-cont-wordList"] [comp="D"],
      [alias="page-cont-wordList"] [comp="E"],
      [alias="page-cont-wordList"] [comp="S"],
      _ { padding-left:3px; padding-right:3px; background:white; color:green; }
    `}</style>

    <Viewport alias="viewport" w={960} h={320} vw={window.innerWidth} vh={window.innerHeight} alignContent="left">
      <ViewBox alias="viewbox" hMax={window.innerHeight} overflowX="scroll" overflowY="hidden" display="flex">

        <ViewBox alias="viewbox" minWidth={360} >
          <D alias="page-cont-wordList">
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
          </D>
        </ViewBox>

        <ViewBox alias="viewbox" minWidth={360}>
          <D alias="page-cont-wordList">
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
          </D>
        </ViewBox>

        <ViewBox alias="viewbox" minWidth={360}>
          <D alias="page-cont-wordList">
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
            <D>DDDD</D>
          </D>
        </ViewBox>

      </ViewBox>
    </Viewport>

  </>
)

export default ViewportApp
