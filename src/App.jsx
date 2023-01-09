import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Characters />} />
          <Route path="comics" element={<Comics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
