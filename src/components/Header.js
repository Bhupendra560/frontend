import React, { Component } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

export default class Header extends Component {
    render() {
        const headerStyle = {
            display: 'flex',
            height: '50px',
            justifyContent: 'left',
            alignItems: 'center',
            backgroundColor: '#F9DBBB',
            color: '#332FD0',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        };

        const Search = styled('div')(({ theme }) => ({
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: 'white',
            '&:hover': {
              backgroundColor: 'white',
            },
            marginRight: 2,
            marginLeft: 40,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
              marginLeft: theme.spacing(70),
              width: 'auto',
            },
          }));

        const SearchIconWrapper = styled('div')(({ theme }) => ({
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }));
          
          const StyledInputBase = styled(InputBase)(({ theme }) => ({
            color: 'inherit',
            '& .MuiInputBase-input': {
              padding: theme.spacing(1, 1, 1, 0),
              paddingLeft: '48px',
              width: '350px',
            },
          }));


        return (
            <div>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar style={headerStyle}>
                            <b><h2>Visualization Dashboard</h2></b>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search'}}
                                />
                            </Search>
                        </Toolbar>
                    </AppBar>
                </Box>

            </div>


        )
    }
}
