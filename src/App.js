import './App.scss';
import Nav from './Components/Nav/Nav';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';


const Layout = () => {
  return (
    <div className='app'>
      <Nav/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter ([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      
    ]
  }
])




function App() {
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
