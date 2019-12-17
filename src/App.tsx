import React, { Component } from "react";

interface AppComponentProps {}

interface AppComponentState {}

class App extends Component<AppComponentProps, AppComponentState> {
  constructor(props: AppComponentProps) {
    super(props);
    this.state = {};
  }

  render(): JSX.Element {
    return (
      <div className="App">
        <p className="Apptext">App</p>
      </div>
    );
  }
}

export default App;
