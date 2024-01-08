import { useState, useEffect } from "react"

type FetchOpts = {
    method?: string;
    body?: string;
    headers?: {[key: string]: string};
  };

const useJsonFetch = <JSON>(url: string, opts: FetchOpts) => {
    const [data, setData] = useState<JSON | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async (): Promise<void> => {
      setLoading(true);
      try {
        const response = await fetch(url, opts);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const jsonData = await response.json();
        setData(jsonData);
        setError(null);
      } catch (err: any) {
        console.log(err)
        console.log(111)
          setError(err.message);
          console.log(error)
      } finally {
        setLoading(false);
      }
    };

    useEffect (() => {
        fetchData();
      }, [url]);


    return [data, loading, error]
}

export default useJsonFetch