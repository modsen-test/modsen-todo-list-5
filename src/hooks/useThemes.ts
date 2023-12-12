import {useMemo} from "react";

export const useThemes = () => {
    return useMemo(() => {
        return [
            {value: 'light', label: 'Dark'},
            {value: 'dark', label: 'Light'}
        ]
    }, []);
}