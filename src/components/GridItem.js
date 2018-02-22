import React, { Component } from 'react';

class GridItem extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.state.film = props.film;
  }

  render() {

    return (
      <div className="GridItem">
        <div className="container">
          <img src={this.state.film.images.image[0].src} width={"100%"} alt=""/>
          <h2 className="title">{this.state.film.title}</h2>
        </div>
      </div>
    );
  }
}

export default GridItem;