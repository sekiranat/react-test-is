import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

/**
 * Уведомление об ошибке
 * @return  {React.ReactElement}
 */
export const ErrorText = styled(Typography)(() => ({
    color: 'red',
    textAlign: 'center',
}));