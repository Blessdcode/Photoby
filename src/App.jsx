import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



const Layout = ()=>{
  return(
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  

  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/services",
        element: <Services/>
      },
      {
        path: "/project",
        element: <Project/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
    ]
  },
 
]);

function App() {
  return (
    <div>
     <RouterProvider router={router} />
    </div>
  )
}

export default App
