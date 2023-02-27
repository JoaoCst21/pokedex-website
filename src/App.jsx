import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonContainer from "./components/PokemonContainer/PokemonContainer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<PokemonContainer />}></Route>
          {/*<Route path="/pokemon/:id" element={}></Route>*/}
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
