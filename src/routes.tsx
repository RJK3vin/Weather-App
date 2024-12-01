import App from './App'
import Favorite from './Favorite'

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/favorites",
    element: <Favorite />,
  }
];

export default routes;
