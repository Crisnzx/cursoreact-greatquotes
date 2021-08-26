import { Redirect, Route, Switch } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import QuoteDetails from './pages/QuoteDetails';
import NewQuote from './pages/NewQuote';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/quotes" />
        </Route>
        <Route exact path="/quotes">
          <AllQuotes />
        </Route>
        <Route path="/quotes/new">
          <NewQuote />
        </Route>
        <Route path="/quotes/:id">
          <QuoteDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
