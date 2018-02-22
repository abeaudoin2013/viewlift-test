import React, { Component } from 'react';
import _ from "lodash";
import Data from "../Data.json";
import GridItem from "./GridItem";

class Grid extends Component {
  constructor(){
    super();
    this.state = {};
    this.state.films = Data.films.film;
    console.log(Data);
  }

  render() {

    return (
      <div className="Grid">
        {_.map(this.state.films, (v, i) =>{
          return <GridItem key={"film-" + i} film={v}/>
        })}
      </div>
    );
  }
}

export default Grid;