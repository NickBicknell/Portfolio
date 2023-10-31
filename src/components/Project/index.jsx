import React from "react";

function Project({ project }) {
  const { name, repo, link, desc, img } = project;

  return (
    <div className="card d-flex position-relative flex-column">
      <a href={link}>
      <div className="imgContainer">
        <img src={img} />
      </div>
      </a>
      <div className="content">
          <h2 className="project-text">{name}</h2>
        <a href={repo}>
          <img
            className="project-icon mx-2 my-2"
            src="../../src/assets/img/github-icon.png"
          />
        </a>
        <p className="project-text">{desc}</p>
      </div>
    </div>
  );
}

export default Project;
