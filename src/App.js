import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import RoutesDom from './Components/RoutesDom/RoutesDom';
// import LoginForm from './Components/LoginForm/LoginForm.';
import { Provider } from 'react-redux';
import store from './store'


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RoutesDom />
    },
    // { 
    //   path: "/add-form", 
    //   element: <LoginForm/>  
    // },


  ])

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
