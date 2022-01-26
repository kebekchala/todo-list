import React from 'react';
import { BiTrashAlt } from "react-icons/bi"
import { IconContext } from 'react-icons';

const Checkbox = ({ label, checked, setTodos, todos, id, action }) => {

    const setChecked = () => {
        const task = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, checked: !todo.checked }
            }
            return todo;
        });

        setTodos(task);
    };

    const deleteTodo = (id) => {
      const task = todos.filter(todo => todo.id !== id);
        setTodos(task);
    }
    return (
        <div className='todo__checkbox'>
            <div className='todo__checkbox__input'>
                <input type={'checkbox'} defaultChecked={checked} id='checkbox' onClick={() => setChecked(label)}></input>
                <label htmlFor='checkbox'>{label}</label>
            </div>
            {action === 'Completed' &&
                <div>
                    <IconContext.Provider value={{ color: '#BDBDBD' }} >
                        <BiTrashAlt onClick={()=> deleteTodo(id)}/>
                    </IconContext.Provider>

                </div>
            }
        </div>

    );
};

export default Checkbox;