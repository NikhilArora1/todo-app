import './AddTodo.css';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
        },
        "& .MuiInputLabel-outlined": {
            color: "white"
        },
        "& .MuiOutlinedInput-input": {
            color: "white"
        }
    }
});

export default function AddTodo(props) {
    const [name, setName] = useState('');
    const classes = useStyles();
    const handleChange = (event) => {
        setName(event.target.value);
    };
    const keyPress = (e) => {
        if (e.keyCode === 13 && e.target.value) {
            props.onAdd(e.target.value);
            setName('');
        }
    }
    return (
        <TextField
            id="outlined-basic"
            label="New Item"
            variant="outlined"
            value={name}
            onChange={handleChange}
            onKeyDown={keyPress}
            classes={{
                root: classes.root
            }} />
    );
}