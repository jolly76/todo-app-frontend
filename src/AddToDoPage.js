import { useState } from 'react'
import { callCreateAPI, callGetAllAPI } from './backendApi'

function AddTodoPage(props) {
    let todo = props.todo;
    let setTodo = props.setTodo;

    let [formData, setFormData] = useState({
        todoTitle: '',
        dueDate: '',
        status: 'pending'
    })

    function handleChange(e) {
        let inputName = e.target.name;
        let inputValue = e.target.value;

        setFormData(prev => ({
            ...prev,
            [inputName]: inputValue
        }))
    }

    async function handleSubmit(e) {
        // preventDefault function prevent website from reload, because reloaded our state go into default values
        e.preventDefault();

        // stringify is function JSON file which take parameter as object/json and return string of it
        alert("form submitted, data = " + JSON.stringify(formData))

        let newTodo = {
            todoId: Date.now().toString(),
            todoTitle: formData.todoTitle,
            dueDate: formData.dueDate,
            status: 'pending'
        }
        await callCreateAPI('/create-todo', newTodo)

        // get our todo again
        const todoList = await callGetAllAPI('/read-todos');
        setTodo(todoList);
    }


    return (
        <div class="bg-pink-200 h-[400px] flex justify-center items-center">
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Todo Title</label>
                <input
                    type="text"
                    placeholder="Enter your todo title"
                    name="todoTitle"
                    value={formData.todoTitle}
                    onChange={(e) => handleChange(e)}
                />
                <br />

                <label>Due Date</label>
                <input
                    type="date"
                    placeholder="Enter due date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={(e) => handleChange(e)}
                />
                <br />

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default AddTodoPage; 