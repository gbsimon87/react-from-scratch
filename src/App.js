import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Router, Link } from "@reach/router";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  // uri: "http://localhost:5000/",
});

client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `,
  })
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

const Home = () => (
  <div>
    <h2>Welcome</h2>
  </div>
);

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
  </div>
);

const App = () => (
  <ApolloProvider client={client}>
    <nav>
      <Link to="/">Home</Link> <Link to="dashboard">Dashboard</Link>
    </nav>
    <Router>
      <Home path="/" />
      <Dashboard path="dashboard" />
    </Router>
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
