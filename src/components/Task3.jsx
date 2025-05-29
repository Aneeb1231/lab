import React from 'react'

const Task3 = () => {
  const items = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes']

  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Task3 