import React from 'react';
import useLocalStorage from './useLocalStorage';

function useDarkMode() {
   const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
   return [darkMode, setDarkMode];
}
export default useDarkMode;