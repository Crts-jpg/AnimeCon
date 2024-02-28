import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navBar";
import Intro from "./components/intro";
import AnimeTop from "./components/animeTop";
import AnimeList from "./components/animeList";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <AnimeTop />
      <AnimeList />
    </div>
  );
}

export default App;
