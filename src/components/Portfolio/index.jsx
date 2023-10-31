import { useState } from "react";
import Project from "../Project";

function Portfolio() {
  const [projects] = useState([
    {
      name: "Budget My Vacay",
      desc: "Javascript, Express, Node, MySQL",
      link: "https://fast-ridge-13851-d2c78560f8b5.herokuapp.com/",
      repo: "https://github.com/NickBicknell/Budget-My-Vacay/",
      img: "./projects/budget-my-vacay.png",
    },
    {
      name: "MVC Tech Blog",
      desc: "Javascript, Express, Node, MySQL",
      link: "https://protected-brushlands-09488-11d609dc1784.herokuapp.com/",
      repo: "https://github.com/NickBicknell/MVC-Tech-Blog",
      img: "./projects/mvc-tech-blog.png",
    },
    {
      name: "Social Network API",
      desc: "Javascript, MongoDB",
      link: "https://github.com/NickBicknell/Social-Network-API",
      repo: "https://github.com/NickBicknell/Social-Network-API",
      img: "./projects/social-network-api.png",
    },
    {
      name: "Movie Finder",
      desc: "HTML, CSS, Javascript",
      link: "https://nickbicknell.github.io/movie-finder/",
      repo: "https://github.com/NickBicknell/movie-finder",
      img: "./projects/movie-finder.png",
    },
    {
      name: "E-Commerce Back End",
      desc: "Javascript, Express, Node, MySQL",
      link: "https://github.com/NickBicknell/E-Commerce-Back-End",
      repo: "https://github.com/NickBicknell/E-Commerce-Back-End",
      img: "./projects/e-commerce.jpg",
    },
    {
      name: "SQL Employee Tracker",
      desc: "MySQL, Node",
      link: "https://github.com/NickBicknell/SQL-Employee-Tracker",
      repo: "https://github.com/NickBicknell/SQL-Employee-Tracker",
      img: "./projects/sql-tracker.jpg",
    },
    {
      name: "Note Taker",
      desc: "Javascript, Node, Express",
      link: "https://peaceful-badlands-51869-a3f2c32848e7.herokuapp.com/",
      repo: "https://github.com/NickBicknell/Note-Taker-App",
      img: "./projects/note-taker.png",
    },
    {
      name: "Weather Dashboard",
      desc: "HTML, CSS, Javascript",
      link: "https://nickbicknell.github.io/Weather-Dashboard/",
      repo: "https://github.com/NickBicknell/Weather-Dashboard",
      img: "./projects/weather-dashboard.png",
    },
    {
      name: "SVG Logo Maker",
      desc: "Javascript, Node, Inquirer",
      link: "https://github.com/NickBicknell/SVG-Logo-Maker",
      repo: "https://github.com/NickBicknell/SVG-Logo-Maker",
      img: "./projects/svg.png",
    },
    {
      name: "Professional README Generator",
      desc: "Javascript, Node, Inquirer",
      link: "https://github.com/NickBicknell/Professional-README-Generator",
      repo: "https://github.com/NickBicknell/Professional-README-Generator",
      img: "./projects/readme-generator.png",
    },
    {
      name: "Code Quiz",
      desc: "HTML, CSS, Javascript",
      link: "https://nickbicknell.github.io/Code-Quiz/",
      repo: "https://github.com/NickBicknell/Code-Quiz",
      img: "./projects/code-quiz.png",
    },
    {
      name: "Work Day Scheduler",
      desc: "HTML, CSS, Javascript",
      link: "https://nickbicknell.github.io/Work-Day-Scheduler/",
      repo: "https://github.com/NickBicknell/Work-Day-Scheduler",
      img: "./projects/work-day-scheduler.png",
    },
    {
      name: "Password Generator",
      desc: "HTML, CSS, Javascript",
      link: "https://nickbicknell.github.io/Password-Generator/",
      repo: "https://github.com/NickBicknell/Password-Generator",
      img: "./projects/password-generator.png",
    },
  ]);

  return (
    <div>
      <div className="row justify-content-between">
        <h1 className="display-2 text-white text-center">Portfolio</h1>
      </div>
      <div className="container d-flex align-items-center justify-content-center position-relative flex-wrap">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
