import logo from "./images/logo.svg";
import mockup from "./images/illustration-mockups.svg"
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

          <h2>Build The Community Your Fans Will Love</h2>

          <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>

          <button>Register</button>
        </div>
      </main>

      <footer>
        <div className="social-links">
          <a href="#" target="blank"><i class="fab fa-facebook-f"></i></a>
          <a href="#" target="blank"><i class="fab fa-twitter"></i></a>
          <a href="#" target="blank"><i class="fab fa-instagram"></i></a>
        </div>
        
        <p class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. &#8199; 
        Coded by <a href="https://github.com/misspee007" target="_blank">Precious-Abubakar</a>.
        </p>
      </footer>
    </>
  );
}

export default App;
