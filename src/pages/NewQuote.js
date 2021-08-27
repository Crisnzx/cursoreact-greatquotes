import { useHistory } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';

export default function NewQuote() {

  const history = useHistory();

  function addQuoteHandler(quoteData) {
    console.log(quoteData);
    
    /*
      Here we can use history.push() or history.replace()
      the difference between these two methods is that the first one will add a new navigation history to the stack, so the
      user will be able to go back with the chrome button ( <- )
      while replace() will replace the current history and the user won't be able to go back
    */
    
    history.push('/quotes');
  }

  return <QuoteForm onAddQuote={addQuoteHandler} />;
}
