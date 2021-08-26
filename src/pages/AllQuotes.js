import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  {
    id: 'q1',
    author: 'Cristovão',
    text: 'Tentei fugir de mim, mas aonde eu ia, eu tava',
  },
  {
    id: 'q2',
    author: 'Cristovão Neto',
    text: 'Se tem uma coisa que acaba com meu dia é a noite...',
  },
];

export default function AllQuotes() {
  return <QuoteList quotes={DUMMY_QUOTES} />;
}
