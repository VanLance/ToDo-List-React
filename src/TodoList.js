import React from 'react'
import DataLoop from './DataLoop'

export default function TodoList({ todos }) {
    
    return (
       todos.map(todo => {
            return <DataLoop key= {todo} todo={todo} />
        })
    )
}
        
    
    