import React from 'react';

const Snowflake = props => {
  return (
    <p className="snowflake" id={`item${props.id}`} style={props.style}>
      *
    </p>
  );
};

class Snow extends React.Component {
  snow = () => {
    let animationDelay = '0s';
    let fontSize = '100px';
    let arr = Array.from(
      'Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!!'
    );

    arr = Array.from(Array(254).keys());

    return arr.map((el, i) => {
      animationDelay = `${(Math.random() * 16).toFixed(2)}s`;
      fontSize = `${Math.floor(Math.random() * 10) + 10}px`;
      let style = {
        animationDelay,
        fontSize,
      };
      return <Snowflake key={i} id={i} style={style} />;
    });
  };

  render() {
    return <div className="snow">{this.snow()}</div>;
  }
}

export default Snow;
