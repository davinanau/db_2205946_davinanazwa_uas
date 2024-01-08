import React, { Component } from 'react';
import UserService from '../services/UserService';
import '../styles/listUser.css';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

class ListUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      totalUsers: 0,
      search: '',
    };
    this.addUser = this.addUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  deleteUser(id) {
    Swal.fire({
      title: 'Apakah anda yakin menghapus ini?',
      text: 'Ini akan terhapus permanen',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Iya, hapus ini',
    }).then((result) => {
      if (result.isConfirmed) {
        UserService.deleteUser(id).then((res) => {
          this.setState((prevState) => ({
            users: prevState.users.filter((user) => user.id !== id),
            totalUsers: prevState.totalUsers - 1,
          }));
        });
      }
    });
  }

  viewUser(id) {
    this.props.history.push(`/view-user/${id}`);
  }

  editUser(id) {
    this.props.history.push(`/add-user/${id}`);
  }

  goBackToHome = () => {
    this.props.history.push('/');
  };

  componentDidMount() {
    UserService.getUsers().then((res) => {
      if (res.data == null) {
        this.props.history.push('/add-user/_add');
      }
      this.setState({
        users: res.data,
        totalUsers: res.data.length,
      });
    });
  }

  addUser() {
    this.props.history.push('/add-user/_add');
  }

  handleSearchChange(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    const filteredUsers = this.state.users.filter((user) =>
      user.nama.toLowerCase().includes(this.state.search.toLowerCase())
    );

    return (
      <div className="bg">
        <h2 className="text-center">Antrian Pasien</h2>
        <div className="text-center">
          <p className="text-center">Jumlah Pasien: {this.state.totalUsers}</p>
        </div>
        <div className="text-center">
          <button className="btn btn-primary ml-2" onClick={this.addUser}>
            Pendaftaran
          </button>
        </div>
        <br></br>
        <div className="row">
          <div className="container text-center">
            <input
              type="text"
              placeholder="Cari nama pasien..."
              value={this.state.search}
              onChange={this.handleSearchChange}
              className="form-control mb-2"
            />
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Usia</th>
                  <th>Alamat</th>
                  <th>Jenis Kelamin</th>
                  <th>Deskripsi</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.nama}</td>
                    <td>{user.usia}</td>
                    <td>{user.alamat}</td>
                    <td>{user.jenis_kelamin}</td>
                    <td>{user.deskripsi}</td>
                    <td>
                      <button
                        onClick={() => this.editUser(user.id)}
                        className="btn btn-warning"
                      >
                        Update
                      </button>
                      <button
                        style={{ marginLeft: '10px' }}
                        onClick={() => this.deleteUser(user.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                      <button
                        style={{ marginLeft: '10px' }}
                        onClick={() => this.viewUser(user.id)}
                        className="btn btn-info"
                      >
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-center mt-3">
              <Link to="/" className="btn btn-secondary">
                Kembali ke Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListUserComponent;
