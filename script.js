// ToDo list 
var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
   },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    // Get number of completed todos.
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }

    // If everything's true, make everything false.
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    // Else make everything true.
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
  }
};

// Event Listeners
// Add button
var addTodoButton = document.getElementById('addTodoButton');
var addTodoTextInput = document.getElementById('addTodoTextInput');
addTodoButton.addEventListener('click', function() {
  todoList.addTodo(addTodoTextInput.value);
  addTodoTextInput.value = '';
  view.displayTodos();
});

// Change button
var changeTodoButton = document.getElementById('changeTodoButton');
var changeTodoTextInput = document.getElementById('changeTodoTextInput');
changeTodoButton.addEventListener('click', function() {
  todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
  changeTodoPositionInput.value = '';
  changeTodoTextInput.value = '';
  view.displayTodos();
});

// Delete button
var deleteTodo = function(position) {
  todoList.deleteTodo(position);
  view.displayTodos();
};

// Toggle Completed button
var toggleCompletedButton = document.getElementById('toggleCompletedButton');
toggleCompletedButton.addEventListener('click', function() {
  todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
  toggleCompletedPositionInput.value = '';
  view.displayTodos();
});

// Toggle All button
var toggleAllButton = document.getElementById('toggleAllButton');
toggleAllButton.addEventListener('click', function() {
  todoList.toggleAll();
  view.displayTodos();
});

// View
var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';
      
      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }

      todoLi.id = i;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  setupEventListeners: function() {
    var todosUl = document.querySelector('ul');

    todosUl.addEventListener('click', function(event) {
      event.target.parentNode.id

      // Get the element that was clicked on.
      var elementClicked = event.target;

      // Check if elementClicked is a delete button.
      if (elementClicked.className === 'deleteButton') {
        // Run deleteTodo to elementClicked with appropriate id, parseInt to transform string to number.
        deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setupEventListeners();