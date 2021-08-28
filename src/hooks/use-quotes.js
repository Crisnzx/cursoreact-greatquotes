import { useState, useEffect } from 'react';
import useHttp from './use-http';

export default function useQuotes() {
  const [quotes, setQuotes] = useState([]);
  const { sendRequest, isLoading, hasError, setHasError } = useHttp();

  async function getQuoteData() {
    try {
      const response = await sendRequest(
        'https://great-quotes-76bf5-default-rtdb.firebaseio.com/quotes.json'
      );
      const quotes = await response.json();
      return quotes;
    } catch (error) {
      setHasError(error.message);
    }
  }

  useEffect(() => {
    async function fetchData() {
      const quotes = await getQuoteData();
      const parsedQuotes = Object.entries(quotes).map(([key, value]) => {
        return {
          id: key,
          author: value.author,
          text: value.text,
        };
      });
      setQuotes(parsedQuotes);
    }
    fetchData();
  }, []);
  return { quotes, isLoading, hasError, setHasError };
}
