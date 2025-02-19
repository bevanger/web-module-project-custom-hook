import { useState } from 'react';

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    function setValue(value) {
        window.localStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value);
    }
    return[storedValue, setValue]; 
};
export default useLocalStorage;