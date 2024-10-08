import React from "react";
import "./App.css";
import ProfilePicture from "./assets/photos/profile-picture.jpg";

import { ReactLenis } from "@studio-freight/react-lenis";

const sections = [
  {
    title: "Lab",
    items: [
      {
        label: "YouTube",
        link: "https://www.youtube.com/channel/UC7pVho4O31FyfQsZdXWejEw",
        sublabel: "Codegrid",
      },
    ],
  },
  {
    title: "Socials",
    items: [
      {
        label: "Github",
        link: "https://github.com/harrnish",
        sublabel: "github.com/harrnish",
      },
      {
        label: "YouTube",
        link: "https://www.youtube.com/channel/UC7mSvHkEAh7fbDUOhqdbL-g",
        sublabel: "youtube.com/harrnish",
      },
      {
        label: "Instagram",
        link: "https://www.instagram.com/harrnish/",
        sublabel: "instagram.com/harrnish",
      },
      {
        label: "Twitter",
        link: "https://x.com/harrnish",
        sublabel: "x.com/harrnish",
      },
    ],
  },
  {
    title: "Contact",
    items: [
      {
        label: "LinkedIn",
        link: "https://www.linkedin.com/in/harrnish/",
        sublabel: "harrnish",
      },
      {
        label: "Email",
        link: "mailto:harrnish@gmail.com",
        sublabel: "harrnish@gmail.com",
      },
    ],
  },
];

const LinkIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
      fill="#eee"
    />
  </svg>
);

function App() {
  return (
    <ReactLenis root>
      <div className="app">
        <div className="container">
          <div className="bio">
            <div className="profile-picture">
              <img src={ProfilePicture} alt="Profile picture" />
            </div>
            <div className="bio-copy">
              <h1>Harnish Mistry</h1>
              <p>Web Developer based in Toronto, ON</p>
              <div className="callout">
                <a
                  href="https://www.linkedin.com/in/harrnish/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/harrnish
                </a>
              </div>
            </div>
          </div>

          {sections.map((section) => (
            <section
              key={section.title.toLowerCase()}
              className={section.title.toLowerCase()}
            >
              <div className="section-title">
                <p className="primary">{section.title}</p>
              </div>
              {section.items.map((item) => (
                <div key={item.label} className="section-content">
                  <div className="col">
                    <p className="secondary">{item.label}</p>
                  </div>
                  <div className="col">
                    <div className="link">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.sublabel}
                      </a>
                      <LinkIcon />
                    </div>
                  </div>
                </div>
              ))}
            </section>
          ))}
        </div>
      </div>
    </ReactLenis>
  );
}

export default App;
