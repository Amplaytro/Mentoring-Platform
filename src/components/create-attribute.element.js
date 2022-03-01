import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateAttribute extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeDomain = this.onChangeDomain.bind(this);
    this.onChangeCompany = this.onChangeCompany.bind(this);
    this.onChangeLanguage = this.onChangeLanguage.bind(this);
    this.onChangeHometown = this.onChangeHometown.bind(this);
    this.onChangeExperience = this.onChangeExperience.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      firstname: '',
      lastname: '',
      domain: '',
      compant: '',
      language: '',
      hometown: '',
      experience: 0,
      date: new Date(),
      experts: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/experts/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            experts: response.data.map(expert => expert.username),
            username: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeFirstname(e) {
    this.setState({
      firstname: e.target.value
    })
  }

  onChangeLastname(e) {
    this.setState({
      lastname: e.target.value
    })
  }

  onChangeDomain(e) {
    this.setState({
      domain: e.target.value
    })
  }

  onChangeCompany(e) {
    this.setState({
      company: e.target.value
    })
  }

  onChangeLanguage(e) {
    this.setState({
      language: e.target.value
    })
  }

  onChangeHometown(e) {
    this.setState({
      hometown: e.target.value
    })
  }

  onChangeExperience(e) {
    this.setState({
      experience: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const attribute = {
      username: this.state.username,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      domain: this.state.domain,
      company: this.state.company,
      language: this.state.language,
      hometown: this.state.hometown,
      experience: this.state.experience,
      date: this.state.date
    }

    console.log(attribute);

    axios.post('http://localhost:5000/attributes/add', attribute)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Attribute Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.experts.map(function(expert) {
                  return <option 
                    key={expert}
                    value={expert}>{expert}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Firstname: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.firstname}
              onChange={this.onChangeFirstname}
              />
        </div>
        <div className="form-group"> 
          <label>Lastname: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.lastname}
              onChange={this.onChangeLastname}
              />
        </div>
        <div className="form-group"> 
          <label>Domain: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.domain}
              onChange={this.onChangeDomain}
              />
        </div>
        <div className="form-group"> 
          <label>Company: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.company}
              onChange={this.onChangeCompany}
              />
        </div>
        <div className="form-group"> 
          <label>Language: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.language}
              onChange={this.onChangeLanguage}
              />
        </div>
        <div className="form-group"> 
          <label>Hometown: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.hometown}
              onChange={this.onChangeHometown}
              />
        </div>
        <div className="form-group">
          <label>Experience (in years): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.experience}
              onChange={this.onChangeExperience}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Attribute Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}