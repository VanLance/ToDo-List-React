import React from 'react'

export default function DataLoop({ todo, checkBox }) {
    function changeCheckBox() {
        checkBox(todo.id)
    }
    return (
        <div>
            <label>
                <input type='checkbox' checked={todo.isComplete} onChange={ changeCheckBox } />
                { todo.name }
            </label>
        </div>
    )
}
