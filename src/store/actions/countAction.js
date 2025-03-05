import { countActions } from "../reducers/countReducer";

export const changeCount = (type) => (dispatch , getState) => {
    const {count} = getState();

    if(type === 'INCREASE') {
        dispatch(countActions.countCheange(count.number + 1))
    } else {
        dispatch(countActions.countCheange(count.number - 1))
    }
}