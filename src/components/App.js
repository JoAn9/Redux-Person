import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import addPerson from '../actions/add_person';
import getWantedList from '../actions/get_wanted_list';
import WantedCard from './WantedCard';
import AddUserModal from './AddUserModal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      newPersonName: '',
      newPersonReason: '',
      newPersonReward: '',
      newPersonEyes: '',
      newPersonNose: '',
      newPersonMouth: '',
      newPersonSkin: '#CE96FF'
    }
  }
  componentDidMount() {
    this.props.getWantedList();
  }

  renderUsers() {
    if(this.props.wantedPeople) {
      return this.props.wantedPeople.map(person => {
        return <WantedCard key={person.name} person={person} />
      });
    } else {
      return <div>Loading...</div>
    }
  }

  toggleModalState() {
    if(this.state.openModal) {
      this.clearFormAndCloseModal();
    } else {
      this.setState({
        openModal: true,
      })
    }
  }

  clearFormAndCloseModal() {
    this.setState({
      newPersonName: '',
      newPersonReason: '',
      newPersonReward: '',
      newPersonEyes: 1,
      newPersonNose: 1,
      newPersonMouth: 1,
      newPersonSkin: '#CE96FF',
      openModal: false
    })
  }

  handleChange = name => event => {
    const {state} = this.state;
    const newState = {
      ...state,
      [name]: event.target.value,
    };
    this.setState({
      state: newState,
    });
  }

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
                    onClick={this.toggleModalState}
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
            </div>
            <div className="column col-md-6">
              {/* <RewardList /> */}
            </div>
          </div>
        </div>
        <AddUserModal
          state={this.state}
          handleChange={this.handleChange}
          toggleModalState={this.toggleModalState}
        />
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
