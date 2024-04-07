
export interface Country {
    name: {
        common: string;
    };
    flags: {
        png: string;
    };
}

export interface UseCountryDataProps {
    query: string;
}

export interface SearchBoxProps {
    onSearch: (term: string) => void;
}

export interface TableProps {
    data: Country[];
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    loading: boolean;
    hasSearched: boolean;
}

export interface RenderRowProps {
    country: Country;
    index: number;
}

