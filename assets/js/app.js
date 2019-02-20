(function () {

  //import {createStore} from 'redux'
  //const { createStore } = Redux //creamos el store

  let store; 

  const initialState = [
    {
      id:1,
      completed:true,
      text:"task1"
    },
    {
      id:2,
      completed:false,
      text:"task2"
    },
    {
      id:3,
      completed:false,
      text:"task3"
    },

  ]

  document.addEventListener("DOMContentLoaded", (event) =>{
    initApp()
  })
  const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
)

  function initApp(){
    store = Redux.createStore(
      (state) => state,
      //reducer, //funcion pura para cambiar los estados, rcibe una accion y el estado anterior
      initialState, 
      enhancer
      )

    //console.log("initApp")
    //renderTodos(initialState)
  }

  function renderTodos(todos){
    
    const $container = document.getElementById("todo-list");
    $container.innerHTML=''

    let todosHtml = ''

    todos.forEach(todo => {
      
      todosHtml += renderTodo(todo)
      
    });
    $container.innerHTML=todosHtml
  }


  function renderTodo(todo){ //evia todo con datos id si es completado y un texto
    return (`
      <li data-id="${todo.id}" class="${todo.completed}">
        <div class="view">
          <input class="toggle" type="checkbox" ${todo.completed ? 'checked': '' }>
          <label>${todo.text}</label>
          <button class="destroy"></button>
        <div>
      </li>
    `)
  }
})();

