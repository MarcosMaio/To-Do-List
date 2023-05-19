import { Container, Paper} from '@mui/material'
import Form from 'components/Form'
import Header from 'components/Header'
import ToDoItem from 'components/ToDoItem'
import React, { useState } from 'react'
import './Home.css'



export default function Home() {
    
    const [toDos, setToDos] = useState([ // estado que irá armazenar o array com cada item toDo.
    { 
        name:"Create a To-Do List (:",
        id: 1,
        checked: true
    },
    {
        name: "Learn a new code language",
        id: 2,
    },
    {
        name: "Pratic coding skils",
        id: 3,
    }
]);

    
    const addToDo = (toDo) => { //const responsavel por adicionar um novo item ToDo a lista.
        setToDos([...toDos, toDo]); //aqui estou pegando o estado atual do setToDos clonando esses itens em um novo array e adicionando o ToDo
}
    const deleteToDo = (id) => { //const responsavel por remover o toDo do array
        const filtraId = toDos.filter((toDo) => toDo.id !== id);  //const responsavel por filtrar o array toDos e devolver um novo array que passar pela condição, a condição é que o id do objeto toDo seja diferente do id passado como parâmetro para a função deleteToDo. Isso significa que a nova array filtraId terá todos os objetos toDo que não possuem o id correspondente.
        setToDos(filtraId); //depois devolve o novoArray ao setTodos.
}

const editingToDo = (id, editedText) => { //const responsavel por editar uma tarefa criada, ela recebe dois parametros o id da tarefa na qual quer ser editada e o texto editado passado por parametro pelo componente editToDoItem.
        var newToDosArray = [...toDos]; // cria uma cópia do array de tarefas existente chamado toDos usando o operador spread (...).
        for (var i in newToDosArray){ //a função usa um loop for..in para percorrer o array newToDosArray.
            if(newToDosArray[i].id === id) { //e encontrar a tarefa com o id fornecido.
                newToDosArray[i].name = editedText; //Quando a tarefa é encontrada, a propriedade name da tarefa é atualizada com o novo texto fornecido pelo editedText.
            }
        }
        setToDos(newToDosArray); //Após a atualização, a função chama setToDos passando a nova array newToDosArray.
        //newToDosArray.splice(id, 1, {name: editedText, id: id});
    };

        
    return (
    <Paper className='divisão' style={{borderRadius: "10px", boxShadow: "4px 3px 7px 2px #00000040"}}> 
            <Container maxWidth='xs'>
                <Header />
                    <Form addToDo={addToDo} />
                        {toDos.map((toDo , key) => ( 
                            <ToDoItem 
                            editingToDo={editingToDo} 
                            deleteToDo={deleteToDo} 
                            toDo={toDo} 
                            id={toDo.id} 
                            ey={key}
                        />
                        ))}
            </Container>
        </Paper>
    )
}
