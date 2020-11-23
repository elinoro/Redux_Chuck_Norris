import React from 'react';

class Box extends React.Component{
  render(){
    return(
      <div>
        <button onClick = {() => this.props.handleClick()}>Get Joke</button>
        <p>{this.props.joke}</p>
      </div>
    )
  }
}

export default Box;