import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import "./index.css";

/* const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // numero di retry massimo
      retry: 3,
      // tempo per il quale la query resta in memoria nello stato inactive
      cacheTime: 300_000, // equivalente a 5 minuti
      // specifica per quanto tempo i dati possono essere considerati nuovi, 0 significa che
      // nel momento che i dati vengono ricevuti vengono già considerati come vecchi
      // OPZIONE SPESSO CAMBIATA NELLA MAGGIOR PARTE DEI CASI
      staleTime: 10 * 1000, // equivalente a 10 secondi

      // OPZIONI SPESSO LASCIATE COME SONO...
      // ReactQuery di default fa rifetch dei dati quando si ritorna con il focus
      // nella scheda nel browser, per disabilitare questo comportamento si usa:
      refetchOnWindowFocus: false,
      // ReactQuery di default fa rifetch dei dati quando l'app ritorna online
      // in caso si voglia disattivare questo comportamento usare:
      refetchOnReconnect: false,
      // ReactQuery di default fa rifetch dei dati quando il componente viene
      // montato per la prima volta nella pagina, eventualmente disattivabile con:
      refetchOnMount: false,
    },
  },
}); */
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
