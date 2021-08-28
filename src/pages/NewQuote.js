import { useHistory } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import QuoteForm from '../components/quotes/QuoteForm';

export default function NewQuote() {
  const history = useHistory();
  const { sendRequest, isLoading, hasError, setHasError } = useHttp();
  async function addQuoteHandler(quoteData) {
    try {
      await sendRequest(
        'https://great-quotes-76bf5-default-rtdb.firebaseio.com/quotes.json',
        'POST',
        quoteData
      );
      history.push('/quotes');
    } catch (error) {
      setHasError(error.message);
      setTimeout(() => {
        setHasError(null);
      }, 2000);
    }

    /*
      Here we can use history.push() or history.replace()
      the difference between these two methods is that the first one will add a new navigation history to the stack, so the
      user will be able to go back with the chrome button ( <- )
      while replace() will replace the current history and the user won't be able to go back
    */
  }

  return (
    <>
      {hasError && (
        <div className="error-msg">
          <h2>{hasError}</h2>
        </div>
      )}
      <QuoteForm isLoading={isLoading} onAddQuote={addQuoteHandler} />
    </>
  );
}
