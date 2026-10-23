import { createContext, ReactElement, useContext } from 'react';

type Theme = 'light' | 'dark';

const ThemeContext = createContext<Theme | undefined>(undefined);

export function ThemeProvider(props: { theme: Theme; children: ReactElement }) {
    return (
        <ThemeContext.Provider value={props.theme}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): Theme {
    const theme = useContext(ThemeContext);
    if (theme === undefined) {
        throw new Error('useTheme должен применяться внутри ThemeProvider');
    }
    return theme;
}
