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
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/movie",
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + import.meta.env.VITE_TMDB_BEARER,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`API Fetch failed ${response.status}`);
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
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
          {movies.length >= 1 ? (
            movies.map((item) => {
              return (
                <BSMovieCard
                  key={item.id}
                  img={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  title={item.title}
                  text={item.overview}
                />
              );
            })
          ) : (
            <h3>Sorry no Movies found</h3>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
