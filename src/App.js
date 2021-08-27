import { Redirect, Route, Switch } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import QuoteDetails from './pages/QuoteDetails';
import NewQuote from './pages/NewQuote';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Redirect to="/quotes" />
        </Route>
        <Route exact path="/quotes">
          <AllQuotes />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="/quotes/:id">
          <QuoteDetails />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

/*
I have tried to use this patch for creating a new quote: /quotes/new
I was able to solve the first issue of the "new" word being treated as an ID in /quotes/:id and
then the component rendered is the wrong one
I used Switch, exact and sort to solve that
But there was another issue, when I tried to use activeClassName on NavLink component.
The active class didn't get out, so I had to change the path to /new-quote
I asked a question in the course lecture and I am still waiting for the answer.
*/
