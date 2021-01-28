import React, { FunctionComponent } from "react";
import styled from 'styled-components';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import InputOutlinedIcon from '@material-ui/icons/InputOutlined';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';

const StyledDrawer = styled(({ width, ...other }) => (
    <Drawer classes={{ paper: 'paper' }} {...other} />
  ))`
    width: 360px;
    flex-shrink: 0;
    & .paper {
        width: 360px;
    }
`;

const StyledDrawerDiv = styled.div`
    overflow: 'auto'
`;

const StyledRootMenuList = styled(List)`
    ${({ theme }) =>
        `width: 100%;
        max-width: 360px;
        background-color: ${theme.palette.background.paper};`
    }
`;

const StyledSubMenuListItem = styled(ListItem)`
    ${({ theme }) => `padding-left: ${theme.spacing(4)}px`}
`;


export interface MenuOption {
    mainOption: string;
    subOptions: string[];
}

interface MenuProps {
    options: MenuOption[];
    expandedOption: string;
    onToggleOption: (clickedOption: string) => void;
}

const Menu: FunctionComponent<MenuProps> = (props) => {
    const renderOption = (option: MenuOption) => {
        return (
            <React.Fragment key={option.mainOption}>
                <ListItem button onClick={() => {props.onToggleOption(option.mainOption)}}>
                    <ListItemIcon><AssessmentOutlinedIcon /></ListItemIcon>
                    <ListItemText><Typography variant="h6">{option.mainOption}</Typography></ListItemText>
                </ListItem>
                <Collapse in={props.expandedOption === option.mainOption} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {option.subOptions.map(subOption => (
                            <StyledSubMenuListItem button key={`${option.mainOption}_${subOption}`}>
                                <ListItemIcon><InputOutlinedIcon /></ListItemIcon>
                                <ListItemText><Typography variant="h6">{subOption}</Typography></ListItemText>
                            </StyledSubMenuListItem>))
                        }
                    </List>
                </Collapse>
            </React.Fragment>
        );
    }

    return(
        <StyledDrawer variant="permanent">
            <Toolbar />
            <StyledDrawerDiv>
                <StyledRootMenuList>
                    {props.options.map(option => (
                        renderOption(option)
                    ))}
                </StyledRootMenuList>
            </StyledDrawerDiv>
        </StyledDrawer>
    );

}

export default Menu;