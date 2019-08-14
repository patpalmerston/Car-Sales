import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions';

const AddedFeature = props => {
	const onSubmit = e => {
		e.preventDefault();
		props.removeFeature(props.feature); // YOU neeed PRRORRROPPPPSSS
	};
	return (
		<li>
			{/* Add an onClick to run a function to remove a feature */}
			<button className='button' onClick={onSubmit}>
				X
			</button>
			{props.feature.name}
		</li>
	);
};

export default connect(
	() => ({}),
	{ removeFeature }
)(AddedFeature);
