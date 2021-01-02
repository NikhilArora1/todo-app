import * as constants from '../contants';

export default function filterReducer(state = constants.FILTERS.ALL, action) {
    switch (action.type) {
        case constants.SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}