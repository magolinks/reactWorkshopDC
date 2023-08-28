import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import CicloDeVida from "./ciclo-de-vida/ciclo-de-vida";
import CicloDeVida2 from "./ciclo-de-vida-2/ciclo-de-vida-2";
import Errores from "./errores/errores";
import OptimizarMemo from "./optimizar/optimizar-memo";
import OptimizarCallback from "./optimizar/optimizar-callback";
import OptimizarUseMemo from "./optimizar/optimizar-usememo";
import OptimizarRef from "./optimizar/optimizar-ref";

function App() {
  console.log('Render App');
  return (
    <div className="w-screen h-screen bg-gray-700 flex flex-col">
    <BrowserRouter>
      <nav className="p-2">
        <Link className="text-indigo-300 mr-4" to="/1">Base</Link>
        <Link className="text-indigo-300 mr-4 " to="/2">On Mount</Link>
        <Link className="text-indigo-300 mr-4 " to="/3">Errores</Link>
        <Link className="text-indigo-300 mr-4 " to="/memo">Optimizar memo</Link>
        <Link className="text-indigo-300 mr-4 " to="/callback">Optimizar useCallback</Link>
        <Link className="text-indigo-300 mr-4 " to="/memo2">Optimizar useMemo</Link>
        <Link className="text-indigo-300 mr-4 " to="/ref">Optimizar useRef</Link>
      </nav>
      <Routes>
        <Route path="/1" element={<CicloDeVida />}/>
        <Route path="/2" element={<CicloDeVida2 />}/>
        <Route path="/3" element={<Errores />}/>
        <Route path="/memo" element={<OptimizarMemo />}/>
        <Route path="/callback" element={<OptimizarCallback />}/>
        <Route path="/memo2" element={<OptimizarUseMemo />}/>
        <Route path="/ref" element={<OptimizarRef />}/>
        <Route path="*" element={<CicloDeVida />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
