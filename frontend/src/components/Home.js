import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row home-background justify-content-center align-items-center full-height">
          <div className="col-md-6 text-center">
            <h1>Selamat Datang di Puskesmas Davina</h1>
            <Link to="/users" className="btn btn-primary mt-3">
            Lihat Daftar Pasien
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
