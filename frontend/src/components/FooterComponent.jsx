import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 
import instagram from '../assets/instagram1.jpg';
import gmail from '../assets/gmail.jpg';
import '../styles/footer.css';

class FooterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (
      this.props.location.pathname.includes('/view-user') ||
      this.props.location.pathname.includes('/add-user')
    ) {
      return null; 
    }

    const smallText = {
      fontSize: '14px', 
    };

    return (
      <div>
        <footer className="footer">
          <span className="text-muted" style={smallText}>
            Hak Cipta Milik @Puskesmas Davina Nazwa
          </span>
          <div className="sosmed">
            <a href="https:/www.instagram.com/davinanazwa_/" target="_blank">
              <img src={instagram} alt="Instagram" style={{ width: '30px' }} />
            </a>
            <a href="mailto:davinanau@upi.edu">
              <img src={gmail} alt="Gmail" style={{ width: '30px' }} />
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default withRouter(FooterComponent); 
