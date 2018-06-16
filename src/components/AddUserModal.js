import React, { Component } from 'react';


class AddUserModal extends Component {
  render() {
    return (
      <div className={`modal ${this.props.state.openModal ? 'active' : null}`}>
        <div className="modal-overlay"></div>
        <div className="modal-container">
          <div className="modal-header">
            <button
              onClick={this.props.toggleModalState}
              className="btn btn-clear float-right"></button>
            <div className="modal-title">
              <h4>Add someone to the Most Wanted list</h4>
            </div>
          </div>
          <div className="modal-body">
            <div className="content">
              <form>
                <div className="form-group">
                  <label className="form-label">Name:</label>
                  <input
                    value={this.props.state.newPersonName}
                    onChange={this.props.handleNewPersonNameChange}
                    className="form-input"
                    type="text"
                    placeholder="Name or known alias" />
                </div>
                <div className="form-group">
                  <label className="form-label">Reason for arrest:</label>
                  <input
                    value={this.props.state.newPersonReason}
                    onChange={this.props.handleNewPersonReasonChange}
                    className="form-input"
                    type="text"
                    placeholder="What has the perp done?" />
                </div>
                <div className="form-group">
                  <label className="form-label">Reward for delivery to police station:</label>
                  <input
                    value={this.props.state.newPersonReward}
                    onChange={this.props.handleNewPersonRewardChange}
                    className="form-input"
                    type="text"
                    placeholder="Reward" />
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <button
              onClick={this.props.createPerson}
              className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddUserModal;