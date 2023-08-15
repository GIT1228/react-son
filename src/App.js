
import { useRoutes } from 'react-router-dom';
import LayoutApp from './components/layoutApp'
import rules from './router/index.js';
const routes = [
  {
    path: '/*',
    element: <LayoutApp />,
    children: rules
  },
]
function App() {
  return useRoutes(routes)
}
export default App;