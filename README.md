# Learnify Course Portal

A modern web application built with React, Vite, TypeScript, and Shadcn/ui for accessing and browsing online courses.

## Features

- **Modern UI:** Built with React and styled using Tailwind CSS and Shadcn/ui components.
- **Fast Development:** Uses Vite for a rapid development experience.
- **Type Safety:** Written in TypeScript for improved code quality and maintainability.
- **Routing:** Utilizes React Router DOM for navigation.
- **Data Fetching:** Integrates TanStack Query for efficient data management (likely).
- **Component Library:** Leverages the extensive component library from Shadcn/ui.

## Tech Stack

- **Frontend Framework:** [React](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Shadcn/ui](https://ui.shadcn.com/)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Data Fetching:** [TanStack Query (React Query)](https://tanstack.com/query/latest)
- **Linting:** [ESLint](https://eslint.org/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18 or later recommended)
- npm, yarn, or pnpm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd learnify-course-portal
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    # or
    # pnpm install
    ```

### Running Locally

To start the development server:

```bash
npm run dev
# or
# yarn dev
# or
# pnpm dev
```

The application will be available at `http://localhost:8080` (or the address shown in your terminal).

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production to the `dist` folder.

## Deployment

This project is configured for deployment to GitHub Pages using GitHub Actions (see `.github/workflows/deploy.yml`). The `vite.config.ts` file adjusts the base path accordingly during the production build.
