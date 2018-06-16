import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import addPerson from '../actions/add_person';
import getWantedList from '../actions/get_wanted_list';
import deletePerson from '../actions/delete_person';
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
    }
  }
  componentDidMount() {
    this.props.getWantedList();
  }

  renderUsers() {
    if(this.props.wantedPeople) {
      return this.props.wantedPeople.map(person => {
        return <WantedCard
          deletePerson={this.props.deletePerson}
          key={person.name}
          person={person} />
      });
    } else {
      return <div>Loading...</div>
    }
  }

  toggleModalState = () => {
    if(this.state.openModal) {
      this.clearFormAndCloseModal();
    } else {
      this.setState({
        openModal: true
      })
    }
   }

  clearFormAndCloseModal() {
    this.setState({
      newPersonName: '',
      newPersonReason: '',
      newPersonReward: '',
      openModal: false
    })
  }

  handleNewPersonNameChange = (e) => {
    this.setState({
      newPersonName: e.target.value
    });
  }

  handleNewPersonReasonChange = (e) => {
    this.setState({
      newPersonReason: e.target.value
    });
  }

  handleNewPersonRewardChange = (e) => {
    this.setState({
      newPersonReward: e.target.value
    });
  }

  handlePersonCreation = () => {
    const person = {
      name: this.state.newPersonName,
      image: `https://api.adorable.io/avatars/face`,
      reason: this.state.newPersonReason,
      reward: this.state.newPersonReward
    };
    this.props.addPerson(person);
    this.clearFormAndCloseModal();
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
          toggleModalState={this.toggleModalState}
          handleNewPersonNameChange={this.handleNewPersonNameChange}
          createPerson={this.handlePersonCreation}
          addToWantedList={this.handlePersonCreation}
          handleNewPersonReasonChange={this.handleNewPersonReasonChange}
          handleNewPersonRewardChange={this.handleNewPersonRewardChange}
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
    getWantedList,
    addPerson,
    deletePerson,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
