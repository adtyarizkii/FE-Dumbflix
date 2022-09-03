import React from "react";
import { Link } from "react-router-dom";
import bgImg from "../assets/bglacasa.png";
import img from "../assets/lacasa.png";
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
// import mov from "../dummyData/movies.json";
// import ts from "../dummyData/tvseries.json";

function TvseriesPage() {
  const title = "Tv Shows";
  document.title = "Dumbflix | " + title;
  // console.log(mov.title);
  //   console.log(ts);

  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(104, 106, 116, 0), rgba(0, 0, 0, 0.99)), url(${bgImg})`,
          height: "110vh",
          width: "100%",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="ctnm">
          <div className="container p-5">
            <img src={img} alt="" />
            <p
              className="mt-3"
              style={{
                textAlign: "justify",
                width: "43%",
              }}
            >
              Money Heist is a crime drama on Netflix - originally called La
              Casa de Papel. Money Heist season 3 has just been released by the
              streaming service. The plot reads: "Eight thieves take hostages
              and lock themselves in the Royal Mint of Spain as a criminal
              mastermind manipulates the police to carry out his plan."
            </p>
            <div className="d-flex">
              <p style={{ padding: "3px" }}>2017 </p>
              <p className="ms-3 tvseries"> TV Series</p>
            </div>
            <button className="btn-watch mt-2">WATCH NOW !</button>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "black" }}>
        <h4 className="text-white ms-3">Tv Series</h4>
        <div className="containerCard">
          <Link to="/detailFilm">
            <div className="box mb-5">
              <div className="imgBx">
                <img src={tw} alt="" />
              </div>
              <div className="content">
                <div>
                  <h2>The Witcher</h2>
                  <p>2019</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/detailFilm">
            <div className="box mb-5">
              <div className="imgBx">
                <img src={ptm} alt="" />
              </div>
              <div className="content">
                <div>
                  <h2>Persona 3 The Movie</h2>
                  <p>2016</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/detailFilm">
            <div className="box mb-5">
              <div className="imgBx">
                <img src={got} alt="" />
              </div>
              <div className="content">
                <div>
                  <h2>Game Of Thrones</h2>
                  <p>2011</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/detailFilm">
            <div className="box mb-5">
              <div className="imgBx">
                <img src={mh} alt="" />
              </div>
              <div className="content">
                <div>
                  <h2>Money Heist</h2>
                  <p>2017</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/detailFilm">
            <div className="box mb-5">
              <div className="imgBx">
                <img src={touch} alt="" />
              </div>
              <div className="content">
                <div>
                  <h2>Touch</h2>
                  <p>2020</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/detailFilm">
            <div className="box mb-5">
              <div className="imgBx">
                <img src={arrow} alt="" />
              </div>
              <div className="content">
                <div>
                  <h2>Arrow</h2>
                  <p>2012</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="containerCard">
          <Link to="/detailFilm">
            <div className="box mb-5">
              <div className="imgBx">
                <img src={tgf} alt="" />
              </div>
              <div className="content">
                <div>
                  <h2>The GodFather</h2>
                  <p>1972</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/detailFilm">
            <div className="box mb-5">
              <div className="imgBx">
                <img src={tdk} alt="" />
              </div>
              <div className="content">
                <div>
                  <h2>The Dark Knight</h2>
                  <p>2008</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/detailFilm">
            <div className="box mb-5">
              <div className="imgBx">
                <img src={endgame} alt="" />
              </div>
              <div className="content">
                <div>
                  <h2>Avengers: Endgame</h2>
                  <p>2019</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/detailFilm">
            <div className="box mb-5">
              <div className="imgBx">
                <img src={joker} alt="" />
              </div>
              <div className="content">
                <div>
                  <h2>Joker</h2>
                  <p>2019</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/detailFilm">
            <div className="box mb-5">
              <div className="imgBx">
                <img src={gisae} alt="" />
              </div>
              <div className="content">
                <div>
                  <h2>Gisaengchung</h2>
                  <p>2019</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/detailFilm">
            <div className="box mb-5">
              <div className="imgBx">
                <img src={cherno} alt="" />
              </div>
              <div className="content">
                <div>
                  <h2>Chernobly</h2>
                  <p>2019</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default TvseriesPage;
