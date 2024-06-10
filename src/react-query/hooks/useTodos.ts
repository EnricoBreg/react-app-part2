import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Todo>("/todos");
export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS, // id per la query, usato internamente per il caching
    queryFn: apiClient.getAll, // funzione usata per prendere i dati da backend, ritorna una Promise
    staleTime: 10 * 1000, // 10s
  });
};

export default useTodos;
