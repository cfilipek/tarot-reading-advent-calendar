import React from 'react';

class Modal extends React.Component {
  render() {
    if (this.props.isOpen === false) return null;

    return (
      <div className="modal">
        <div className="modal__container">
          <div
            className="modal__header"
            style={{ backgroundColor: `${this.props.color}` }}
          ></div>
          <div
            className="modal__body"
            style={{ backgroundColor: `${this.props.color}` }}
          >
            {this.props.children}
          </div>
          <div
            className="modal__footer"
            style={{ backgroundColor: `${this.props.color}` }}
          >
            <a onClick={e => this.close(e)} className="modal__close-button">
              Close
            </a>
          </div>
        </div>
      </div>
    );
  }

  close(e) {
    e.preventDefault();

    if (this.props.onClose) {
      this.props.onClose();
    }
  }
}

export default Modal;
