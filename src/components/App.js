import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import addPerson from '../actions/add_person';
import getWantedList from '../actions/get_wanted_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
    this.props.getWantedList();
  }

  renderUsers = () => {
    return this.props.wantedPeople.map(item => {
      <li key={item.name}>{item.name}</li>
    })
  }
  // renderUsers() {
  //   if(this.props.wantedPeople) {
  //     return this.props.wantedPeople.map(person => {
  //       return <WantedCard key={person.name} person={person} />;
  //     });
  //   } else {
  //     return '...loading...';
  //   }
  // }

  render() {
    return (
      <div className="App container">
        <div className="card-container">
          <div className="columns">
            <div className="column col-md-6">
                <h2>
                  Most Wanted:
                  <button
                    className="btn btn-primary"
                    onClick={this.props.addPerson}
                  >
                    Add
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={this.props.getWantedList}
                  >
                    Get
                  </button>
                </h2>
              {this.renderUsers()}
              {/* {this.renderUsers()} */}
            </div>
            <div className="column col-md-6">
              {/* <RewardList /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    wantedPeople: state.wantedPeople,
  }
}

export default connect(mapStateToProps, {
  addPerson,
  getWantedList
})(App);