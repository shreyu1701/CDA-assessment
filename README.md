# Medical Research Status Dashboard

## Project Overview

The **Medical Research Status Dashboard** is a web application designed to display and filter medical research data. It provides search, filtering, and sorting capabilities for efficient data management.

## Features

- Display research projects in a tabular format
- Search research projects by title
- Filter projects by therapeutic area
- Sort projects by start date or projected completion date
- Error handling for data loading

## Technologies Used

- React.js
- Tailwind CSS
- JSON data for testing

## Installation and Setup

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node.js) or yarn

### Steps to Run the Project

1. **Clone the Repository**

   ```sh
   git clone git@github.com:shreyu1701/CDA-assessment.git
   cd medical-dashboard
   ```

2. **Install Dependencies**

   ```sh
   npm install  # or yarn install
   ```

3. **Start the Development Server**
   ```sh
   npm run dev  # or yarn dev
   ```
   The application will be available at `http://localhost:5173/` (default Vite dev server).

## Project Structure

```
medical-dashboard/
│── src/
│   ├── assets/
│   ├── components/
│   │   ├── Dashboard.jsx
│   ├── data/
│   │   ├── testdata.json
│   ├── App.jsx
│   ├── main.jsx
│── public/
│── package.json
│── vite.config.js
│── README.md
```

## Usage

- **Search**: Enter a research title in the search bar to find relevant studies.
- **Filter**: Select a therapeutic area to filter projects.
- **Sort**: Choose a sorting criterion and toggle ascending/descending order.

## Troubleshooting

- If the project does not start, ensure all dependencies are installed correctly.
- If `Failed to load data` error appears, check if `testdata.json` is properly formatted.

## Contributors

- **Shreyansh Koladiya** - Developer & Maintainer
