import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BookList from './components/BookList/BookList';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import createApp from './redux/createapp/createapp';
import { getBooks } from './redux/books/books';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const appId = localStorage.getItem('app_id');

    if (localStorage.getItem('app_id')) {
      dispatch(getBooks());
      return;
    }

    dispatch(createApp(appId));
  });

  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={BookList} />
          <Route path="/categories" component={Categories} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
