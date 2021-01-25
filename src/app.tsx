import * as React from "react";
import {
    createMuiTheme,
    ThemeProvider,
} from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { blue, indigo } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: blue[900]
        },
        primary: {
            main: indigo[700]
        },
        type: "dark"
    },
    typography: {
    // Use the system font instead of the default Roboto font.
        fontFamily: [
            '"Lato"',
            'sans-serif'
        ].join(',')
    }
});

class App extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography>
                            Derivatives Visualization
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        );
    }
}

export default App;
