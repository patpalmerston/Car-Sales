import { REMOVE_FEATURE, ADD_FEATURE, UPDATE_FEATURE } from './types';

export const removeFeature = id => {
	// dispatch an action here to remove an item
	return {
		type: REMOVE_FEATURE,
		payload: id
	};
};

export const buyItem = id => {
	// dipsatch an action here to add an item
	return {
		type: ADD_FEATURE,
		payload: id
	};
};
