import React, {
  Component,
  PropTypes
} from 'react';
export default class Footer extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="footer_box">
        <div className="site-footer">
          <div className="foot_col_1">
            <div className="foot_sponsors">
              <h3 className="foot_title">Sponsors</h3>
              <a>
                <img src={image_url + 'logo_jiujitsufactory.gif'} alt=""/>
              </a>
              <a>
                <img src={image_url + 'FUJI-Mats_Banners3.jpg'} alt=""/>
              </a>
              <a>
                <img src={image_url + 'HALEO-Eps1-2.png'} alt=""/>
              </a>
            </div>
            <div className="foot_biz">
              <a>
                <img src={image_url + 'logo_yelp.gif'} alt=""/>
              </a>
            </div>
            <div className="foot_copyright">
              ©2017 ATOS Jiu-Jitsu | All Rights reserved.
            </div>
          </div>
          <div className="foot_col_2">
            <div className="foot_logo">
              <img src={image_url+ 'logo.png'} alt=""/>
            </div>
            <p className="foot_phone">858-292-5040</p>
            <p className="foot_adress">
              陆家嘴环路1号<br/>
            上海市浦东新区
            </p>
            <p>
              <img src={image_url+'genericYelpBizButton.png'} alt=""/>
            </p>
          </div>
          <div className="foot_col_3">
            
          </div>
        </div>
      </div>
    );
  };
}
