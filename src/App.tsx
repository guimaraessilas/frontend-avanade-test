
import { ContextProvider } from './context/SymbolsContext';
import { Home } from './pages/Home';

function App() {
  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  );
}

export default App;
