import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

//Components
import Header from "./components/Header";

//Page Components
import Home from "./pages/Home";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";


const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
      <Header />
        <Router>
        <div className="container">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/projects/:id" element={<Project/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
