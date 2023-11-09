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
import avatarImg from './assets/avatar.jpeg';
import './App.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Grid
        container
        spacing={2}
        justifyContent="center"
      >
        <Grid item xs={12} sm={8}>
          <Item>
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
                  Hello world
                </Typography>
                <Typography variant="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a luctus mi, eu tincidunt est. Sed sodales, nisi sit amet ultrices porta, turpis metus sollicitudin metus, quis euismod nibh erat at risus. Donec at orci eu nibh ultricies ullamcorper et et ante. Vestibulum iaculis magna dapibus nunc egestas auctor sit amet a lacus. Integer cursus dignissim tortor, non pellentesque nisl condimentum sed. Etiam semper leo non tortor iaculis, nec tristique leo lacinia. Donec bibendum enim ac turpis tincidunt venenatis. Curabitur ut consectetur tellus, id tempus mauris. Pellentesque at ligula sed tellus cursus viverra. Mauris a tortor magna. Phasellus eu dictum tellus. In hac habitasse platea dictumst.
                </Typography>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={12} sm={8}>
          <ButtonGroup>
            <Button
              aria-label="reduce"
              onClick={() => {
                setCount(count - 1);
              }}
            >
              <RemoveIcon fontSize="small" />
            </Button>
            <Typography>
              {count}
            </Typography>
            <Button
              aria-label="increase"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </div >
  );
}
