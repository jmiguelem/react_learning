import React, { Component } from "react";
import Dashboard from "./Dashboard";

const profiles = [
  {
    id: 1,
    userID: "1",
    favoriteMovieID: "1"
  },
  {
    id: 2,
    userID: "2",
    favoriteMovieID: "1"
  },
  {
    id: 3,
    userID: "4",
    favoriteMovieID: "5"
  },
  {
    id: 4,
    userID: "5",
    favoriteMovieID: "2"
  },
  {
    id: 5,
    userID: "3",
    favoriteMovieID: "5"
  },
  {
    id: 6,
    userID: "6",
    favoriteMovieID: "4"
  }
];

const users = {
  1: {
    id: 1,
    name: "Jane Cruz",
    userName: "coder"
  },
  2: {
    id: 2,
    name: "Matthew Johnson",
    userName: "mpage"
  },
  3: {
    id: 3,
    name: "Autumn Green",
    userName: "user123"
  },
  4: {
    id: 4,
    name: "John Doe",
    userName: "user123"
  },
  5: {
    id: 5,
    name: "Lauren Carlson",
    userName: "user123"
  },
  6: {
    id: 6,
    name: "Nicholas Lain",
    userName: "user123"
  }
};

const movies = {
  1: {
    id: 1,
    name: "Planet Earth 1"
  },
  2: {
    id: 2,
    name: "Selma"
  },
  3: {
    id: 3,
    name: "Million Dollar Baby"
  },
  4: {
    id: 4,
    name: "Forrest Gump"
  },
  5: {
    id: 5,
    name: "Get Out"
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.usersByMovie = {};

    profiles.forEach((profile) => {
      const movieID = profile.favoriteMovieID;

      if (this.usersByMovie[movieID]) {
        this.usersByMovie[movieID].push(profile.userID);
      } else {
        this.usersByMovie[movieID] = [profile.userID];
      }
    });
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>

        {/*Use React and the data below to display a list of users alongside their favorite movies.*/}

        <h2>Favorite Movies</h2>
        <ul>
          {profiles.map((profile) => {
            const username = users[profile.userID].name;
            const favmovie = movies[profile.favoriteMovieID];
            return (
              <li key={profile.id}>
                <p>{`${username}\'s favorite movie is "${favmovie}."`}</p>
              </li>
            );
          })}
        </ul>
        <h2>Movies liked by</h2>
        {/* Show all the movies and the users that like that movie*/}
        <Dashboard
          usersByMovie={this.usersByMovie}
          movies={movies}
          users={users}
        />
      </div>
    );
  }
}

export default App;
