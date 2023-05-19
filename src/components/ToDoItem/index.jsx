import React, { useState } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import './ToDoItem.css'
import trash from './borracha-dupla-face.png'
import EditToDoItem from 'components/EditToDoItem'

export default function ToDoItem({ toDo, deleteToDo, editingToDo }) {
  const [taskCompleted, setTaskCompleted] = useState(false)
  const isChecked = toDo.checked || taskCompleted;

  return (
    <div className="containerList">
        <ListGroup>
        <ListGroupItem
        className='ListGroupItem'
          style={{
            borderColor: "#ffffff",
            backgroundColor:"#e8e5e5",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              className="form-check-input me-1"
              type="checkbox"
              value=""
              checked={toDo.checked}
              style={{ 
                cursor: "pointer", 
                backgroundColor: "#494b49", 
                borderRadius: "20px", 
                boxShadow: "0 0 12px 0 rgb(220, 218, 218)", 
                border: "1px solid #494a4b",
                }}
                onClick={() => {
                  setTaskCompleted(!taskCompleted)
                }}
            />
            <span style={{ 
              flex: 1, 
              marginLeft: "0.3em",
              marginRight: "1.5em",
              textDecoration: isChecked ? "line-through" : "none", 
              color: isChecked ?  "#ffffff" : "", 
              fontWeight: isChecked ?  "bold" : "", 
              textShadow: isChecked ?  "1px 1px 2px rgba(26, 25, 25, 0.5) " : "" , 
              letterSpacing: isChecked ?  "1px" : ""}} 
              >{toDo.name}
            </span>
            <div>
              <EditToDoItem editingToDo={editingToDo} toDo={toDo} />
            </div>
            <div>
              <img
                className="trashIcon"
                onClick={() => {
                  deleteToDo(toDo.id);
                }}
                src={trash}
                alt=""
                style={{
                  cursor: "pointer",
                  marginLeft: "0.8em",
                  marginRight: "0.3em",
                }}
              />
            </div>
          </div>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}