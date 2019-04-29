import React from 'react'
import u from '../../lib/util/util';

const Containers = (props) => (<>

{document.body.classList.add('u-panes')}

<style>{`
  *,
  _ { box-sizing:border-box; }
  html,
  _ { height:100%; }
  html,
  body,
  _ { min-height:100%; background:#aaa; }
  html.poc body,
  _ { display:flex; flex-direction:column; align-items:flex-start; justify-content:flex-start; }
  .u-panes,
  _ { width:100%; height:100%; overflow:hidden; }
`}</style>


<style>{`
html.poc body .app-container,
_ { display:flex; flex-direction:column; align-items:flex-start; justify-content:flex-start; }
.u-panes > .app-container,
_ { position:relative; width: 100%; height:100%; padding-left:0; padding-right:0; overflow:hidden; }
`}</style>

<div class="js-main-layout app-container">

  <style>{`
  html.poc body .app-container__header,
  _ { flex:0 0 auto; width:100%; }
  `}</style>

  <div class="app-container__header">
    <div class="js-app-header">
      <div class="cf app-header">app-header</div>
    </div>
    <div class="js-divider"></div>
    <div class="js-main-header app-container__subheader">
      <div>
        <div class="header___hash">sub-header</div>
      </div>
    </div>
  </div>

  <style>{`
    html.poc body .app-container__content,
    _ { flex:1 0 auto; position:relative; width:100%; }
    .u-panes .app-content,
    _ { position:absolute; top:0; bottom:0; left:0; right:0; z-index:10; background-color:#888; }
  `}</style>

  <div class="app-container__content">
    <div class="js-main-content app-content">
      <div class="u-panes-view u-panes-view-no-subheader">sub-content</div>
    </div>
  </div>

</div>

</>)

export default Containers
