import React, { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
    const preferDarkQuery = "(prefers-color-scheme: dark)";
    const [mode, setMode] = useState("");

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem("theme");

        const handleChange = () => {
            if (userPref) {
                let check = userPref === "dark" ? "dark" : "light";
                setMode(check);
                if (check === "dark") {
                    document.documentElement.classList.add("dark");
                    document.documentElement.classList.remove("light");
                } else {
                    document.documentElement.classList.add("light");
                    document.documentElement.classList.remove("dark");
                }
            } else {
                let check = mediaQuery.matches ? "dark" : "light";
                setMode(check);
                if (check === "dark") {
                    document.documentElement.classList.add("dark");
                    document.documentElement.classList.remove("light");
                } else {
                    document.documentElement.classList.add("light");
                    document.documentElement.classList.remove("dark");
                }
            }
        };

        handleChange(); // Initial call to set the theme based on user preference or media query

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [preferDarkQuery]);

    useEffect(() => {
        if (mode === "dark") {
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        } 
        if(mode==="light"){
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
        }
    }, [mode]);

    return [mode, setMode];
};

export default useThemeSwitcher;
