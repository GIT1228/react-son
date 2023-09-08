
import { useRoutes } from 'react-router-dom';
import LayoutApp from './components/layoutApp'
import { Navigate } from "react-router-dom";
import rules from './router/index.js';
const routes = [
  {
    path: '/sub-react',
    element: <LayoutApp />,
    children: rules
  },
  {
    path: '/',
    element: <Navigate to='/sub-react' />,
  },
  {
    path: '/*',
    element: <Navigate to='/' />,
  },

]
function App() {
  return useRoutes(routes)
}
export default App;