//https://www.digitalocean.com/community/tutorials/react-axios-react
import React from "react";
import axios from "axios";

export default class BoutiqueList extends React.Component {
  state = {
    boutiques: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://4149o8lffa.execute-api.eu-west-1.amazonaws.com/challenge/boutiques`
      )
      .then((res) => {
        const boutiques = res.data;
        this.setState({ boutiques });
      });
  }

  render() {
    return (
      <>
        <h1>List of all boutiques</h1>
        <ul>
          {this.state.boutiques.map((boutique) => (
            <li key={boutique.id}>{boutique.name}</li>
          ))}
        </ul>
      </>
    );
  }
}
