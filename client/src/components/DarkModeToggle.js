import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import styled from "@emotion/styled";

const ToggleContainer = styled.div`
    background: papayawhip;
    border-radius: 50px;
    border: 1px solid black;
    height: 20px;
    position: relative;
    width: 40px;
`;

const Toggle = styled.div`
    background: #f68819;
    border-radius: 50px;
    height: 18px;
    left: ${props => (props.darkMode ? "18px" : "0px")};
    position: absolute;
    transition: 0.2s;
    width: 20px;
`;

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);

    const toggleMode = e => {
        e.preventDefault();
        console.log("in toggleMode method");
        setDarkMode(!darkMode);
    };

    return (
        <ToggleContainer>
            <Toggle onClick={toggleMode} darkMode={darkMode} />
        </ToggleContainer>
    );
};

export default DarkModeToggle;
