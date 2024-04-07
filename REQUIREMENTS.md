## Search Countries App

**Definition**

Search Countries allows users to search through a list of countries.

**Candidate Role**

Suitable for Software Software Engineer (SSE).

**Requirements**

- **Layout:**
  - Search box on the top-left side of the page.
  - Table below the search box.
  - Pagination at bottom-right of the table.
- **Search Box:**
  - As the user types, results are displayed in the table.
  - Implement debouncing to avoid frequent API calls during user input.
- **Table:**
  - Three columns:
    - No. (static counter starting from 1)
    - Country Name
    - Country Flag (displayed with the country name)
  - "No result found" message for empty searches.
  - "Start searching" message for blank searches.
  - Spinner displayed while fetching results.
- **Pagination:**
  - Dynamically updates based on search results.
  - Hidden when no results are found.
- **Additional Features:**
  - Focus search box with keyboard shortcut (Cmd+k or Ctrl+k).
  - Client-side sorting functionality using table headers.

**API Reference**

- Use environment variables to store and access API URLs and secrets.
- Refer to API documentation for details on endpoints and usage.

**Development Instructions**

1. Choose a front-end technology: Angular, ReactJS, or VueJS.
2. Implement proper coding standards for component development.
3. Create reusable UI components for the search box, table, and pagination.
4. Follow a component-level development approach.
5. Avoid using third-party libraries (unless absolutely necessary).
