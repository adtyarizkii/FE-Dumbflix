import React from "react";
import NavbarUser from "../components/NavbarUser";
import { Card, Button, CardGroup } from "react-bootstrap";
import bgImg from "../assets/the-witcher.png";
import img from "../assets/txtw.png";
import tw from "../assets/tvseries/wtchr.png";
import ptm from "../assets/tvseries/ptm.png";
import got from "../assets/tvseries/got.png";
import mh from "../assets/tvseries/mh.png";
import touch from "../assets/tvseries/touch.png";
import arrow from "../assets/tvseries/arrow.png";
import tgf from "../assets/movies/tgf.png";
import tdk from "../assets/movies/tdk.png";
import endgame from "../assets/movies/endgame.png";
import joker from "../assets/movies/joker.png";
import gisae from "../assets/movies/gisae.png";
import cherno from "../assets/movies/cherno.png";

function HomePage() {
  const isLogin = true;
  return (
    <>
      <div>
        <NavbarUser />
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(104, 106, 116, 0), rgba(0, 0, 0, 0.99)), url(${bgImg})`,
          height: "90vh",
          marginTop: "10vh",
          width: "100%",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="ctnm">
          <div className="container">
            <img src={img} />
            <p className="mt-2">
              Geralt of Rivia, a solitary monster hunter, struggles to find his
              place in <br />a world where people often prove more wicked than
              beast
            </p>
            <div className="d-flex">
              <p style={{ padding: "3px" }}>2019 </p>{" "}
              <p className="ms-3 tvseries"> TV Series</p>
            </div>
            <button className="btn-watch mt-2">WATCH NOW !</button>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "black" }}>
        <CardGroup>
          <h3 className="text-light mb-3 ms-3">TV Series</h3>
          <div className="d-flex mx-auto">
            <Card style={{ backgroundColor: "black" }} className="px-1">
              <Card.Img variant="top" src={tw} />
              <Card.Body className="text-light">
                <Card.Title>The Witcher</Card.Title>
                <Card.Text>2019</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ backgroundColor: "black" }} className="px-1">
              <Card.Img variant="top" src={ptm} />
              <Card.Body className="text-light">
                <Card.Title>Persona 3 The Movie</Card.Title>
                <Card.Text>2016</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ backgroundColor: "black" }} className="px-1">
              <Card.Img variant="top" src={got} />
              <Card.Body className="text-light">
                <Card.Title>Game Of Thrones</Card.Title>
                <Card.Text>2011</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ backgroundColor: "black" }} className="px-1">
              <Card.Img variant="top" src={mh} />
              <Card.Body className="text-light">
                <Card.Title>Money Heist</Card.Title>
                <Card.Text>2013</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ backgroundColor: "black" }} className="px-1">
              <Card.Img variant="top" src={touch} />
              <Card.Body className="text-light">
                <Card.Title>Touch</Card.Title>
                <Card.Text>2020</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ backgroundColor: "black" }} className="px-1">
              <Card.Img variant="top" src={arrow} />
              <Card.Body className="text-light">
                <Card.Title>Arrow</Card.Title>
                <Card.Text>2012</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </CardGroup>
        <CardGroup>
          <h2 className="text-light mb-3 ms-3">Movies</h2>
          <div className="d-flex mx-auto">
            <Card style={{ backgroundColor: "black" }} className="px-1">
              <Card.Img variant="top" src={tgf} />
              <Card.Body className="text-light">
                <Card.Title>The GodFather</Card.Title>
                <Card.Text>1972</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ backgroundColor: "black" }} className="px-1">
              <Card.Img variant="top" src={tdk} />
              <Card.Body className="text-light">
                <Card.Title>The Dark Knight</Card.Title>
                <Card.Text>2008</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ backgroundColor: "black" }} className="px-1">
              <Card.Img variant="top" src={endgame} />
              <Card.Body className="text-light">
                <Card.Title>Avengers: Endgame</Card.Title>
                <Card.Text>2019</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ backgroundColor: "black" }} className="px-1">
              <Card.Img variant="top" src={joker} />
              <Card.Body className="text-light">
                <Card.Title>Joker</Card.Title>
                <Card.Text>2019</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ backgroundColor: "black" }} className="px-1">
              <Card.Img variant="top" src={gisae} />
              <Card.Body className="text-light">
                <Card.Title>Gisaengchung</Card.Title>
                <Card.Text>2019</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ backgroundColor: "black" }} className="px-1">
              <Card.Img variant="top" src={cherno} />
              <Card.Body className="text-light">
                <Card.Title>Chernobly</Card.Title>
                <Card.Text>2019</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </CardGroup>
      </div>
    </>
  );
}

export default HomePage;
