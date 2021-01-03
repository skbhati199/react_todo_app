import {React,useState} from 'react'
import { Button, ListItem, ListItemText, Modal, Input } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { db } from './firebase'

function Todo(props) {
    const [open, setOpen] = useState(false);
    const [input,setInput] = useState('')

    
    const handleOpen = () => {
        setOpen(true)
    }

    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo : input
        },{merge:true})
        setOpen(false)
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={e => setOpen(false)}
            >
                <div style={{backgroundColor:"white"}}>
                    <h1>I'm a modal</h1>
                    <Input placeholder={props.todo.todo} value={input} onChange={e=> setInput(e.target.value)}></Input>
                    <Button color="primary" disabled={!input} onClick={e => updateTodo()}>Update</Button>
                </div>
            </Modal>
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary="🚀  Welcome to india" />
                <EditIcon onClick={e=>setOpen(true)} />
                <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
            </ListItem>

        </div>
    )
}

export default Todo
