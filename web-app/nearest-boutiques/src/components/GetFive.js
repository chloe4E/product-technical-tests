//https://ourcodeworld.com/articles/read/1019/how-to-find-nearest-locations-from-a-collection-of-coordinates-latitude-and-longitude-with-php-mysql
//https://www.codegrepper.com/code-examples/javascript/find+nearest+latitude+longitude+points+node+js
import React, { useState, useEffect } from "react";
import BoutiqueCard from "./BoutiqueCard.js";
import axios from "axios";

function GetFive() {
  const [boutiqueList, setBoutiqueList] = useState([]);
  const [loading, setLoading] = useState(true);
  /* const getAllBoutiques = () => {
    console.log("in axios call");
    axios
      .get(
        `https://4149o8lffa.execute-api.eu-west-1.amazonaws.com/challenge/boutiques`
      )
      .then((res) => {
        const boutiques = res.data;
        console.log("boutiques are set");
        setBoutiqueList({ boutiques });
      });
  }; */
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <BoutiqueCard boutiqueData={boutiqueList} />
    </>
  );
}

export default GetFive;
