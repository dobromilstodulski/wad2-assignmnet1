import GenresContextProvider from "./contexts/genresContext";
import MoviesContextProvider from "./contexts/moviesContext";
import SiteHeader from './components/siteHeader'
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"    // CHANGED
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import FavoriteMoviesPage from './pages/favouritesMoviesPage'       // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesListPage from './pages/upcomingMoviesPage';

const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
          <SiteHeader />      {/* New Header  */}
          <div className="container-fluid">
          <MoviesContextProvider>     {/* NEW  */}
          <GenresContextProvider>    {/* NEW */}
            <Switch>
              <Route path="/reviews/:id" component={MovieReviewPage} />
              <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
              <Route exact path="/movies/upcoming" component={UpcomingMoviesListPage} />
              <Route path="/movies/:id" component={MoviePage} />
              <Route path="/" component={HomePage} />
              <Redirect from="*" to="/" />
          </Switch>
          </GenresContextProvider>    {/* NEW */}
          </MoviesContextProvider>     {/* NEW */}
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));