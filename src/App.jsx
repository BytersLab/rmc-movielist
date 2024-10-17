import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BSNavbar } from "./components/BSNavbar.comp.jsx";
import { BSNavLink } from "./components/BSNavLink.comp.jsx";

function App() {
  return (
    <>
      <BSNavbar
        brand="MovieList"
        navlinks={[
          <BSNavLink key="home" href="Home" text="Home" />,
          <BSNavLink key="movies" href="Movies" text="Movies" />,
          <BSNavLink key="pricing" href="Pricing" text="Pricing" />,
        ]}
      />
    </>
  );
}

export default App;
