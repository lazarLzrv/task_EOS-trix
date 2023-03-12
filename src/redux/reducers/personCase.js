import {
    SET_WORKING_UNITS,
    SET_CASES,
    SET_ALL_PERSONS_INFO,
    SET_SELECTED_USER,
    SET_POPUP,
} from "../constants";

// personCase

const initialState = {
    workUnits: [],
    cases: [],
    allPersonsInfo: [],
    selectedUser: "",
    popUp: {
        open: false,
        data: {},
    },
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_WORKING_UNITS:
            return {
                ...state,
                workUnits: payload,
            };
        case SET_CASES:
            return {
                ...state,
                cases: payload,
            };
        case SET_ALL_PERSONS_INFO:
            return {
                ...state,
                allPersonsInfo: payload,
            };
        case SET_SELECTED_USER:
            return {
                ...state,
                selectedUser: payload,
            };
        case SET_POPUP:
            const { open, data } = payload;
            return {
                ...state,
                popUp: {
                    open,
                    data,
                },
            };

        default:
            return state;
    }
};

export default reducer;
