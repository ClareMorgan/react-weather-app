import React from "react";

export default function Footer() {
  return (
    <footer className="Footer">
      <p>
        {"This project was coded by "}
        <a
          href="https://claremorgan.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          title="Clare's Portfolio"
        >
          Clare Morgan
        </a>
        {" and is open-sourced on "}
        <a
          href="https://github.com/ClareMorgan/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
          title="Open sourced on GitHub"
        >
          GitHub
        </a>
        {" and hosted on "}
        <a
          href="https://react-weatherapp-claremorgan.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          title="React Weather App"
        >
          Netlify
        </a>
      </p>
    </footer>
  );
}
