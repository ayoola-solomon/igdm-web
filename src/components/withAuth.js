import { PureComponent } from "react";
import { connect } from "react-redux";

import { TOKEN, setLoggedInFlag } from "../pages/auth/actions";
import { get } from "../utils/localStorage";

class WithAuth extends PureComponent {
  componentDidMount() {
    if (get(TOKEN)) {
      this.props.setLoggedInFlag(true);
    } else {
      this.props.setLoggedInFlag(false);
    }
  }

  render() {
    return this.props.children({
      isLoggedIn: this.props.isLoggedIn
    });
  }
}

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  setLoggedInFlag: flag => dispatch(setLoggedInFlag(flag))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithAuth);
