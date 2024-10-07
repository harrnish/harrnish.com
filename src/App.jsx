import "./App.css";
import ProfilePicture from "./assets/photos/profile-picture.jpg";

function App() {
  return (
    <>
      <div className="app">
        <div className="container">
          <div className="bio">
            <div className="profile-picture">
              <img src={ProfilePicture} alt="Profile picture" />
            </div>
            <div className="bio-copy">
              <h1>Harnish Mistry</h1>
              <p>Visual Developer based in Toronto, ON</p>
              <div className="callout">
                <a href="https://www.linkedin.com/in/harrnish/" target="_blank">
                  linkedin.com/in/harrnish
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
