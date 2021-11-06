import React from 'react'

export default function dataLoop({ todo }) {
    return (
        <div>
            <input type='checkbox' checked={todo.isComplete} />
            { todo.name }

        </div>
    )
}
