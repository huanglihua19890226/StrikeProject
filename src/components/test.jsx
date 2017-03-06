import React, {
  Component,
  PropTypes
} from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import '../css/test.scss';
import * as testActions from '../actions/test.action.js';

const TRANSTION_TIME = 200;
var buttons = [
  'aaa',
  'bbb',
  'ccc',
  'ddd',
  'fff',
  'ggg',
]
var APP_HEAD_HEIGHT = 0;
class Game_App extends Component {

  constructor(props) {
    super(props);
  }
  addSection(text) {
    const { sectionList, testActions, sectionListIdexs } = this.props;
    var index = sectionListIdexs.indexOf(text);
    if (index === -1) {
      testActions.addSection(sectionList.length, text, {x: 500, y: 500});
    } else {
      testActions.selectSection(index);
    }
  }
  render() {
    const { sectionList, testActions, sectionListIdexs } = this.props;
    var sections = sectionList.map((section, idx) => {
      var idxOf = sectionListIdexs.indexOf(section.text);
      var isShow = true;
      if (idxOf === sectionListIdexs.length - 1) isShow = false;
      return (<Section key={idx}
                      index={idxOf}
                      sectionListIdexs={sectionListIdexs}
                      section={section}
                      isShow={isShow}
                      onClose={testActions.delSection}
                      onSelect={testActions.selectSection}
                      onMove={testActions.updateSectionPos}/>)
    })


    return (
        <div className="container">
          {
            buttons.map((btn, idx)=>(
              <button  key={idx} onClick={()=>this.addSection(btn)}>{btn}</button>
            ))
          }
          {sections}
        </div>
    );
  }
}

class DropWindowClass extends Component {
  constructor(props) {
    super(props);
    this.drapElemInfo = {
      isDrapStart: false,
      dragElem: null,
      dragOriginX: 0,
      dragOriginY: 0,
      elemOrigonX: 0,
      elemOriginY: 0,
    };
    this.pos = {
      x: 0,
      y: 0
    }
  }
  dragStart(event, elem) {
    this.drapElemInfo = {
      isDrapStart: true,
      dragElem: elem,
      dragOriginX: event.clientX,
      dragOriginY: event.clientY,
      elemOrigonX: elem.offsetLeft,
      elemOriginY: elem.offsetTop
    };
    this.mouseMoving();
    event.stopPropagation();
  }
  mouseMoving() {
    let self = this;
    document.addEventListener('mousemove', this.setContainerPosition.bind(self), false);
    document.addEventListener('mouseup', this.dragEnd.bind(self), false);
  }
  mouseMoved() {
    let self = this;
    document.removeEventListener('mousemove', this.setContainerPosition.bind(self), false);
    document.removeEventListener('mouseup', this.dragEnd.bind(self), false);
  }
  setContainerPosition(event) {
    if (!this.drapElemInfo.isDrapStart) return;
    const {dragElem, dragOriginX, dragOriginY, elemOrigonX, elemOriginY} = this.drapElemInfo;
    const leftOffset = event.clientX - dragOriginX + elemOrigonX;
    const topOffset = event.clientY - dragOriginY + elemOriginY;
    const _screenWidth = window.ScreenWidth - dragElem.offsetWidth;
    let setLeftOffset = leftOffset;
    let setTopOffset = topOffset;
    if(leftOffset < 0) {
      setLeftOffset = 0;
    } else if(leftOffset > _screenWidth) {
      setLeftOffset = _screenWidth;
    }
    if(setTopOffset < APP_HEAD_HEIGHT) {
      setTopOffset = APP_HEAD_HEIGHT;
    }
    dragElem.style.left = setLeftOffset + "px";
    dragElem.style.top = setTopOffset + "px";
  }
  dragEnd(event) {
    if (!this.drapElemInfo.isDrapStart) return;
    this.drapElemInfo = {
      isDrapStart: false,
      dragElem: null,
      dragOriginX: 0,
      dragOriginY: 0,
      elemOrigonX: 0,
      elemOriginY: 0
    };
    this.mouseMoved();
  }
  onStartScaleWindow() {

  }
}

class Section extends DropWindowClass {
  constructor(props) {
    super(props);
  }
  render() {
    const { onClose, index, section, isShow, onSelect } = this.props;
    var commonZIndex = (index + 1) * 2
    var sectionZIndex = {
      zIndex:  99 + commonZIndex
    }
    var maskZIndex = {
      zIndex: 100 + commonZIndex
    }
    return (
      <div className='section' style={sectionZIndex} ref={index}>
        <SectionHeader onClose={() => onClose(index)} index={index} onMouseDown={e => {
            this.dragStart(e, this.refs[index])
          }}/>
        <div ref="up_section_layer" style={maskZIndex} className={`section-mask ${isShow ? 'section-mask-show' : 'section-mask-hidden'}`}  onMouseDown={e => {
          onSelect(index);
          this.dragStart(e, this.refs[index]);
        }}/>
        <div>{section.text}</div>
        <div>{section.text}</div>
        <div>{section.text}</div>
        <div>{section.text}</div>

        <div>{section.text}</div>
        <div>{section.text}</div>
        <div>{section.text}</div>
        <div>{section.text}</div>
        <div>{section.text}</div>

        <div>{section.text}</div>
        <div>{section.text}</div>

        <div>{section.text}</div>
        <div>{section.text}</div>
        <div>{section.text}</div>
      </div>
    )
  }
}
class  SectionHeader extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { onClose, onMouseDown } = this.props;
    return (
      <div className="section-header"  onMouseDown={onMouseDown}>
        <button onClick={(e)=>{
            e.preventDefault();
            onClose(e)
          }}>关闭</button>
      </div>
    )
  }
}






function selector(state) {
  return {
    sectionList: state.sectionList,
    sectionListIdexs: state.sectionListIdexs
  };
}
function mapDispatchToProps(dispatch) {
  return {
    testActions: bindActionCreators(testActions, dispatch),
  };
}
export const GameApp = connect(selector, mapDispatchToProps)(Game_App);
