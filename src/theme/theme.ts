import { ThemeOptions } from '@mui/material';
import { createTheme } from '@mui/material/styles';
export const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#f50057',
        },
    },
};

export const mdTheme = createTheme(themeOptions);
