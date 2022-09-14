import React, { useState, useEffect } from "react";
import BoutiqueCard from "./BoutiqueCard.js";
import axios from "axios";

function GetFive(props) {
  const [boutiqueList, setBoutiqueList] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [computing, setComputing] = useState(true);
  const { posLat } = props;
  const { posLon } = props;
  useEffect(() => {
    getAllBoutiques();
  }, []);

  const getAllBoutiques = () => {
    axios
      .get(
        `https://4149o8lffa.execute-api.eu-west-1.amazonaws.com/challenge/boutiques`
      )
      .then((res) => {
        const boutiques = res.data;
        console.log("boutiques are set");
        console.log(res.data);
        console.log(res.data[1]);
        console.log(res.data[1].name);
        setBoutiqueList({ boutiques });
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  //// =========////

  function distance(lat1, lon1, lat2, lon2) {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    return dist;
  }
  //// =========////

  // compute distance:
  /*   let poslat = 51.5072; //1.28210155945393;
  let poslng = 0.1276; //103.81722480263163; */
  let fiveList = [];
  let distBout = () => {
    console.log("in distbout", boutiqueList.boutiques);
    if (!loading) {
      for (var i = 0; i < boutiqueList.boutiques.length; i++) {
        boutiqueList.boutiques[i].dist = distance(
          posLat,
          posLon,
          boutiqueList.boutiques[i].location.lat,
          boutiqueList.boutiques[i].location.lon
        );
      }
      console.log("end of distbout", boutiqueList.boutiques);
      fiveList = boutiqueList.boutiques
        .sort((a, b) => {
          return a.dist - b.dist;
        })
        .slice(0, 5);
      console.log("5 closest", fiveList);
    }
  };

  distBout();

  const listItems = fiveList.map((d) => <li key={d.name}>{d.name}</li>);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h3>The 5 closest boutiques are: </h3>
      <div>{listItems}</div>
      <hr />
      <h3>List of all boutiques: </h3>
      <BoutiqueCard boutiqueData={boutiqueList} />
    </>
  );
}

export default GetFive;
