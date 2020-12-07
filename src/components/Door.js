import React from 'react';

class Door extends React.Component {
  render() {
    const { image, index, isOpen, onClick, color } = this.props;
    const today = new Date().getDate();
    return (
      <section
        style={{
          backgroundColor: color,
        }}
        onClick={index <= today ? onClick : null}
        className={isOpen ? 'door door--open' : 'door'}
      >
        {isOpen ? null : `${index}`}
        <img
          className={!isOpen ? 'door__image' : 'door__image door__image--fade'}
          src={image}
        />
      </section>
    );
  }
}

export default Door;
