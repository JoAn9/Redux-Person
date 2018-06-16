import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import updatePerson from '../actions/update_person';
// import { Note } from './Note';


class WantedCard extends Component {


  handleDeletePerson = () => {
    this.props.deletePerson(this.props.person);
  }

  render() {
    const person = this.props.person;
    const title = `Image of the very wanted person, ${person.name}`;
    return (
      <div className="card">
        <button
          className="btn btn-clear tooltip"
          data-tooltip="Delete because person has been captured."
          onClick={this.handleDeletePerson}
        >
        </button>
        <div className="card-header">
          <figure
            className="avatar avatar-xl tooltip" data-tooltip={title}>
            <img alt={title} src={person.image} />
          </figure>
          <h4 className="card-title">{person.name}</h4>
        </div>
        {/* <Note
          //toggleEdit={this.toggleEdit}
          //updatePerson={this.handleUpdatePerson}
          //edit={this.state.editReason}
          //handleReasonChange={this.handleReasonChange}
          //content={this.state.reason}
          /> */}
          <small className="reward">
            <span>Reward for capture:</span> {person.reward}
          </small>
      </div>
    );
  }
}

export default WantedCard;