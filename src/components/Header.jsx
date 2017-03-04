import React, {
  Component,
  PropTypes
} from 'react';


import Nav from './Header/Nav.js';
export default class Header extends Component {

  constructor(props) {
    super(props);

  }
  render() {
    const { changeComponent } = this.props;
    return (
      <header className="header">
        <h1 className="site-title">
          <a href="" rel="home">
            <img src={image_url + 'logo.png'} alt="sssss" />
          </a>
        </h1>
        <ul id="top-header">
          <li className="phone">858-292-5040</li>
        </ul>
        <nav id="site-navigation">
          <ul id="menu-main-navigation">
            {
              navs.map((nav, idx) => (<Nav key={idx} nav={nav} changeComponent={changeComponent}/>))
            }
          </ul>
        </nav>
      </header>
    );
  };
}
