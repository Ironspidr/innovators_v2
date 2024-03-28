import { ComplexNavbar } from "../components/navbar";
import { Banner } from "../components/banner";
import backdrop from "../assets/img/backdrop_1.jpg";
import { Footer } from "../components/footer";

export default function About() {
  return (
    <div className="App font-family:league-spartan">
      <div>
        <header className="App-header pt-5 justify-center">
          <ComplexNavbar />
          <div className="flex items-center justify-center w-full pt-10">
            <Banner
              title="About Eastvale Innovators"
              caption="Gearing up for the future!"
              Banner={backdrop}
            />
          </div>
        </header>
        <Mission
          title="Our Mission"
          desc="Eastvale Innovators is a student-led organization that aims to
            provide students with the resources and opportunities to explore
            their interests in STEM fields. Our mission is to unite STEM
            pathways by providing opportunities for the student body by means of
            solving pressing issues presented by our community through projects
            and internships."
          img={backdrop}
        />
        <Mission
          title="Our Vision"
          desc="Students develop skills with their peers and mentors alike in order to gain valuable real world experiences varying from technical to leadership abilities cultivating competent individuals."
          img={backdrop}
        />
      </div>
      <Footer />
    </div>
  );
}

function Mission(props) {
  return (
    <div className="pt-10">
      <h1 className="font-semibold text-3xl flex justify-center">
        {props.title}
      </h1>
      <div className="flex flex-col justify-center items-center text-center pt-5">
        <div className="w-1/2">
          <p className="font-thisFont text-xl">{props.desc}</p>
        </div>
        <div className="pt-10">
          <img
            src={props.img}
            className="h-96 w-full rounded-lg object-cover object-center"
          ></img>
        </div>
      </div>
    </div>
  );
}
