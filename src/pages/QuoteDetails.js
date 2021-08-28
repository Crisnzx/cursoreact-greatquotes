import { Route, useParams, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useQuotes from '../hooks/use-quotes';

export default function QuoteDetails() {
  const params = useParams();
  const match = useRouteMatch();
  const quoteID = params.id;
  const { quotes } = useQuotes();
  console.log(quoteID);

  const quote = quotes.find(quote => quote.id === quoteID);

  if (!quote) {
    return (
      <div className="error-msg">
        <h2>No quote found.</h2>
      </div>
    );
  }

  return (
    <section>
      <HighlightedQuote author={quote.author} text={quote.text} />
      {/* Condicional rendering bases on the URL, so we don't need to manage complex state */}
      <Route exact path={match.path}>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </section>
  );
}
