import "./Desktop.css";

export const Desktop = ({ className, ...props }) => {
  return (
    <div className={"desktop " + className}>
      <div className="body">
      <img className="logo" src="logo0.png" />
      <div className="seth-jackson">Seth Jackson </div>
        <div className="nav-bar">
          <div className="nav-links">
            <a className="about" href="#about">About </a>
            <a className="work" href="#work">Work </a>
            <a className="contact" href="#contact-me">Contact </a>
            <a class="resume" href="https://docs.google.com/document/d/1gzlmq015RV5d2m22Jx20R32L5W_qPka2/edit?usp=sharing&ouid=110387566060356409190&rtpof=true&sd=true" target="_blank">Resume</a>          

          </div>
        </div>
        <div className="body2">
          <div className="about2" id="about">
            <div className="from-musical-performer-to-film-school-graduate-to-voice-actor-to-developer-and-designer-seth-has-many-hats-this-combined-with-many-years-of-hospitality-and-team-experience-seth-can-work-with-anyone-and-connect-to-any-project-at-hand-he-thrives-in-challenging-situations-and-loves-to-learn">
              From musical performer, to film school graduate, to voice actor,
              to developer <br />
              and designer, Seth has many hats. This combined with many years of
              hospitality and team experience, Seth can work with anyone and
              connect to any project at hand. He thrives in challenging
              situations and loves to learn.{" "}
            </div>
          </div>
          <div className="work2" id="work">
            <a
              className="main-work"
              href="https://chadoyek.github.io/Groove-Guide-Project-1/"
              target="_blank"
              alt="Groove Guide Screen Shot & Link"
              style={{
                background: "url(main-work0.png) center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="music-search-site">
                <div className="music-search-site2">Music Search Site </div>
              </div>
            </a>
            <a
              className="work-2"
              href="https://themuppetman.github.io/Seth_Jackson_CodingQuiz/"
              target="_blank"
              alt="Coding Quiz Screen Shot & Link"
              style={{
                background: "url(work-20.png) center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="coding-quiz-label">
                <div className="coding-quiz-text">Coding Quiz </div>
              </div>
            </a>
            <a
              className="work-3"
              href="https://themuppetman.github.io/MrJs_WeatherDashboard/"
              target="_blank"
              alt="Weather Dashboard Screen Shot & Link"
              style={{
                background: "url(work-30.png) center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="weather-dash-label">
                <div className="weather-dash-text">Weather Dashboard </div>
              </div>
            </a>
            <a
              className="work-4"
              href="https://github.com/cguntur/groove_guide__database"
              target="_blank"
              alt="Groove Guide DB Screen Shot & Link"
              style={{
                background: "url(work-40.png) center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="groove-guide-db-label">
                <div className="groove-guide-db-text">Groove Guide DB </div>
              </div>
            </a>
            <a
              className="work-5"
              href="https://themuppetman.github.io/S_JacksonPW-Gen/"
              target="_blank"
              alt="Password Generator Screen Shot & Link"
              style={{
                background: "url(work-50.png) center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="pw-gen-label">
                <div className="pw-gen-text">Password Generator </div>
              </div>
            </a>
            <div className="contact2" id="contact-me">
              <div className="contact-links">
                <a className="email" href="mailto:sethjackson@sethshows.com" target="_blank" alt="Seth Jackson's Email Link">Email </a>
                <a className="phone" href="tel:+1(925)421-4891" alt="Seth Jackson's Contact Phone Number Link (925) 421-4891">Phone </a>
                <a className="linked-in" href="https://www.linkedin.com/in/seth-jackson/" target="_blank" alt="Seth Jackson's LinkedLink Link">LinkedIn </a>
                <a class="resume2" href="https://docs.google.com/document/d/1gzlmq015RV5d2m22Jx20R32L5W_qPka2/edit?usp=sharing&ouid=110387566060356409190&rtpof=true&sd=true" target="_blank">Resume</a>          
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

