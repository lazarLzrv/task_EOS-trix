import {
    SET_WORKING_UNITS,
    SET_CASES,
    SET_ALL_PERSONS_INFO,
    SET_SELECTED_USER,
    SET_POPUP,
} from "../constants";

import { useDispatch } from "react-redux";

const Actions = () => {
    const dispatch = useDispatch();

    const setWorkUnits = (id) => {
        dispatch({
            type: SET_WORKING_UNITS,
            payload: id,
        });
    };
    const setCases = (id) => {
        dispatch({
            type: SET_CASES,
            payload: id,
        });
    };
    const setAllPersonsInfo = (id) => {
        dispatch({
            type: SET_ALL_PERSONS_INFO,
            payload: id,
        });
    };
    const setSelectedUser = (id) => {
        dispatch({
            type: SET_SELECTED_USER,
            payload: id,
        });
    };
    const setPopup = (open, data = {}) => {
        dispatch({
            type: SET_POPUP,
            payload: {
                open,
                data,
            },
        });
    };

    return {
        setWorkUnits,
        setCases,
        setAllPersonsInfo,
        setSelectedUser,
        setPopup,
    };
};

export default Actions;
