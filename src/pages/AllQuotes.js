import QuoteList from '../components/quotes/QuoteList';
import { DUMMY_QUOTES } from '../store/dummy-quotes';


export default function AllQuotes() {
  return <QuoteList quotes={DUMMY_QUOTES} />;
}
