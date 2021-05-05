import logo from "./images/logo.png";
import mockup from "./images/mockup.png"
import './App.css';

function App() {

  return (
    <>
     
      <header>
        <img src={logo} alt="logo"/>
      </header>

      <main>

        <img src={mockup} alt="mockup"/>
        <div className="content">
          <h2>Build the community your fans will love</h2>
          <p>There are also designs for the mobile view and active status in the implementation of the design as well</p>
          <button>Resgister</button>
        </div>
      </main>

      <footer>
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
      </footer>
    </>
  );
}

export default App;
