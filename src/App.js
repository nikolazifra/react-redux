import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import React, { Fragment } from "react";
import Navbar from "./app/Navbar";
import PostsList from "./features/posts/NewPostsList";
import AddPostForm from "./features/posts/NewAddPostForm";


const App = () => {
    return (
        <Router>
          <Navbar />
          <div className="App">
           <Switch>
              <Route exact path="/" render={() => (
                     <Fragment>
                     <AddPostForm/>
                     <PostsList />
                     /</Fragment>
                )} />
                <Redirect to="/"/>
            </Switch>
          </div>
        </Router>
      );

}
export default App