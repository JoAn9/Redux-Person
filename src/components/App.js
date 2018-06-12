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

  renderUsers() {
    if(this.props.wantedPeople) {
      return this.props.wantedPeople.map(person => {
        <li key={person.name}>{person.name}</li>
      });
    } else {
      return <div>Loading...</div>
    }

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

function mapStateToProps(store) {
  return {
    wantedPeople: store.wantedPeople,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getWantedList: getWantedList
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
