
import { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Form } from './components/form';
import { getTimePassed } from './helpers/convertTime';

import { Comment } from './components/comment';

export default function App() {
  // сохраняем в localStorage
  const commentListStorage = JSON.parse(localStorage.getItem('commentList'));
  const [commentList, setCommentList] = useState(commentListStorage ? commentListStorage : {});

  useEffect(() => {
    localStorage.setItem('commentList', JSON.stringify(commentList));
  }, [commentList]);

  /**
 * Добавляет новый комментарий в стейт
 * @return  {void}
 */
  const addComment = (dataForm) => {
    const date = new Date();
    const id = Object.keys(commentList).pop() ? Object.keys(commentList).pop() + 1 : 1; // увеличиваем последний id на 1
    const comment = {
      id,
      name: dataForm.name,
      text: dataForm.comment,
      date,
      rating: 0
    };
    const newCommentList = { ...commentList, [id]: comment };
    setCommentList(newCommentList);
  }

  /**
 * Меняет рейтинг комментария
 * @param   {number} id id комментария
 * @param   {number} step шаг увеличения или уменьшения рейтинга
 * @return  {void}
 */
  const changeRating = (id, step) => {
    const commentListNew = { ...commentList }; // копируем объект
    commentListNew[id].rating = commentListNew[id].rating + step;

    setCommentList(commentListNew);
  }

  /**
 * Рендерит комментарии
 * @return  {React.ReactElement}
 */
  const renderComments = () => {
    return Object.values(commentList).map(comment => {
      return (
        <Comment
          id={comment.id}
          name={comment.name}
          comment={comment.text}
          date={getTimePassed(comment.date)}
          hide={comment.hide}
          rating={comment.rating}
          onChangeRating={(id, rating) => changeRating(id, rating)}
        />
      )
    })
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
