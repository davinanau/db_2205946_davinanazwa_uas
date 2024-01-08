import React, { Component } from "react";
import UserService from "../services/UserService";
import fotto from "../assets/background.png";
import "../styles/viewUser.css";

class ViewUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      user: {},
    };
  }

  componentDidMount() {
    UserService.getUserById(this.state.id).then((res) => {
      this.setState({ user: res.data });
    });
  }

  goBackToList = () => {
    this.props.history.push("/users");
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center mb-4">Detail Pasien</h3>
                <div className="row mb-3">
                  <label className="col-sm-4 col-form-label">Nama:</label>
                  <div className="col-sm-8">{this.state.user.nama}</div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-4 col-form-label">Usia:</label>
                  <div className="col-sm-8">{this.state.user.usia}</div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-4 col-form-label">Alamat:</label>
                  <div className="col-sm-8">{this.state.user.alamat}</div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-4 col-form-label">Jenis Kelamin:</label>
                  <div className="col-sm-8">{this.state.user.jenis_kelamin}</div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-4 col-form-label">Deskripsi:</label>
                  <div className="col-sm-8 description">
                    {this.state.user.deskripsi}
                  </div>
                </div>
              </div>
              <div className="card-footer text-center">
                <button className="btn btn-secondary" onClick={this.goBackToList}>
                  Kembali
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewUserComponent;
