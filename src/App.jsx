import {useAuth0} from "@auth0/auth0-react";
import Home from "./components/Home";
import Header from "./components/ui/header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {socket} from "./socket";
import React from "react";

function App() {
  const {user} = useAuth0();
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home socket={socket} />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
