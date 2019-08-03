import React from "react";

import WelcomePage from "./components/WelcomePage";
import UsersContainer from "./containers/UsersContainer";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        {/* <WelcomePage /> */}
        <UsersContainer />
      </div>
    );
  }
}

export default App;
