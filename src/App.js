import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/Navbar/NavBar";
import Section from "./components/Section/Section";
import GenresSection from "./components/GenresSection/GenresSection";
import {
  fetchGenres,
  fetchNewAlbums,
  fetchSongs,
  fetchTopAlbums,
} from "./api/api";
import "./App.css";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);

  const generateData = async () => {
    setTopAlbums(await fetchTopAlbums());
    setNewAlbums(await fetchNewAlbums());
    setSongs(await fetchSongs());
    setGenres(await fetchGenres());
  };

  useEffect(() => {
    generateData();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <HeroSection />

      <div style={{ marginBlock: "30px" }}>
        <Section data={topAlbums} type="album" title="Top Albums" />
      </div>
      <div style={{ marginBlock: "30px" }}>
        <Section data={newAlbums} type="album" title="New Albums" />
      </div>
      <hr className="divider" />
      <div>
        <GenresSection data={songs} title="Songs" genreLists={genres} />
      </div>
      <hr className="divider" />
    </div>
  );
}

export default App;
