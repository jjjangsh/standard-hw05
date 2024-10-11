"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const TodoPage = () => {
  const [todos, setTodos] = useState<Todo[]>();
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  useEffect(() => {
    const data = axios.get("http://localhost:4000/todos");
    setTodos([...todos, data]);
  }, []);

  const handleAddPost = () => {
    const newTodo = { title, contents };
    axios.post("http://localhost:4000/todos", newTodo);
    setTodos([...todos, newTodo]);
    setTitle("");
    setContents("");
  };

  return (
    <>
      <div className="border">
        제목
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="  제목 입력하세요"
        />
        내용
        <input
          type="text"
          value={contents}
          onChange={(e) => setContents(e.target.value)}
          placeholder="  내용 입력하세요"
        />
        <button className="bg-red-700" onClick={handleAddPost}>
          추가하기
        </button>
      </div>

      <div>
        {/* {todos
          ?.filter((todo) => todo.isDone === false)
          ?.map((todo) => (
            <div key={todo.id}>{todo.title}</div>
          ))} */}
      </div>
    </>
  );
};

export default TodoPage;

export type Todo = {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
};
