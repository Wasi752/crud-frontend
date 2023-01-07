import { Routes, Route, Link } from "react-router-dom";

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
