// Componentes
import Header from "./components/Header";
import Home from "./components/Home";
import Features from "./components/Features";
import Extension from "./components/Extension";
import Questions from "./components/Questions";
import Contact from "./components/Contact";
import Redes from "./components/Redes";


function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Features />
        <Extension />
        <Questions />
      </main>
      <footer className="footer">
        <Contact />
        <Redes />
        {/* <p className="attribution">
          Challenge by <a href="#" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
          Coded by <a href="#">GabrielRea</a>.
        </p> */}
      </footer>
    </>
  );
}

export default App;
