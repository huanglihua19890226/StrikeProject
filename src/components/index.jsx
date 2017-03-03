import React, {
  Component,
  PropTypes
} from 'react';
import Header from './Header.jsx';
import LanMu1 from './xueyuan/lanmu1.jsx';
import Footer from './Footer.jsx';
export default class GameApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Comp: LanMu1,
    }
  }
  changeComponent(c) {
    this.setState({
      Comp: c
    })
  }
  render() {
    const { Comp } = this.state;
    return (
        <div className="container">
          <Header changeComponent={(c)=>this.changeComponent(c)}/>
          <Comp/>
          <div className="box"></div>
          <Footer/>
        </div>
    );
  };
}
