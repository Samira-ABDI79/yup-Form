import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
export default function MainLayout(){
    return (
        <>
  
      <Navbar />
      <Outlet />

    </>
    )
}
