import React from "react";
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import Canvas from "./canvas";

const StyledMain = styled.main`
    ${({ theme }) => `
        flex-grow: 1;
        padding: ${theme.spacing(3)}px;
    `}
`;

const StyledForm = styled.form`
    ${({ theme }) => `
        & > * {
            display: block;
            margin: ${theme.spacing(1)}px;
            width: '25ch';
        }
    `}
`;

const StyledPaper = styled(Paper)`
    ${({ theme }) => `
        display: flex;
        margin: ${theme.spacing(1)}px;
        width: ${theme.spacing(50)}px;
        height: ${theme.spacing(50)}px;
    `}
`;

const Main = () => {
    return (
        <StyledMain>
            <Toolbar />
            <StyledForm>
                <TextField required id="txtSharePrice" label="Share Price" type="number" variant="outlined"/>
                <TextField required id="txtStrikePrice" label="Strike Price" type="number" variant="outlined"/>
                <TextField required id="dateExp" label="Exp. Date" type="date" variant="outlined"
                    InputLabelProps={{ shrink: true }}/>
            </StyledForm>
            <StyledPaper variant="outlined" square>
                <Canvas />
            </StyledPaper>
        </StyledMain>
    );
}

export default Main;
