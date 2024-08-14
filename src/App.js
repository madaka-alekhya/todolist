
import React from 'react';
import { useState } from 'react';
import './App.css'; // Make sure to import the App.css file.


//1. Create the button component
function CustomButton(props) {
  //changing color
  const {color, onClick, children} = props
if (color)
  return (
    <button
      style={{ background: color, color: "white" }}
      onClick={onClick}
    >
      {children}
    </button>
  );
  return <button onClick={onClick}>{props.children}</button>;
}



// Implement the User component separately
function User(props) {
  return (
    <div>
      <div className='todoboxcontainer'>
      
        <div className='Todobox'> {props.user.title}  
          <div className='todosub'>{props.user.body}
        <div className='deletebtn'>
        <CustomButton  color={'red'} onClick={()=>props.handleDelete(props.user.id)}>Delete</CustomButton>
        </div>
        <div className='donebtn'>
        <CustomButton  color={'green'} onClick={()=>props.handleDelete(props.user.id)}>Done</CustomButton>
        </div>
        
        </div>
        </div>
    </div>
    </div>
  );
}

const App = () => {
 
  
const [users, setUsers] = useState([
  {id: 0, title: "Learn React", body: "let's Learn React basics", isDone: true},
  {id: 1, title: "market", body: "go to market", isDone: false},
  {id: 2, title: "study", body: "study for 2hrs", isDone: false},
]);

const addUserHandler = () => {
  <div>Working...</div>

  const newTodo = {
    id: users.length + 1,
    title: title,
    body: body,
  };
//setuser will modify the list of users
  setUsers([...users, newTodo]);
};
//delete a user
const deleteUserHandler = (id) => {
  //deleting thw user with this id
  const newUserList = users.filter((user) => user.id !== id);
  setUsers(newUserList);
};


const [title, setTitle]=useState('');//state to use for user input

const [body,setBody]=useState('');

  return (
      <div className="app-container">
        <div>
          <p className='header'>My ToDo List</p>
        </div>

        <div className='container'>
        Title: <input value={title} id='title'
        // update the input value from the input event with the name
          onChange={(e) => setTitle(e.target.value)}
        />
        Content: <input value={body}  id='content'
        // Update the input value from the input event with the age
          onChange={(e) => setBody(e.target.value)}
        />
        <div id="addbtn">
        <CustomButton  color={'green'} onClick={addUserHandler}>Add</CustomButton> 
        </div>
        </div> 
        

        {users.map((user) => {
          
        return <User user={user} key={user.id} handleDelete={deleteUserHandler}/>;
            
      })}
      
    </div>
  );
};

export default App;