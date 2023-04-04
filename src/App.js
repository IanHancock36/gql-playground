import "./App.css";
import CharactersList from "./pages/CharactersList";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Character from "./pages/Character";
import Search from './pages/Search'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharactersList />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/:id" element={<Character />}></Route>
      </Routes>
    </div>
  );
}

export default App;
