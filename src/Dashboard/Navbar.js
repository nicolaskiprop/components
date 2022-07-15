import { Box, IconButton, Stack } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Searchbar from './Searchbar';
import LanguagePopover from './LanguagePopover';


const Rootsyle = {}

const Toolbar = {}

const hum = {}

function Navbar() {
    return (
        <Box sx={Rootsyle}>
            <Toolbar sx={Toolbar}>
                {/* Mobile Screen humburger */}
                <IconButton sx={hum}>
                    <MenuIcon />
                </IconButton>

                <Searchbar />
                 
                <Box sx={{ flexGrow: 1}} />
                <Stack direction='row' alignItems='center' spacing={{xs: 0.5, sm: 1.5}}>
                    <LanguagePopover />
                </Stack>
            </Toolbar>
        </Box>
    )
}

export default Navbar