import useLocalStorage from "./useLocalStorage";

//3. "darkMode" = key, false = initialValue
//4. call useLocalStorage hook (function), pass in "darkMode", and false 

const useDarkMode = (key, initialValue) => { 
   const [darkMode, setDarkMode] = useLocalStorage(key, initialValue); //16. useLocalStorage(key, initialValue) === [storedValue, setValue] from our useLocalStorage function return. const [darkMode, setDarkMode] === [storedValue, setValue]
   return[darkMode, setDarkMode]; //17. darkMode is either equal to (item, or false) setDarkMode is a function used to update darkMode which gets sent back to index.js
}
export default useDarkMode;