// @flow

import React from 'react'
import s from './D.css'

type Props = {
  alias: ?String,
}

const compName = 'D'

const D = (props: Props) => (
  <div comp={compName} alias={props.alias} className={s.comp}>
    {props.children}
  </div>
)

export default D
