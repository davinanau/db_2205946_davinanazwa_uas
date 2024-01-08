import React, { Component } from "react";
import UserService from "../services/UserService";
import Swal from 'sweetalert2';
import '../styles/addUser.css';

class CreateUserComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      nama: "",
      usia: 0,
      alamat: "",
      jenis_kelamin: "Laki-laki", 
      deskripsi: "",
    };

    this.changeNama = this.changeNama.bind(this);
    this.changeUsia = this.changeUsia.bind(this);
    this.incrementUsia = this.incrementUsia.bind(this);
    this.decrementUsia = this.decrementUsia.bind(this);
    this.changeAlamat = this.changeAlamat.bind(this);
    this.changeJenisKelamin = this.changeJenisKelamin.bind(this);
    this.changeDeskripsi = this.changeDeskripsi.bind(this);
    this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
  }

  componentDidMount() {
    if (this.state.id === "_add") {
      return;
    } else {
      UserService.getUserById(this.state.id).then((res) => {
        let user = res.data;
        this.setState({
          nama: user.nama,
          usia: user.usia,
          alamat: user.alamat,
          jenis_kelamin: user.jenis_kelamin || "Laki-laki", 
          deskripsi: user.deskripsi,
        });
      });
    }
  }

  showSuccessMessage(action) {
    let message = '';
  
    if (action === 'add') {
      message = 'Pendaftaran Telah Berhasil!';
    } else if (action === 'update') {
      message = 'Berhasil Melakukan Update';
    }
  
    Swal.fire({
      position: 'center', 
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 2000
    });
  }

  saveOrUpdateUser = (e) => {
    e.preventDefault();
    let user = {
      nama: this.state.nama,
      usia: this.state.usia,
      alamat: this.state.alamat,
      jenis_kelamin: this.state.jenis_kelamin,
      deskripsi: this.state.deskripsi,
    };

    if (this.state.id === "_add") {
      UserService.createUser(user).then((res) => {
        this.showSuccessMessage('add');
        this.props.history.push("/users");
      });
    } else {
      UserService.updateUser(user, this.state.id).then((res) => {
        this.showSuccessMessage('update');
        this.props.history.push("/users");
      });
    }
  };

  changeNama = (event) => {
    this.setState({ nama: event.target.value });
  };

  changeUsia = (event) => {
    this.setState({ usia: event.target.value });
  };

  incrementUsia() {
    this.setState((prevState) => ({
      usia: Number(prevState.usia) + 1
    }));
  }

  decrementUsia() {
    if (this.state.usia > 0) {
      this.setState((prevState) => ({
        usia: Number(prevState.usia) - 1
      }));
    }
  };

  changeAlamat = (event) => {
    this.setState({ alamat: event.target.value });
  };

  changeJenisKelamin = (event) => {
    this.setState({ jenis_kelamin: event.target.value });
  };

  changeDeskripsi = (event) => {
    this.setState({ deskripsi: event.target.value });
  };

  cancel() {
    this.props.history.push("/users");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Patient</h3>;
    } else {
      return <h3 className="text-center">Update Patient</h3>;
    }
  }

  render() {
    return (
      <div className="bg">
        <br></br>
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {this.getTitle()}
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> Nama: </label>
                  <input
                    placeholder="Nama"
                    name="nama"
                    className="form-control"
                    value={this.state.nama}
                    onChange={this.changeNama}
                  />
                </div>
                <div className="form-group">
                  <label> Usia: </label>
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control text-center"
                      value={this.state.usia}
                      onChange={this.changeUsia}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label> Alamat: </label>
                  <input
                    placeholder="Alamat"
                    name="alamat"
                    className="form-control"
                    value={this.state.alamat}
                    onChange={this.changeAlamat}
                  />
                </div>
                <div className="form-group">
                  <label> Jenis Kelamin: </label>
                  <select
                    name="jenis_kelamin"
                    className="form-control"
                    value={this.state.jenis_kelamin}
                    onChange={this.changeJenisKelamin}
                  >
                    <option value="Laki-laki">Laki-Laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>
                <div className="form-group">
                  <label> Deskripsi: </label>
                  <input
                    placeholder="Deskripsi"
                    name="deskripsi"
                    className="form-control"
                    value={this.state.deskripsi}
                    onChange={this.changeDeskripsi}
                  />
                </div>

                <button
                  className="btn btn-success"
                  onClick={this.saveOrUpdateUser}
                >
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={this.cancel.bind(this)}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateUserComponent;
