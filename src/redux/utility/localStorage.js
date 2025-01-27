

export const saveDataToLocalStorage = (state) => {
    try {
        const jsonState = JSON.stringify(state);
        localStorage.setItem('reduxState', jsonState);
    } catch (e) {
        console.log("[FAILED] saveDataToLocalStorage Function", e);
    }
}

export const loadLocalDataFromLocalStorage = () => {
    try {
        const serializedData = localStorage.getItem('reduxState');
        if (serializedData == null || serializedData == undefined) return [];
        if (serializedData !== undefined) return JSON.parse(serializedData);
    } catch (e) {
        console.log("[FAILED] to load data from localStorage", e);
        return [];
    }
}