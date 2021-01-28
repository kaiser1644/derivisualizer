import React, { useState } from "react";
import styled, { ThemeProvider } from 'styled-components';
import {} from 'styled-components/cssprop';
import {
    createMuiTheme,
    ThemeProvider as MuiThemeProvider,
    StylesProvider
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { blueGrey } from '@material-ui/core/colors';
import ShowChartOutlinedIcon from '@material-ui/icons/ShowChartOutlined';

import Menu, { MenuOption } from "./components/menu";
import Main from "./components/main";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blueGrey[200]
        },
        secondary: {
            main: blueGrey[100]
        },
        type: "dark"
    },
    typography: {
        fontFamily: [
            '"Lato"',
            'sans-serif'
        ].join(',')
    }
});

const StyledAppContainer = styled.div`
    display: flex;
`;

const StyledAppTitle = styled(Typography)`
    flex-grow: 1
`;

const StyledAppBar = styled(AppBar)`
    ${({ theme }) => `z-index: ${theme.zIndex.drawer+1}`}
`;

const StyledGitLogo = styled.img`
    vertical-align: middle;
    margin-right: 5px;
`;

const StyledAppLogo = styled(ShowChartOutlinedIcon)`
    margin-right: 10px;
`;

const MENU_OPTIONS: MenuOption[] = [
    {
        mainOption: "Basic",
        subOptions: ["Covered Call"]
    },
    {
        mainOption: "Spreads",
        subOptions: []
    },
    {
        mainOption: "Advanced",
        subOptions: [],
    },
    {
        mainOption: "Custom",
        subOptions: []
    }
];

const App = () => {

    const [expandedMenuOption, setExpandedMenuOption]: [string, (para: string)=>void] = useState(null);

    return (
        <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
            <StylesProvider injectFirst>
            <StyledAppContainer>
            <CssBaseline>
                <StyledAppBar position="fixed">
                    <Toolbar>
                        <StyledAppLogo fontSize="large"/>
                        <StyledAppTitle variant="h4">
                            Derivatives Visualizer
                        </StyledAppTitle>
                        <Link href="https://github.com/kaiser1644/derivisualizer" color="inherit">
                            <StyledGitLogo src="./dist/github.png"></StyledGitLogo>
                            <Typography variant="overline">Source</Typography>
                        </Link>
                    </Toolbar>
                </StyledAppBar>
                <Menu
                    expandedOption={expandedMenuOption}
                    options={MENU_OPTIONS}
                    onToggleOption={(clickedMenuOption) => {
                        console.log(clickedMenuOption);
                        setExpandedMenuOption(clickedMenuOption === expandedMenuOption ? null : clickedMenuOption); 
                    }}
                />
                <Main />
            </CssBaseline>
            </StyledAppContainer>
            </StylesProvider>
        </ThemeProvider>
        </MuiThemeProvider>
    );
}

export default App;
