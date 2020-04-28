import React from "react";
import { connect } from "react-redux";
import { removeFeature } from "../actions/actions";

const AddedFeature = (props) => {
  const remove = (e) => {
    e.preventDefault();
    props.remove(props.feature);
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={remove}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    features: state.car.features,
  };
};

export default connect(mapStateToProps, { removeFeature })(AddedFeature);
