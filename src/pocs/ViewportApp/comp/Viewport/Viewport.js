// @flow

import React from 'react'
import s from './Viewport.css'
import { unstyle } from 'ansi-colors';

type Props = {
  fg: ?String,
  bg: ?String,
  w: ?String,
  h: ?String,
}

const compName = 'Viewport'

const Viewport = (props: Props) => {
  return (
    <div comp={compName} alias={props.alias} className={s.comp} style={style(props)}>
      {props.children}
    </div>
  )
}

export default Viewport

const style = (props: Props) => ({
  color: props.fg,
  backgroundColor: props.bg,
  width: props.w,
  height: props.h,
});
