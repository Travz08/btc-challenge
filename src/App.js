import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import UserProfiles from './pages/UserProfiles'
import AddUserProfile from './pages/AddUserProfile'
import './App.scss';

function App() {
  return (
    <BrowserRouter>
        <Route exact path="/" component={UserProfiles} />
        <Route exact path="/edit" component={AddUserProfile} />
    </BrowserRouter>
  );
}

export default App;
