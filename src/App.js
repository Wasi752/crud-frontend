import { Routes, Route, Link } from "react-router-dom";
import DeleteMobileData from "./mobileCRUD/DeleteData";
import MobileCreate from "./mobileCRUD/MobileCreate";
import MobileDetail from "./mobileCRUD/MobileDetail";
import MobileList from "./mobileCRUD/MobileList";
import MobileInfoUpdate from "./mobileCRUD/MobileUpdate";

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<MobileList />} />
        <Route path="/add" element={<MobileCreate />} />
        <Route path="/:id" element={<MobileDetail />} />
        <Route path="/:menu/edit" element={<MobileInfoUpdate/>} />
        <Route path="/:id/delete" element={<DeleteMobileData/>} />
      </Routes>
    </div>
  );
}

export default App;
