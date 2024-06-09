import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  const fetchTodos = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);

  return useQuery<Todo[], Error>({
    queryKey: ["todos"], // id per la query, usato internamente per il caching
    queryFn: fetchTodos, // funzione usata per prendere i dati da backend, ritorna una Promise
    staleTime: 10 * 1000, // 10s
  });
};

export default useTodos;
