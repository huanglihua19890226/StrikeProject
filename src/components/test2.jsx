import React, {
  Component,
  PropTypes
} from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Draggable from 'react-draggable';
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
      if (idxOf === 0) isShow = false;
      return (
        <Draggable key={idx}
          onStart={(e) => {
            console.log(e, 'onStart');
          }}
          onDrag={(e)=>{
            console.log(e, 'onDrag');
          }}
          onStop={(e)=>{
            console.log(e, 'onStop');
          }}>
          <Section
            index={idx}
            sectionListIdexs={sectionListIdexs}
            section={section}
            isShow={isShow}
            onClose={testActions.delSection}
            onSelect={testActions.selectSection}
            onMove={testActions.updateSectionPos}/>
        </Draggable>)
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



class Section extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { onClose, index, section, isShow, onSelect } = this.props;
    var commonZIndex = (index + 1) * 2
    var sectionStyle = {
      zIndex: 99 - commonZIndex,
    }
    var isShowStyle = {
      backgroundColor: 'black',
      opacity: 0.3,
      cursor: 'move',
      zIndex: 100 - commonZIndex,
      top: 0,
      left: 0,
      position: 'absolute',
      width: '500px',
      height: '500px',
      display: isShow ? 'block' : 'none'
    }
    return (
      <div className="section" style={sectionStyle} ref={index}>
        <SectionHeader onClose={() => onClose(index)} index={index} onMouseDown={e => {
            this.dragStart(e, this.refs[index])
          }}/>
        <div ref="up_section_layer" style={isShowStyle} onMouseDown={e => {
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
