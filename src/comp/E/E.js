// @flow

import React from 'react'
import s from './E.css'

type Props = {
  alias: ?String,
}

const compName = 'E'

 const E = (props: Props) => (
  <div comp={compName} alias={props.alias} className={s.comp}>
    {props.children}
  </div>
)

export default E
