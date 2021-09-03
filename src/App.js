
import './App.css';
import AddTodoItems from './components/AddTodoItems/AddTodoItems';
import TodoList from './components/TodoList/TodoList';


function App() {
  return (
    <div className="App">
      <AddTodoItems/>
      <TodoList/>
    </div>
  );
}

export default App;
