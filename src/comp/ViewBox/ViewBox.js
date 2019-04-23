// @flow

import React from 'react'
import s from './ViewBox.css'
import { unstyle } from 'ansi-colors';

type Props = {
  fg: ?String,
  bg: ?String,
  w: ?Number,
  h: ?Number,
  hMax: ?Number,
  wMin: ?Number,
  overflowX: ?String,
  overflowY: ?String,
  display: ?String,
}

const compName = 'ViewBox'

const ViewBox = (props: Props) => {
  return (
    <div comp={compName} alias={props.alias} className={s.comp} style={style(props)}>
      {props.children}
    </div>
  )
}

export default ViewBox

const style = (props: Props) => ({
  display: props.display ? props.display : '',
  color: props.fg,
  backgroundColor: props.bg,
  width: props.w ? props.w + 'px' : '',
  height: props.h ? props.h + 'px': '',
  minWidth: props.minWidth + 'px' ? props.minWidth + 'px' : '',
  overflowX: props.overflowX ? props.overflowX : '',
  overflowY: props.overflowY ? props.overflowY : '',
});
