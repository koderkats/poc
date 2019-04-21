// @flow

import React from 'react'
import s from './S.css'

type Props = {
  alias: ?String,
}

const compName = 'S'

const S = (props: Props) => (
  <div comp={compName} alias={props.alias} className={s.comp}>
    {props.children}
  </div>
)

export default S
