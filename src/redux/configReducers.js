import { combineReducers } from "redux";

import personCase from "./reducers/personCase";

export default combineReducers({
    personCase: personCase,
});
