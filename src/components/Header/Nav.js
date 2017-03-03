import React, {
  Component,
  PropTypes
} from 'react';

export default class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display: 'none'
    }
  }
  render() {
    const { nav, changeComponent } = this.props;
    const { display } = this.state;
    const style = {
      display: display
    }
    return (
      <li onMouseLeave={()=>this.setState({display: 'none'})}>
        <a onMouseEnter={()=>this.setState({display: 'block'})} onClick={()=>changeComponent(nav.component)}>{nav.title}</a>
        <div style={style} onMouseLeave={()=>this.setState({display: 'none'})} >
          {
            nav.list.map((l, _idx) => (
              <span key={_idx} onClick={()=>changeComponent(l.component)}>{l.title}</span>
            ))
          }
        </div>
      </li>
    );
  };
}
