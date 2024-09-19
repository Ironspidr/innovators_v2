import backdrop from "../assets/img/backdrop_1.jpg";
import { ComplexNavbar } from "../components/navbar";
import { Banner } from "../components/banner";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

import branching from "../assets/img/medical story.png";
import clubs from "../assets/img/home-page-banner.png";
import aboutus from "../assets/img/aboutUs.jpg";
import Associates from "../components/associates";
import { Footer } from "../components/footer";
import AboutText from "../components/aboutText";
export default function Home() {
  return (
    <div className="App font-family:league-spartan bg-back-light dark:bg-back-dark">
      <div>
        <header className="App-header pt-5 justify-center">
          <ComplexNavbar />
          <div className="flex items-center justify-center w-full pt-10">
            <Banner
              title="Welcome to Eastvale Innovators"
              caption="Gearing up for the future!"
              Banner={backdrop}
            />
          </div>
        </header>
        {/* <Associates /> */}
        <div className="flex justify-center">
          <AboutText />
        </div>
        <ActionItems />
        {/* <InstaEmbed /> */}
      </div>
      <Footer />
    </div>
  );
}

function ActionItems() {
  return (
    <div className="">
      <h1 className="flex justify-center text-3xl p-2 pb-5 font-bold text-font-light dark:text-font-dark xxs:items-center">
        Learn More
      </h1>
      <div className="flex justify-center">
        <div className="flex lg:flex-row justify-between xxs:w-10 xxs:items-center sm:space-y-10 sm:items-center w-3/4 sm:flex-col xxs:flex-col">
          <div className="xxs:py-5">
            <CardDefault
              header="About Us"
              desc="Check out how students at the Eastvale STEM Academy & Eleanor Roosevelt High School are gaining real world experiences and gearing up for the future!"
              dir="/about"
              timg={aboutus}
            />
          </div>

          <div className="lg:px-5 xxs:py-5">
            <CardDefault
              header="Clubs"
              desc="Eastvale Innovators are involved in various clubs that work to benefit the students of ERHS and eSTEM as well as the greater eastvale community. Find out more about their various activities."
              dir="/#/clubs"
              timg={clubs}
            />
          </div>

          <div>
            <CardMenu
              header="Projects"
              desc="Through projects, internship oppurunities, and collaborative experiences, Eastvale Innovators are learning to solve real world problems. "
              timg={branching}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function CardDefault(props) {
  return (
    <Card className="mt-6 w-96 dark:bg-primary-dark">
      <CardHeader color="blue-gray" className="h-42">
        <img src={props.timg} alt="card-image" />
      </CardHeader>
      <CardBody>
        <h1 className="text-2xl font-semibold dark:text-font-dark">
          {props.header}
        </h1>
        <h1 className="dark:text-font-dark">{props.desc}</h1>
      </CardBody>
      <CardFooter className="pt-0">
        <a href={props.dir}>
          <Button color="red">Read More</Button>
        </a>
      </CardFooter>
    </Card>
  );
}

function CardMenu(props) {
  return (
    <Card className="mt-6 w-96 dark:bg-primary-dark">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={props.timg} alt="card-image" />
      </CardHeader>
      <CardBody>
        <h1 className="mb-2 text-2xl text-font-light font-semibold dark:text-font-dark">
          {props.header}
        </h1>
        <h1 className="dark:text-font-dark">{props.desc}</h1>
      </CardBody>
      <CardFooter className="pt-0">
        <Menu className="bg-back-light dark:bg-primary">
          <MenuHandler>
            <Button color="red">More Here</Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>
              <a href={props.dir}>
                <Button>Telemedicine</Button>
              </a>
            </MenuItem>
            <MenuItem>
              <a href={props.dir}>
                <Button color="blue">Mustangs App</Button>
              </a>
            </MenuItem>
          </MenuList>
        </Menu>
      </CardFooter>
    </Card>
  );
}
