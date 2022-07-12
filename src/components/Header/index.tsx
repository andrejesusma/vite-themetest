import React, {useContext} from "react";
import Switch from "react-switch"
import { ThemeContext } from "styled-components";

import { Container } from "./styles";

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({toggleTheme}) => {
    const {colors, title} = useContext(ThemeContext)
    return (
        <Container>
            Hello world!
            <Switch 
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={colors.primary}
                onColor={colors.secondary}
            />
        </Container>
    );
};

export default Header;