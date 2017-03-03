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
        <div className="site-footer">
          <div className="foot_col_1">
            <div className="foot_sponsors">
              <h3 className="foot_title">Sponsors</h3>
            </div>
          </div>
        </div>
    );
  };
}
