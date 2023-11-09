
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Form } from './components/form';

import { Comment } from './components/comment';

export default function App() {
  return (
    <div className="App">
      <Box sx={{ mt: 4 }}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
        >
          <Grid item xs={8}>
            <Comment />
            <Form />
          </Grid>
        </Grid>
      </Box>
    </div >
  );
}
