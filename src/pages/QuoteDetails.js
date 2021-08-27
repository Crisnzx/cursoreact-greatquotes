import { Route, useParams } from 'react-router';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import { DUMMY_QUOTES } from '../store/dummy-quotes';

export default function QuoteDetails() {
  const params = useParams();
  console.log(params);
  const quoteID = params.id;

  const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteID);

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
      <Route path={`/quotes/${quoteID}/comments`}>
        <Comments />
      </Route>
    </section>
  );
}
