import React from "react";
import { Route, Switch } from "react-router-dom";

import "./assets/css/bootstrap.css";
import "./assets/css/fonts.css";
import "./assets/css/style.css";

import Filmography from "./pages/Filmography";
import Gallery from "./pages/Gallery";
import AboutMe from "./pages/AboutMe";
// import News from "./pages/News";
// import Contacts from "./pages/Contacts";
// import Privacy from "./pages/Privacy";

function App() {
  return (
    <Switch>
      <Route exact path="/filmography.html" component={Filmography} />
      <Route exact path="/gallery.html" component={Gallery} />
      {/* <Route exact path="/contacts.html" component={Contacts} /> */}
      {/* <Route exact path="/index-3.html" component={News} /> */}
      <Route exact path="/about-me.html" component={AboutMe} />
      {/* <Route exact path="/index-5.html" component={Privacy} /> */}
      <Route exact path="/" component={Filmography} />
    </Switch>
  );
}

export default App;
