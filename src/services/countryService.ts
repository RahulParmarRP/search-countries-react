import { COUNTRY_BY_NAME_API } from "../constants";
import { Country } from "../types";

export const fetchCountryData = async (query: string): Promise<Country[]> => {
    try {
        if (!query) {
            throw new Error("Query parameter is required");
        }

        const response = await fetch(`${COUNTRY_BY_NAME_API}/${query}`);

        if (!response.ok) {
            if (response.status === 404) {
                // return empty array when no matching countries found
                return [];
            }
            throw new Error("Failed to fetch data");
        }

        const data: Country[] = await response.json();
        return data;
    } catch (error: any) {
        throw new Error("Error fetching data: " + error.message);
    }
};
