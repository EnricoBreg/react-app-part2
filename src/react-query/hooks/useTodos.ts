import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import todoService from "../services/todoService";
import { Todo } from "../services/todoService";

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS, // id per la query, usato internamente per il caching
    queryFn: todoService.getAll, // funzione usata per prendere i dati da backend, ritorna una Promise
    staleTime: 10 * 1000, // 10s
  });
};

export default useTodos;
