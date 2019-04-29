// @flow

// body prop on Item should be a number not a string
// Running 'yarn flow' should produce an error

import React from 'react'
import { hot } from 'react-hot-loader'
import Containers from './html/Containers/Containers'
import s from './App.css'

const App = (props) => (
  <>
    {window.addEventListener('resize', function(){ location.reload(true); })}
    <Containers />
  </>
)

export default hot(module)(App)
