import { Routes, Route, Link } from "react-router-dom";
import MobileCreate from "./mobileCRUD/MobileCreate";
import MobileDetail from "./mobileCRUD/MobileDetail";
import MobileList from "./mobileCRUD/MobileList";
import MobileUpdate from "./mobileCRUD/MobileUpdate";

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<MobileList />} />
        <Route path="/add" element={<MobileCreate />} />
        <Route path="/:id" element={<MobileDetail />} />
        <Route path="/:id/edit" element={<MobileUpdate/>} />
      </Routes>
    </div>
  );
}

export default App;
