import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from 'react';
//import { useHistory } from 'react-router-dom';

const Attribute = props => (
    <td> 
      {props.attribute.username}<br/>
      {props.attribute.firstname}<br/>
      {props.attribute.lastname}<br/> 
      {props.attribute.domain}<br/>
      {props.attribute.company}<br/>
      {props.attribute.language}<br/>
      {props.attribute.hometown}<br/>
      {props.attribute.experience}<br/>
      {props.attribute.date.substring(0,10)}<br/>
    </td>
  //
)

export default class AttributesList extends Component {
  constructor(props) {
    super(props);

    this.deleteAttribute = this.deleteAttribute.bind(this)

    this.state = {attributes: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/attributes/')
      .then(response => {
        this.setState({ attributes: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteAttribute(id) {
    axios.delete('http://localhost:5000/attributes/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      attributes: this.state.attributes.filter(el => el._id !== id)
    })
  }

  attributeList() {
    return this.state.attributes.map(currentattribute => {
      return <Attribute attribute={currentattribute} deleteAttribute={this.deleteAttribute} key={currentattribute._id}/>;
    })
  }

  SearchBar = ({ searchQuery, setSearchQuery }) => (
    <form action="/experts-select" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search experts</span>
        </label>
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search experts"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
  );

  filterPosts = (posts, query) => {
    if (!query) {
        return posts;
    }

    return posts.filter((currentattribute) => {
        const postName = <Attribute attribute={currentattribute} deleteAttribute={this.deleteAttribute} key={currentattribute._id}/>;
        return postName.includes(query);
    });
  };

 render() {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPosts = this.filterPosts(this.state.attributes, searchQuery);
    return (
      <Router>
        <div>
          <h3>Available Experts</h3>
          <table className="table">
            <thead className="thead-light">
              <tr>
               <th>Username</th>
               <th>Firstname</th>
                <th>Lastname</th>
              </tr>
            </thead>
            <tbody>
              <tr>{ this.attributeList() }</tr>
           </tbody>
          </table>
          <search
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <ul>
            {filteredPosts.map((currentattribute) => (
            <Attribute attribute={currentattribute} deleteAttribute={this.deleteAttribute} key={currentattribute._id}/>
            ))}
          </ul>
       </div>
      </Router>
   )
  }
}