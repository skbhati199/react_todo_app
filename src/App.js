import './App.css';
import { useState,useEffect } from 'react';
import { Button, FormControl, Input, InputLabel, List } from '@material-ui/core';
import Todo from './Todo';
import { db,firebase } from './firebase';


function App() {
  const [todos,setTodos] = useState([]);
  const [input,setInput] = useState('');
  console.log('value ',input)

  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data().todo))
      setTodos(snapshot.docs.map(doc => ({id:doc.id,todo:doc.data().todo})))
    })
  }, [])

  const addTodo = (e) => {
    e.preventDefault()
    // console.log("working fine");
    db.collection('todos').add({
      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setTodos([...todos,input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Dream Programming 🚀!</h1>
      <br/>
      <form>
        {/* <input value={input} onChange={event => setInput(event.target.value)}/> */}
       
       <FormControl>
         <InputLabel> 😄 Write a TODO</InputLabel>
         <Input value={input} onChange={event => setInput(event.target.value)}></Input>
       </FormControl>

        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
        Add Todo
        </Button>

      </form>
     

      <List>
        {todos.map(todo => (
          <Todo todo={todo}/>
          
        ))}
        
      </List>
    </div>
  );
}

export default App;
