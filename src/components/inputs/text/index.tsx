import React, { ReactElement, useEffect, useState } from 'react'
import { TextField } from '@mui/material';

type InputTypes = 'text' | 'number' | 'password' | 'email' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local' | 'color' | 'range';

interface OnChangeResponse {
    value: string;
    name: string;
}

interface Props {
    value?: string;
    label?: string;
    error?: string;
    type?: InputTypes;
    name?: string;
    onChange?: (response: OnChangeResponse) => void;
}

export const InputText = (props: Props): ReactElement => {
    const [value, setValue] = useState<string>('')
    const [name, setName] = useState<string>('default-input-name')

    useEffect(() => {
        if (props.value) setValue(props.value);
        if (props.name) setName(props.name);
    }, []);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value);
        if (props.onChange) props.onChange({ value: event.target.value, name });
    }

    return (
        <TextField fullWidth type={props.type} name={name} value={value} label={props.label} variant='outlined' size='small' onChange={handleOnChange} />
    );
};
