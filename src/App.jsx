import Main from "./components/Main";
import { TodoProvider } from "./context/TodoContext";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <TodoProvider>
        <Main />
      </TodoProvider>
    </>
  );
}

export default App;
