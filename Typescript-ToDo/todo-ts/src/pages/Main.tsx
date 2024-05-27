import React, { useEffect } from "react";
import { Container } from "@mui/material";
import Header from "../companents/Header";
import { useState } from "react";
import axios from "axios";
import AddToDoComp from "../companents/AddToDoComp";
import TodoList from "../companents/TodoList";

interface ITodoType {
  task: string;
  isDone: boolean;
  id: number | string;
  todo?: string; // burası zorunlu değil varsa type string
}
const URL = "https://634ac3fc5df952851418480f.mockapi.io/api/todos";
const Main = () => {
  //   const [todos, setTodos] = useState([] as ITodoType[]);
  //   const [todos, setTodos] = useState<Array<ITodoType>>([]);
  const [todos, setTodos] = useState<ITodoType[]>([]); //yaygın kullanım

  const getTodos = async () => {
    try {
      const { data } = await axios<ITodoType[]>(URL);
      console.log(data);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };
type AddFn = (task:string) => Promise<void>;
const AddToDo:AddFn = async (task) => {
    try {
        await axios.post(URL, {task, isDone: false});
        getTodos();
    } catch (error) {
        console.log(error);
    }
    
}


  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <Header />
      <AddToDoComp addToDo={AddToDo}/>
      <TodoList  todos={todos}/>
    </Container>
  );
};

export default Main;
