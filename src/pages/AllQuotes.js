import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useQuotes from '../hooks/use-quotes';

export default function AllQuotes() {
  // const { sendRequest, isLoading, hasError } = useHttp();
  const { quotes, isLoading, hasError } = useQuotes();

  let jsx;

  if (isLoading) {
    jsx = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  } else {
    if (hasError) {
      jsx = (
        <div className="error-msg">
          <h2>{hasError}</h2>
        </div>
      );
    } else {
      jsx = <QuoteList quotes={quotes} />;
    }
  }

  return jsx;
}
