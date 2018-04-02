import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAccounts } from '../actions/index';

import AccountsList from '../containers/accounts_list'

class AccountsIndex extends Component {

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  componentWillMount() {
    this.props.fetchAccounts();
    // console.log(this.props);
  }

onClick(event) {
  event.preventDefault();
  this.props.fetchAccounts()

console.log(this.props);

}

renderOptionHeaders() {

  return (
    <nav>
      <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <a className="nav-item nav-link" onClick={this.onClick} data-toggle="tab" role="tab">Accounts</a>
          <a className="nav-item nav-link" onClick={this.onClick} data-toggle="tab" role="tab">Transactions</a>
          <a className="nav-item nav-link" onClick={this.onClick} data-toggle="tab" role="tab">Balance</a>
          <a className="nav-item nav-link" onClick={this.onClick} data-toggle="tab" role="tab">transactions</a>
      </div>
    </nav>
  );

}

  render() {
    return (
      <div>
      <h1>Accounts</h1>
          {this.renderOptionHeaders()}
        <AccountsList />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAccounts }, dispatch);
}

function mapStateToProps(state) {
  // console.log(accounts);
    return {accounts: state.accounts};
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountsIndex);
