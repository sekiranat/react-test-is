import { useState } from 'react';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import { Avatar } from '@mui/material';
import avatarImg from '../../assets/avatar.jpeg';

const CommentStyled = styled(Paper)(() => ({
    backgroundColor: '#fff',
    padding: '8px',
    margin: '10px 0',
    textAlign: 'left',
}));

export const Comment = ({name, comment, date}) => {
    const [count, setCount] = useState(0);
    
    return (
        <CommentStyled>
            <Grid container>
                <Grid item xs={12} sm={2}>
                    <Avatar
                        alt="Remy Sharp"
                        src={avatarImg}
                        sx={{ width: 140, height: 140 }}
                    />
                </Grid>
                <Grid item xs={12} sm={10}>
                    <Typography variant="h5">
                        {name}
                    </Typography>
                    <Typography variant="body1">
                        {comment}
                    </Typography>
                    <Typography variant="body2">
                        {date}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={8}>
                <ButtonGroup>
                    <Button
                        aria-label="reduce"
                        variant='transparent'
                        onClick={() => {
                            setCount(count - 1);
                        }}
                    >
                        <RemoveIcon fontSize="small" />
                    </Button>
                    <Box
                        sx={{
                            m: [0, 2, 0, 2]
                        }}>
                        {count}
                    </Box>
                    <Button
                        aria-label="increase"
                        variant='transparent'
                        onClick={() => {
                            setCount(count + 1);
                        }}
                    >
                        <AddIcon fontSize="small" />
                    </Button>
                </ButtonGroup>
            </Grid>
        </CommentStyled>
    );
}