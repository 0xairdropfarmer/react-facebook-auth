import React from "react";
import { OAuth } from "oauthio-web";
export default class FacebookAuth extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    access_token: ""
  };
  componentDidMount() {
    OAuth.initialize(this.props.api_key);
  }
  Auth = () => {
    OAuth.popup("facebook")
      .done(function(res) {
        let data = res.access_token;
        this.setState({ access_token: data });
      })
      .fail(function(err) {
        //todo when the OAuth flow failed
      });
  };

  render() {
    return (
      <button onClick={this.Auth} className="btn btn-tw btn-block">
        <span className="fa fa-facebook" /> Sign in with facebook
      </button>
    );
  }
}
