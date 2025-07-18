import { Link } from "react-router-dom";

const MainSection = () => {
  return (
    <section className="main-section">
      <div className="title">
        <p>Vibrant culture</p>
      </div>
      <div className="title-head">
        <h2>The Gym College students management</h2>
      </div>

      <div className="main-content">
        <div className="text-content">
          <div className="head-content">
            <img className="img6" src="src/assets/image6.png" />
            <h3>
              <b>Digital transformation </b>
            </h3>
          </div>
          <p>
            Digital transformation empowers students with tools and
            <br /> skills that extend beyond technical proficiency, fostering a
            <br /> learning environment where ethical digital citizenship and
            <br /> proper online conduct become the bedrock of their future{" "}
            <br />
            success in an increasingly connected world
          </p>
        </div>

        <div className="text-content1">
          <div className="head-content1">
            <img src="src/assets/image7.png" />
            <h3>
              <b>Disciplined and Productive </b>
            </h3>
          </div>
          <p>
            Discipline in time, as well as discipline in all matters
            <br /> and possessions. Organized and able to manage their
            <br /> agenda/activities so that all their time can be valuable
            <br /> and beneficial
          </p>
        </div>

        <div className="text-content">
          <div className="head-content">
            <img className="img8" src="src/assets/image8.png" />
            <h3>
              <b>Race Towards Goodness </b>
            </h3>
          </div>
          <p>
            Competing and striving in goodness. Having speed and
            <br />
            accuracy in doing good deeds. Trained to act swiftly in
            <br />
            matters, completing tasks quickly and efficiently.
          </p>
        </div>
      </div>

      <div className="gallery-section">
        <div className="title">
          <p>Gallery</p>
        </div>
        <div className="title-head">
          <h2>The Gym college students lifestyle</h2>
        </div>
        <div>
          <div id="link">
            <div className="all">
              <a href="/">All</a>
            </div>
            <div id="foundation">
              <a to="/">Foundation period</a>
            </div>
            <div id="sports">
              <a to="/">Sports culture</a>
            </div>
            <div id="project">
              <a to="/">Projects phase</a>
            </div>
          </div>
        </div>
        <div className="images-from-gallery">
          <img src="src/assets/image9.png" />
          <img src="src/assets/image10.png" />
          <img src="src/assets/image11.png" />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
