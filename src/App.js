import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import BookList from './components/BookList/BookList';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={BookList} />
        <Route path="/categories" component={Categories} />
      </Switch>
    </Router>
  );
}

export default App;
