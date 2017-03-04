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
            <div id="enews">
              <h3 className="foot_title">Newsletter</h3>
              <p>Sign up below and receive updates, specials, discounts and event announcements from ATOS Jiu-Jitsu.</p>
            </div>
            <div id="andre">
              <p className="quote">
                <em>"You don't have to be the best, you just have to do your best"</em>
                "-"
                <strong>André Galvão</strong>
              </p>
              <p className="awards">
                    Black Belt 3rd Degree
                  <br/>
                    ADCC Super Fight World Champion
                    <br/>
                    4x ADCC World Champion
                    <br/>
                    11X Pan American Champion
                    <br/>
                    President of ATOS Jiu-Jitsu Association
                    <br/>
                    ATOS Jiu-Jitsu Co-founder
                    <br/>
                    9x World Champion IBJJF
                    <br/>
                    5x World Cup Champion CBJJO
                    <br/>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
