export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Jeboy Llorente</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Computer</span>{" "}
            <br />
            Science Student
          </h1>
          <p className="hero--section-description">
            BSCS 4TH YEAR COLLEGE 
            <br /> Future Tambay
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
