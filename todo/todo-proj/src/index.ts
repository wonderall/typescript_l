import TodoCollection from './TodoCollection';
import TodoItem from './TodoItem';
import {data} from "./data";
const sampleTodos: TodoItem [] = data.map(
    (item)=> new TodoItem(item.id, item.task, item.complete)
);

const myTodoCollection = new TodoCollection("My Todo LIst", sampleTodos);

console.log(`${myTodoCollection.userName}`);
myTodoCollection.todoItems.forEach((item)=>item.printDetails());