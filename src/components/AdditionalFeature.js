import React from 'react';
import { connect } from 'react-redux';
import { buyItem } from '../actions';

const AdditionalFeature = props => {
	const onBuyItem = e => {
		e.preventDefault();
		props.buyItem(props.feature);
	};

	return (
		<li>
			{/* Add an onClick that will let you add a feature to your car */}
			<button className='button' onClick={onBuyItem}>
				Add
			</button>
			{props.feature.name} (+{props.feature.price})
		</li>
	);
};

export default connect(
	() => ({}),
	{ buyItem }
)(AdditionalFeature);
