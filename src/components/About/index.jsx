function About() {
  return (
    <div className="row mx-3 py-5 about">
      <div className="col-4 text-center animate__animated animate__fadeInLeftBig">
        <img
          className="personal-photo"
          src="../../src/assets/img/personal-photo.jpg"
          alt="Personal Photo"
        />
      </div>
      <div className="col-8 px-5 my-5 animate__animated animate__fadeInLeft">
        <h1 className="display-4 pb-1">About Me</h1>
        <p className="fs-2">
          I am a Full Stack Web Developer located in Dallas, Texas. I have
          earned a Certificate in Full Stack Web Development from Southern
          Methodist University, where I developed skills in MERN Stack and SQL
          Server.
        </p>
        <p className="fs-2">
          I am efficient at combining creativity and problem solving to develop
          user-friendly applications. My strong leadership and organizational
          skills allow me to effectively collaborate with other developers and
          designers.
        </p>
      </div>
    </div>
  );
}

export default About;
