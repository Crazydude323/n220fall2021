import "./styles.css";
import React from "react";
import TiredMeter from "./components/TiredMeter";
import Clock from "./components/Clock";
import RandRoll from "./components/RandRoll";
import UserName from "./components/UserName";
import RecipeSearch from "./components/RecipeSearch";

export default class App extends React.Component {

  state = {
    pages: [
    <RecipeSearch />,
    <TiredMeter />,
    <Clock />,
    <RandRoll />,
    <UserName />
  ],
    curPage: 0,
  };
  
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <div>
          <button onClick={() => {
            this.swapProject(1);
          }}
          >
            Clock
            </button>
            <button onClick={() => {
            this.swapProject(0);
          }}
          >
            Recipe Search
            </button>
        </div>
        {this.state.pages[this.state.curPage]}
      </div>
    );
  }

  swapProject(projectIndex) {
    this.setState({ curPage: projectIndex });
  }
}

/*
export default function App() {
  let tired = 2;

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <p>I am level {tired} tired</p>
    </div>
  );
}
*/