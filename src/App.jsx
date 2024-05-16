import React, { useState } from "react";
import './App.css';

function App() { 
  const [count, setCount] = useState(0); 

  return ( 
    <> 
      <Count count={count}/> 
      <Buttons count={count} setCount={setCount} />  
    </>
  );
}

function Count({ count }) { 
  return <div>{count}</div>;
}

function Buttons({ count, setCount }) { 
  return ( 
    <div> 
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;





// import React, { lazy, Suspense } from 'react';
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
// import './App.css';



// // const Dashboard = lazy(() => import('./pages/Dashboard'));
// const Landing = lazy(() => import('./pages/Landing'));

// function App() {
//   return (
//     <BrowserRouter>
//       <AppBar />
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/" element={<Landing />} />
//         </Routes>
//       </Suspense>
//     </BrowserRouter>
//   );
// }

// function AppBar() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <button onClick={() => navigate("/")}>Landing</button>
//       <button onClick={() => navigate("/dashboard")}>Dashboard</button>
//     </div>
//   );
// }

// export default App;