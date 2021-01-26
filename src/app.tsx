import * as React from "react";
import styled, { ThemeProvider } from 'styled-components';
import {} from 'styled-components/cssprop';
import {
    createMuiTheme,
    ThemeProvider as MuiThemeProvider
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import { blueGrey } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blueGrey[900]
        },
        /*
        secondary: {
            main: blue[900]
        },
        */
        type: "dark"
    },
    typography: {
        fontFamily: [
            '"Lato"',
            'sans-serif'
        ].join(',')
    }
});

const StyledAppBar = styled(AppBar)`
    ${({ theme }) => `z-index: ${theme.zIndex.drawer+1}`}
`;

const StyledDrawer = styled(({ width, ...other }) => (
    <Drawer classes={{ paper: 'paper' }} {...other} />
  ))`
    width: 240,
    flexShrink: 0,
    & .paper {
        width: 240
    }
`;

const StyledDrawerDiv = styled.div`
    overflow: 'auto'
`;

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <StyledAppBar position="fixed">
                        <Toolbar>
                            <Typography variant="h4">
                                Derivatives Visualizer
                            </Typography>
                        </Toolbar>
                    </StyledAppBar>
                    <StyledDrawer variant="permanent">
                        <Toolbar />
                        <StyledDrawerDiv>
                            <List>
                                {['Basic', 'Spreads', 'Advanced', 'Custom'].map(text => (
                                <ListItem button key={text}>
                                    <ListItemIcon><AssessmentOutlinedIcon /></ListItemIcon>
                                    <ListItemText><Typography variant="h6">{text}</Typography></ListItemText>
                                </ListItem>
                                ))}
                            </List>
                        </StyledDrawerDiv>
                    </StyledDrawer>
                </CssBaseline>
            </ThemeProvider>
            </MuiThemeProvider>
        );
    }
}

export default App;
