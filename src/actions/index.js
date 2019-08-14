import { REMOVE_FEATURE, ADD_FEATURE, UPDATE_FEATURE } from './types';
import { dispatch } from '../../../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/rxjs/internal/observable/range';

const removeFeature = item => {
  // dispatch an action here to remove an item
  dispatch({
    type: REMOVE_FEATURE,
    payload: item.id
  })
};

const buyItem = item => {
  // dipsatch an action here to add an item
  dispatch({
    type: ADD_FEATURE,
    payload: item.id
  })
};
