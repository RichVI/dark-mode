import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

const useDarkMode = (key, initialValue) =>{

    const [darkModeOn, setDarkModeOn] = useLocalStorage(key, initialValue);

    const toggleDarkMode = event => {
        event.preventDefault();
        return (darkModeOn) ? setDarkModeOn(false) : setDarkModeOn(true);
    }

    useEffect(()=>{
        const body = document.querySelector("body");
        (darkModeOn) ? body.className="dark-mode" : body.className="";
    },[darkModeOn])

    return [darkModeOn, setDarkModeOn, toggleDarkMode]
}

export {useDarkMode};