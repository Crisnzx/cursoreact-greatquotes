import { Route, useParams } from 'react-router';
import Comments from '../components/comments/Comments';

export default function QuoteDetails() {
  const params = useParams();
  const quoteID = params.id;
  console.log(quoteID);

  return (
    <section>
      <h2>Quote Details page</h2>
      <p>Quote ID: {quoteID}</p>
      <Route path={`/quotes/${quoteID}/comments`}>
        <Comments />
      </Route>
    </section>
  );
}
