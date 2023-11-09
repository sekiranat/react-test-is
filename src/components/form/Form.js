import { useState } from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { validateEmail } from '../../helpers/validate';

import { ErrorText } from '../notifications';

export const Form = ({ onSubmit }) => {
    const [dataForm, setFormData] = useState({
        name: '',
        email: '',
        comment: ''
    });

    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const formIsCorrect = validateEmail(dataForm.email)
            && dataForm.name.length
            && dataForm.comment.length;

        if (formIsCorrect) {
            onSubmit(dataForm);
            setError('');
        } else {
            const textError = !validateEmail(dataForm.email) ? 'Email заполнен неккоректно' : 'Заполните все поля';
            setError(textError);
        }
    };

    const handleOnChangeInput = (target) => {
        const { name, value } = target;

        const newDataForm = {
            ...dataForm,
            [name]: value
        };
        setFormData(newDataForm);
    }

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
                        Оставить комментарий
                    </Typography>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Имя"
                        name="name"
                        value={dataForm.name}
                        autoFocus
                        onChange={(e) => {
                            handleOnChangeInput(e.target);
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        value={dataForm.email}
                        autoFocus
                        onChange={(e) => {
                            handleOnChangeInput(e.target);
                        }}
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
                        value={dataForm.comment}
                        onChange={(e) => {
                            handleOnChangeInput(e.target);
                        }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Отправить
                    </Button>
                    <ErrorText>
                        {error}
                    </ErrorText>
                </Box>
            </Box>
        </Container>
    );
}