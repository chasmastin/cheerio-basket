import React, { PropTypes } from 'react';

const propTypes = {
  view: PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  itempic: PropTypes.string,
  sprite1: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
};

class RobotMaster extends React.Component {
  render() {
    const { view, id, name, itempic, sprite1, description, price } = this.props;
    const listClass = `list-item card ${view}`;
    const style = { zIndex: 100 - this.props.index};

    return (
      <li id={id} className={listClass} style={style}>
        <span>
          <div className="robot-mug">
            <h1 className="robot-name">{name}</h1>
            <img src={itempic}/>
                                               
          </div>          
          <div className="robot-info">            
            <h2 className="robot-description">Description</h2>
            <p>    </p>
            <div>{description}</div>            
            
            
          </div>
          <div className="robot-other">
            <p>    </p>
            <h2 className="robot-price">Price ${price}</h2>   
          </div>
          <button onClick={this.props.clickHandler}>
            <i className="fa fa-close"/>
          </button>
          <div className="clearfix"/>
        </span>
      </li>
    );
  }
}

RobotMaster.PropTypes = propTypes;

export default RobotMaster;
