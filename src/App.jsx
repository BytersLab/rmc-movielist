import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BSNavbar } from "./components/BSNavbar.comp.jsx";
import { BSNavLink } from "./components/BSNavLink.comp.jsx";
import { BSMovieCard } from "./components/BSMovieCard.comp.jsx";

function App() {
  const [movies, setMovies] = useState([]);

  // On Mount
  useEffect(() => {
    async function getMovies() {
      const movies = await fetch(
        "https://api.themoviedb.org/3/discover/movie",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + import.meta.env.VITE_TMDB_BEARER,
          },
        }
      );
      const data = await movies.json();
      setMovies(data.results);
    }
    getMovies();
    return () => {};
  }, []);

  // Update
  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <>
      <header>
        <BSNavbar
          brand="MovieList"
          navlinks={[
            <BSNavLink key="home" href="Home" text="Home" />,
            <BSNavLink key="movies" href="Movies" text="Movies" />,
            <BSNavLink key="pricing" href="Pricing" text="Pricing" />,
          ]}
        />
      </header>
      <main>
        <section className="movie-section">
          <BSMovieCard
            img="https://picsum.photos/200/150?random=1"
            title="Movie 1"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, provident!"
          />
        </section>
      </main>
    </>
  );
}

export default App;
