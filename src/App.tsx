import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import User from "./pages/auth/signup/User"

function App() {
  
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route  path="/User"  element={<User/>}/>
      
      <Route path="*" element={<Navigate to="/"/>}/>
     </Routes>
     </BrowserRouter>
        
    </>
  )
}

export default App
