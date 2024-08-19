import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Burger from "./components/Burger";
import Login from "./components/Login";
import GlobalStyle from "./styles/GlobalStyles";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/burger" element={<Burger />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
