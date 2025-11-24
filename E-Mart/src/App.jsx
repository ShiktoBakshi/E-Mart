import { createBrowserRouter, Outlet } from "react-router"
import Navbar from "./Components/Component/Root/Navbar"
import Footer from "./Components/Component/Root/footer"
import Home from "./Components/Component/Home";
import { RouterProvider } from "react-router";
import More from "./Components/Component/More";
import Blogs from "./Components/Component/Blogs";
import About from "./Components/Component/About";
import Contact from "./Components/Component/Contact";
import AddCart from "./Components/Component/Addcart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




function Layout(){
 return(
   <>
   <Navbar/>
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
   <Outlet/>
   <Footer/>

  </>
 );
}

const router=createBrowserRouter([
 {
   path:"/",
  element:<Layout/>,
  children:[
    {
      index:true,
      element:<Home/>
    }
    ,
    {
      path:"/more",
      element:<More></More>
    },
    {
      path:"/blogs",
      element:<Blogs></Blogs>
    },
    {
      path:"/about",
      element:<About></About>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/cart",
      element:<AddCart/>
    }
  ]
 }
])

function App() {
 

  return <RouterProvider router={router} />
}

export default App
