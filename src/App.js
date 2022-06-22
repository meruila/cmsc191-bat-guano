import {Badge} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

// COMPONENTS
import TaxoTable from "./table-components/TaxoTable";
import LevelDist from './level-distribution/LevelDist';
import Krona from './krona-tools/krona';
import Phy_Rank from './phy-tools/phylum_rank';

const format = require("./level-distribution/data_format.js");

function App() {

  const [data, setData] = useState([]);
  const [level, setLevel] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/get";
    const url2 = "http://localhost:5000/level";

    const getData = async () => {
      try{
        const response = await fetch(url);
        const data = await response.json();

        setData(data);

      }catch (err){
        console.log("Error", err)
      }
    };

    const getLevel = async () => {
      try{
        const response = await fetch(url2);
        const level = await response.json();
        setLevel(level);
        format.getData(level);

      }catch (err){
        console.log("Error", err)
      }
    };

    getData();
    getLevel();
  }, []);

  var c1data = data.filter(function(list){
    return list.Chamber === "C1";
  });
  
  var c2data = data.filter(function(list){
    return list.Chamber === "C2";
  });

  return (
    <div className="App">

        <h2><Badge bg="primary">Chamber 1</Badge> Taxonomic Analysis</h2>
        <TaxoTable data={c1data}/>

        <br/>

        <h2><Badge bg="primary">Chamber 2</Badge> Taxonomic Analysis</h2>
        <TaxoTable data={c2data}/>
        <LevelDist />

        <br/>

        <Krona/>

        <br/>
        <Phy_Rank/>


    </div>
  );
}

export default App;
