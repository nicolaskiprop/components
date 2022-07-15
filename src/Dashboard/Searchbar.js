import { Box, Button, ClickAwayListener, IconButton, Input, InputAdornment, Slide } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';


const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const search = {
    top:0,
    left:0,
    zIndex:99,
    width:'100%',
    display:'flex',
    position:'absolute',
    alignItems:'center',
    height: APPBAR_MOBILE,
    backdropFilter:'blur(6px)',
    webkitBackdropFilter:'blur(6px)',

}

const input = {
    mr:1,
    fontWeight:"Bold",
    
}

function Searchbar() {
    const [isOpen, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen((prev) => !prev);
      };
    

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ClickAwayListener onClickAway={handleClose}>
            <Box>
                {!isOpen && (
                    <IconButton onClick={handleOpen}>
                        <SearchIcon sx={search}/>
                    </IconButton>
                )}

                <Slide direction='down' in={isOpen} mountOnEnter unmountOnExit>
                    <Box>
                        <Input
                        autoFocus
                        fullWidth
                        disableUnderline
                        placeholder='search...'
                        startAdornment={
                            <InputAdornment position='start'>
                                <SearchIcon sx={search}/>
                            </InputAdornment>
                        }
                        sx={input} />
                        <Button variant = 'contained' onClick={handleClose}> Search </Button>
                    </Box>
                </Slide>
            </Box>
        </ClickAwayListener>
    );
}

export default Searchbar