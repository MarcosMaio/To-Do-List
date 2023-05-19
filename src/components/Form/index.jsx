import React, { useState } from 'react'
import './form.css'

const { v4: uuidv4 } = require('uuid');

export default function Form({addToDo}) {

    const [inputValue, setInputValue] = useState(""); //Estado responsavel por armazenar os dados do input ao botão ser clicado.
    
    const [inputvazio, setInputVazio] = useState(false); //Estado responsavel por aplicar um estilo com intuito de mostrar ao úsuario que o campo de input não pode ser enviado vazio.
    
    const [focusOut , setFocusOut] = useState(false); //Estado responsavel por limpar o input caso o úsuario perca o foco do campo.

    const ToDoCreate = (task) => { //criei uma const responsavel por criar um objeto para armazenar que vai possuir o nome e o id do item criado.
        const ToDoObejct = {
            name: task,
            id: uuidv4(),
        }

        addToDo(ToDoObejct) //aqui eu retorno os dados com o objeto criado para o setToDo.
    }

    function handleBlur() { //Function que limpa os dados do campo ao perder o foco.
        if(!focusOut) {
            setInputValue("")
        }
        setFocusOut(false)
    }
    


    function handleSubmit (e) { //Function que envia os dados do input para o toDoItem ser criado.
        e.preventDefault(); // evita que o form seja enviado ao clicar no botão.
        if (inputValue !== ""){
            ToDoCreate(inputValue); //pego os dados do input e passo para o objeto.
            setInputValue("") //limpo o input.
            setInputVazio(false) 
            
        } else {
            setInputVazio(true)
        }
    };
    
    return (
            
            <form onSubmit={handleSubmit} >
                <div className='containerForm'>
                    <div className='inputBox'>
                        <input
                        value={inputValue}
                        type='text'
                        onChange={(e) => {
                            if(e.target.value.length <= 60)
                        setInputValue(e.target.value)
                    }}
                    onBlur={handleBlur}
                    />
                        <span style={{color: inputvazio ? "red" : ""}} >~ Today I need to ~</span>
                        <i></i>
                </div>
                <button 
                    class="button" onMouseDown={() => {
                    setFocusOut(true) }}
                    type="submit"
                    ><span>Add</span></button>
                </div>
            </form>
    )
}
