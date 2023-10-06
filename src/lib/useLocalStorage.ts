import { useState, useEffect } from "react";

const getSavedValue = (key: string, initialValue: any) => {
    try {
        const savedValue = localStorage.getItem(key)
        if (savedValue !== null) return savedValue;
    } catch (error) {
        console.log(error)
    }

    if (initialValue instanceof Function) return initialValue();
}

const useLocalStorage = (key: string, defaultValue: any) => {
    const [value, setValue] = useState(() => getSavedValue(key, defaultValue));

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
};

export default useLocalStorage;