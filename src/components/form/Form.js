import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export const Form = ({ onSubmit }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const dataForm = {
            name: data.get('name'),
            comment: data.get('comment'),
        };

        onSubmit(dataForm)
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <Typography align="center" variant="h5">
                        Оставьте комментарий
                    </Typography>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Имя"
                        name="name"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="comment"
                        label="Комментарий"
                        id="comment"
                        rows={3}
                        multiline
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Отправить
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}