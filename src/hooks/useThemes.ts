import {useMemo} from "react";

export const useThemes = () => {
    return useMemo(() => {
        return [
            {value: 'light', text: 'Dark'},
            {value: 'dark', text: 'Light'}
        ]
    }, []);
}