import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import UserProfiles from './pages/UserProfiles'
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={UserProfiles} />
      </div>
    </BrowserRouter>
  );
}

export default App;
