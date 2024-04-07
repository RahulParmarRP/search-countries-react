import { useState, useEffect } from "react";
import { UseCountryDataProps, Country } from "../types";
import { fetchCountryData } from "../services/countryService";

export const useCountryData = ({ query }: UseCountryDataProps) => {
  const [data, setData] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!query) {
        setData([]);
        setHasSearched(false);
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const fetchedData = await fetchCountryData(query);
        setData(fetchedData);
        setHasSearched(true);
      } catch (error) {
        setError("Error fetching countries");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { data, loading, error, hasSearched };
};
