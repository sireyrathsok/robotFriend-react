import React, { Component } from "react";
import CardList from "../components/CardList";
import { robots } from "../robots";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorHandling from "../components/ErrorHandling";
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };

    console.log(robots);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (event) => {
    return this.setState({ searchField: event.target.value });
  };

  render() {
    const filterRobot = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className=" tc">
          <h2 className="f2">Robot Friend</h2>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorHandling>
              <CardList robots={filterRobot} />;
            </ErrorHandling>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
