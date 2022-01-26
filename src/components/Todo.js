import React, { useState } from 'react';
import Button from './Button';
import Checkbox from './Checkbox';
import { nanoid } from "nanoid";
import { BiTrashAlt } from "react-icons/bi"
import { IconContext } from 'react-icons';


const namesButton = ['All', 'Active', 'Completed'];
const initialValue = {
    id: 1,
    name: 'Coding',
    checked: false,
}

const Todo = () => {

    const [action, setActions] = useState('');
    const [todos, setTodos] = useState([initialValue]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setTodos([
            ...todos
            , {
                id: nanoid(),
                name: event.target[0].value,
                checked: false,
            }]);
        event.target[0].value = '';
    }


    return (
        <div className='todo__container'>
            <div className='todo'>
                <div className='todo__buttons'>
                    {namesButton.map(name => <Button key={name} action={setActions} label={name} type={'action'} />)}
                </div>
            </div>
            <div className='todo__form'>
                {action === 'Completed' ?
                    '' :
                    <form onSubmit={handleSubmit}>
                        <input className='todo__input' placeholder={'add details'}></input>
                        <Button label={'Add'} type={'submit'} />
                    </form>
                }

                {action === 'All' && todos.map((todo, index) =>
                    <Checkbox
                        setTodos={setTodos}
                        todos={todos}
                        key={todo.id}
                        id={todo.id}
                        label={todo.name}
                        checked={todo.checked}
                    />)}
                {action === 'Active' && todos.map((todo, index) => {
                    return todo.checked === false ?
                        <Checkbox
                            key={todo.id}
                            id={todo.id}
                            setTodos={setTodos}
                            todos={todos}
                            label={todo.name}
                            checked={todo.checked}
                        /> : ''
                })}
                {action === 'Completed' && todos.map((todo, index) => {
                    return todo.checked ?
                        <Checkbox
                            setTodos={setTodos}
                            todos={todos}
                            key={todo.id}
                            id={todo.id}
                            label={todo.name}
                            checked={todo.checked}
                            action={action}
                        /> : ''
                })}
            </div>
            {action === 'Completed' &&
                <div className='todo__delete'>
                    <div className='todo__button__delete' onClick={() => console.log(setTodos([]))}>
                        <IconContext.Provider value={{ color: '#fff' }} >
                            <BiTrashAlt />
                        </IconContext.Provider>
                        <span>delete all</span>
                    </div>
                </div>
            }
        </div>
    );
}

export default Todo;