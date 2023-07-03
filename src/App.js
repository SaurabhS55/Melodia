import './App.css';
import Login from './authorization/Login';
import Footer from './components/Footer';
import Root from './components/Root';
import Home from './navigation/Home';
import Search from './navigation/Search';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
const routes = createBrowserRouter([
  {
    path: '/',
    element:<Root/>,
    children:[
      {
        index:true,
        element:<Home/>,
        id: 'home'
      },
      {
        path:'search',
        element:<Search/>,
        id: 'search'
      }
    ]
  },{
    path: '/login',
    element:<Login/>,
    id: 'login'
  }
]);
function App() {
 
  return (
   <RouterProvider router={routes}/>
  );
}

export default App;
