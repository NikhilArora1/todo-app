import './AddTodo.css';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import * as todoActions from '../redux/actions/todoActions';

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

function AddTodo(props) {
    const [name, setName] = useState('');
    const classes = useStyles();

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handlesubmit = (e) => {
        if (e.keyCode === 13 && e.target.value) {
            props.addTodo(e.target.value);
            setName('');
        }
    }
    return (
        <div>
            <TextField
                id="outlined-basic"
                label="New Item"
                variant="outlined"
                value={name}
                onChange={handleChange}
                onKeyDown={handlesubmit}
                classes={{
                    root: classes.root
                }} />
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: todo => dispatch(todoActions.addTodo(todo))
    }
}

export default connect(null, mapDispatchToProps)(AddTodo);