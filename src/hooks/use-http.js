import { useState } from 'react';

export default function useHttp() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  return {
    sendRequest: async function (url, method, data) {
      setIsLoading(true);
      const response = await fetch(url, {
        method: method,
        headers:
          method || method !== 'GET'
            ? {
                'Content-type': 'application/json',
              }
            : {},
        body: data ? JSON.stringify(data) : null,
      });
      setIsLoading(false);
      if (!response.ok) {
        throw new Error(`Error ${response.status} ${response.statusText}`);
      }
      return response;
    },
    isLoading,
    hasError,
    setHasError,
  };
}
