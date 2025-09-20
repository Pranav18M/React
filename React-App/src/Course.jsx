import PropTypes from 'prop-types';

function Course(props) {
  if (props.show === true) {
    return (
      <div className="card">
        <img src={props.image} alt="" className="car" />
        <h4>{props.name}</h4>
        <p>{props.price}</p>
        <span>{props.rate}</span>
      </div>
    );
  } else {
    return <div className="card">Course is not available</div>;
  }
}

Course.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  rate: PropTypes.number,
  show: PropTypes.bool,
  image: PropTypes.string,
};



export default Course;
