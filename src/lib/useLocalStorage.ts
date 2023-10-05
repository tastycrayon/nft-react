import { useState, useEffect } from "react";

const getSavedValue = (key: string, initialValue: any) => {
    const v = localStorage.getItem(key)
    const savedValue = v ? JSON.parse(v) : null;
    if (savedValue) return savedValue;

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