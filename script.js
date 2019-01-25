var todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('Your ToDo list is empty!');
    } else {
      console.log('My ToDos:');
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
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

    // Case 1: If everything's true, make everything false.
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    // Case 2: Otherwise, make everything true.
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }
};

var displayTodosButton = document.getElementById('displayTodosButton');
displayTodosButton.addEventListener('click', function() {
  todoList.displayTodos();
});

var addTodoButton = document.getElementById('addTodoButton');
var addTodoTextInput = document.getElementById('addTodoTextInput');
addTodoButton.addEventListener('click', function() {
  todoList.addTodo(addTodoTextInput.value);
  addTodoTextInput.value = '';
});

var changeTodoButton = document.getElementById('changeTodoButton');
var changeTodoTextInput = document.getElementById('changeTodoTextInput');
changeTodoButton.addEventListener('click', function() {
  todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
  changeTodoPositionInput.value = '';
  changeTodoTextInput.value = '';
});

var deleteTodoButton = document.getElementById('deleteTodoButton');
deleteTodoButton.addEventListener('click', function() {
  todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
  deleteTodoPositionInput.value = '';
});

var toggleCompletedButton = document.getElementById('toggleCompletedButton');
toggleCompletedButton.addEventListener('click', function() {
  todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
  toggleCompletedPositionInput.value = '';
});

var toggleAllButton = document.getElementById('toggleAllButton');
toggleAllButton.addEventListener('click', function() {
  todoList.toggleAll();
});