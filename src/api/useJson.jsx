const useJson = () => {
    const getWorkUnits = async () => {
        return fetch("getWorkUnits.json").then((res) => res.json());
    };
    const getPersonsInfo = async () => {
        return fetch("getPersonInfo.json").then((res) => res.json());
    };
    const getCaseInfo = async () => {
        return fetch("getCaseInfo.json").then((res) => res.json());
    };

    return {
        getWorkUnits,
        getPersonsInfo,
        getCaseInfo,
    };
};

export default useJson;
