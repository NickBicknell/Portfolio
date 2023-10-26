function About() {
  return (
    <div className="row mx-3 my-5">
      <div className="col-4 d-flex justify-content-center">
        <img
          className="personal-photo"
          src="../../src/assets/img/personal-photo.jpg"
          alt="Personal Photo"
        />
      </div>
      <div className="col-7">
        <p className="fs-1 mx-3 my-5">
          I am a Full Stack Web Developer located in Dallas, Texas. I have
          earned a Certificate in Full Stack Web Development from Southern
          Methodist University, where I developed skills in MERN Stack and SQL
          Server.
        </p>
        <p className="fs-1 mx-3 my-5">
          I am efficent at combining creativity and problem solving to develop
          user-friendly applications. My strong leadership and organizational
          skills allow me to effectively collaborate with other developers and
          designers.
        </p>
      </div>
    </div>
  );
}

export default About;
