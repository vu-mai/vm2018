import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';
import config from '../../config';
import { load } from '../../helpers/spreadsheet';

class HomePage extends Component {
    state = {
        liste: [],
        error: null
    };

    onLoad = (data, error) => {
        if (data) {
            const { liste } = data;
            this.setState({ liste });
        } else {
            this.setState({ error })
        }
    };

    initClient = () => {
        window.gapi.client
            .init({
                apiKey: config.apiKey,
                discoveryDocs: config.discoveryDocs
            })
            .then(() => {
                load(this.onLoad);
            })
    };

  componentDidMount() {
    const { onSetUsers } = this.props;

    // db.onceGetUsers().then(snapshot =>
    //   onSetUsers(snapshot.val())
    // );

      window.gapi.load("client", this.initClient);
  }

  render() {
    const { users } = this.props;
    const { liste, error } = this.state;

    return (
      <div>
        <h1>Google API test</h1>
        <p>Henter data fra google sheet</p>

        <ul>
            {liste.map((forekomst, i) => (
                <li key={i}>
                    {forekomst}
                </li>
            ))}
        </ul>
      </div>
    );
  }
}

const UserList = ({ users }) =>
  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key =>
      <div key={key}>{users[key].username}</div>
    )}
  </div>

const mapStateToProps = (state) => ({
  users: state.userState.users,
});

const mapDispatchToProps = (dispatch) => ({
  onSetUsers: (users) => dispatch({ type: 'USERS_SET', users }),
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage);
