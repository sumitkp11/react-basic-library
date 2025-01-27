

export const saveDataToLocalStorage = (state) => {
    try {
        
        // const jsonState = JSON.stringify(state);
        const reduxState = {
            books: [state]
        }
        localStorage.setItem('reduxState', JSON.stringify(reduxState));
    } catch (e) {
        console.log("[FAILED] saveDataToLocalStorage Function", e);
    }
}

export const loadLocalDataFromLocalStorage = () => {
    try {
        const serializedData = localStorage.getItem('reduxState');
        if (serializedData === null || serializedData === undefined) return {
            books: []
        };
        if (serializedData !== undefined) return JSON.parse(serializedData);
    } catch (e) {
        console.log("[FAILED] to load data from localStorage", e);
        return [];
    }
}