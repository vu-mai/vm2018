import React, {Component} from 'react';
import config from '../../config';
import {load} from '../../helpers/spreadsheet';

class LandingPage extends Component {
  state = {
    liste: [],
    error: null
  };

  onLoad = (data, error) => {
    if (data) {
      const {liste} = data;
      this.setState({liste});
    } else {
      this.setState({error})
    }
  };

  initClient = () => {
    window.gapi.client.init({apiKey: config.apiKey, discoveryDocs: config.discoveryDocs}).then(() => {
      load(this.onLoad);
    })
  };

  componentDidMount() {
    const {onSetUsers} = this.props;

    // db.onceGetUsers().then(snapshot =>
    //   onSetUsers(snapshot.val())
    // );

    window.gapi.load("client", this.initClient);
  }

  render() {
    const {users} = this.props;
    const {liste, error} = this.state;

    return (<div>
      <h1>VM 2018</h1>

      <iframe
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQcgeOeNnBHFCxe9mksaecAdbHq-D25IzllECaIAgGYng6qcNLotJD9yzERCYCanoCPTzbkb41pJlgO/pubhtml?gid=1979797024&amp;widget=true&amp;headers=false"
        height="520"
        width="1040"
        allowfullscreen=""
        frameborder="0"
        scrolling="no"
      />
    </div>);
  }
}

export default LandingPage;
