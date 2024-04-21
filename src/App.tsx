import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import User from "./pages/auth/signup/User"
import User_login from "./pages/auth/login/User_login"

function App() {
  
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route  path="/User"  element={<User/>}/>
      <Route  path="/User_login"  element={<User_login/>}/>
      
      <Route path="*" element={<Navigate to="/"/>}/>
     </Routes>
     </BrowserRouter>
        
    </>
  )
}

export default App
