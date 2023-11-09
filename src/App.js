
import { useState } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Form } from './components/form';

import { Comment } from './components/comment';

export default function App() {
  const [commentList, setCommentList] = useState([{
    name: 'Игорь',
    text: 'Я игорь',
    date: '09-10-2023'
  }]);

  const renderComments = () => {
    return commentList.map(comment => {
      return (
        <Comment
          name={comment.name}
          comment={comment.text}
          date={comment.date}
        />
      )
    })
  }

  const addComment = (dataForm) => {
    const date = new Date().toLocaleDateString();
    const comment = {
      name: dataForm.name,
      text: dataForm.comment,
      date: date
    };
    const newCommentList = [...commentList, comment];
    setCommentList(newCommentList);
  }

  return (
    <div className="App">
      <Box sx={{ mt: 4 }}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
        >
          <Grid item xs={8}>
            <Box>
              {renderComments()}
            </Box>
            <Form onSubmit={(dataForm) => addComment(dataForm)} />
          </Grid>
        </Grid>
      </Box>
    </div >
  );
}
