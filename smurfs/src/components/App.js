import React, { Component } from "react";
import "./App.css";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import Smurflist from "./smurflist";
import Smurfinput from "./smurfinput";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>
          <Smurflist />
        </div>
        <div>
          <Smurfinput />
        </div>
      </div>
    );
  }
}

export default App;
