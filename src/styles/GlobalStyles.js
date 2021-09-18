import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root {
        --dribbble-400: #ea4c89;
        --teal-400: #18b2ff;
        --blue-400: #0a7aff;
        --black: #000000;
        --white: #ffffff;
        --gray-900: #111827;
        --gray-800: #1f2937;
        --gray-700: #374151;
        --gray-600: #4b5563;
        --gray-500: #6b7280;
        --gray-400: #9ca3af;
        --gray-300: #d1d5db;
        --gray-200: #e5e7eb;
        --gray-100: #f3f4f6;
        --gray-50: #f9fafb;
        --prose-500: #374151;
        --prose-600: #4b5563;
    }
    body {
        color: var(--gray-500);
        overflow-x: hidden;

        &.hidden {
            overflow: hidden;
        }
    }
    h1 {
        font-weight: 800;
        letter-spacing: -0.05em;
        color: var(--gray-900);

        @media screen and (max-width: 39.9375rem) {
            font-size: 2.25rem;
            line-height: 2.5rem;
        }

        @media screen and (min-width: 40rem) and (max-width: 47.9375rem) {
            font-size: 2.25rem;
            line-height: 2.5rem;
        }

        @media screen and (min-width: 48rem) and (max-width: 63.9375rem) {
            font-size: 3rem;
            line-height: 1;
        }

        @media screen and (min-width: 64rem) and (max-width: 79.9375rem) {
            font-size: 3rem;
            line-height: 1;
        }

        @media screen and (min-width: 80rem) and (max-width: 95.9375rem) {
            font-size: 3.75rem;
            line-height: 1;
        }

        @media screen and (min-width: 95.9375rem) {
            font-size: 3.75rem;
            line-height: 1;
        }
    }
    h1 + p {
        font-weight: 500;
        color: var(--gray-400);

        @media screen and (max-width: 39.9375rem) {
            font-size: 1rem;
            line-height: 1.5rem;
        }

        @media screen and (min-width: 40rem) and (max-width: 47.9375rem) {
            font-size: 1rem;
            line-height: 1.5rem;
        }

        @media screen and (min-width: 48rem) and (max-width: 63.9375rem) {
            font-size: 1.125rem;
            line-height: 1.75rem;
        }

        @media screen and (min-width: 64rem) and (max-width: 79.9375rem) {
            font-size: 1.125rem;
            line-height: 1.75rem;
        }

        @media screen and (min-width: 80rem) and (max-width: 95.9375rem) {
            font-size: 1.25rem;
            line-height: 1.75rem;
        }

        @media screen and (min-width: 95.9375rem) {
            font-size: 1.25rem;
            line-height: 1.75rem;
        }
    }
    h2 {
        font-weight: 700;
        letter-spacing: -0.025em;
        color: var(--gray-900);

        @media screen and (max-width: 39.9375rem) {
            font-size: 1.875rem;
            line-height: 2.25rem;
        }

        @media screen and (min-width: 40rem) and (max-width: 47.9375rem) {
            font-size: 1.875rem;
            line-height: 2.25rem;
        }

        @media screen and (min-width: 48rem) and (max-width: 63.9375rem) {
            font-size: 2.25rem;
            line-height: 2.5rem;
        }

        @media screen and (min-width: 64rem) and (max-width: 79.9375rem) {
            font-size: 2.25rem;
            line-height: 2.5rem;
        }

        @media screen and (min-width: 80rem) and (max-width: 95.9375rem) {
            font-size: 3rem;
            line-height: 1;
        }

        @media screen and (min-width: 95.9375rem) {
            font-size: 3rem;
            line-height: 1;
        }
    }
    h2 + p {
        font-weight: 500;
        color: var(--gray-400);

        @media screen and (max-width: 39.9375rem) {
            font-size: 0.875rem;
            line-height: 1.25rem;
        }

        @media screen and (min-width: 40rem) and (max-width: 47.9375rem) {
            font-size: 0.875rem;
            line-height: 1.25rem;
        }

        @media screen and (min-width: 48rem) and (max-width: 63.9375rem) {
            font-size: 1rem;
            line-height: 1.5rem;
        }

        @media screen and (min-width: 64rem) and (max-width: 79.9375rem) {
            font-size: 1rem;
            line-height: 1.5rem;
        }

        @media screen and (min-width: 80rem) and (max-width: 95.9375rem) {
            font-size: 1.125rem;
            line-height: 1.75rem;
        }

        @media screen and (min-width: 95.9375rem) {
            font-size: 1.125rem;
            line-height: 1.75rem;
        }
    }
    h3 {
        font-weight: 700;
        color: var(--gray-900);

        @media screen and (max-width: 39.9375rem) {
            font-size: 1.5rem;
            line-height: 2rem;
        }

        @media screen and (min-width: 40rem) and (max-width: 47.9375rem) {
            font-size: 1.5rem;
            line-height: 2rem;
        }

        @media screen and (min-width: 48rem) and (max-width: 63.9375rem) {
            font-size: 1.875rem;
            line-height: 2.25rem;
        }

        @media screen and (min-width: 64rem) and (max-width: 79.9375rem) {
            font-size: 1.875rem;
            line-height: 2.25rem;
        }

        @media screen and (min-width: 80rem) and (max-width: 95.9375rem) {
            font-size: 2.25rem;
            line-height: 2.5rem;
        }

        @media screen and (min-width: 95.9375rem) {
            font-size: 2.25rem;
            line-height: 2.5rem;
        }
    }
    p {
        color: var(--gray-500);

        @media screen and (max-width: 39.9375rem) {
            font-size: 0.875rem;
            line-height: 1.25rem;
        }

        @media screen and (min-width: 40rem) and (max-width: 47.9375rem) {
            font-size: 0.875rem;
            line-height: 1.25rem;
        }

        @media screen and (min-width: 48rem) and (max-width: 63.9375rem) {
            font-size: 1rem;
            line-height: 1.5rem;
        }

        @media screen and (min-width: 64rem) and (max-width: 79.9375rem) {
            font-size: 1rem;
            line-height: 1.5rem;
        }

        @media screen and (min-width: 80rem) and (max-width: 95.9375rem) {
            font-size: 1.125rem;
            line-height: 1.75rem;
        }

        @media screen and (min-width: 95.9375rem) {
            font-size: 1.125rem;
            line-height: 1.75rem;
        }
    }
    article {
        color: var(--prose-500);

        @media screen and (max-width: 39.9375rem) {
            font-size: 0.875rem;
            line-height: 1.7;
        }

        @media screen and (min-width: 40rem) and (max-width: 47.9375rem) {
            font-size: 1rem;
            line-height: 1.75;
        }

        @media screen and (min-width: 48rem) and (max-width: 63.9375rem) {
            font-size: 1rem;
            line-height: 1.75;
        }

        @media screen and (min-width: 64rem) and (max-width: 79.9375rem) {
            font-size: 1.125rem;
            line-height: 1.77;
        }

        @media screen and (min-width: 80rem) and (max-width: 95.9375rem) {
            font-size: 1.125rem;
            line-height: 1.77;
        }

        @media screen and (min-width: 95.9375rem) {
            font-size: 1.5rem;
            line-height: 1.67;
        }
    }
    article p:first-of-type {
        color: var(--prose-600);

        @media screen and (max-width: 39.9375rem) {
            margin-top: 0.89em;
            margin-bottom: 0.89em;
            font-size: 1.29em;
            line-height: 1.56;
        }

        @media screen and (min-width: 40rem) and (max-width: 47.9375rem) {
            margin-top: 0.89em;
            margin-bottom: 0.89em;
            font-size: 1.29em;
            line-height: 1.56;
        }

        @media screen and (min-width: 48rem) and (max-width: 63.9375rem) {
            margin-top: 1.2em;
            margin-bottom: 1.2em;
            font-size: 1.25em;
            line-height: 1.6;
        }

        @media screen and (min-width: 64rem) and (max-width: 79.9375rem) {
            margin-top: 1.2em;
            margin-bottom: 1.2em;
            font-size: 1.25em;
            line-height: 1.6;
        }

        @media screen and (min-width: 80rem) and (max-width: 95.9375rem) {
            margin-top: 1.09em;
            margin-bottom: 1.09em;
            font-size: 1.22em;
            line-height: 1.45;
        }

        @media screen and (min-width: 95.9375rem) {
            margin-top: 1.067em;
            margin-bottom: 1.067em;
            font-size: 1.25em;
            line-height: 1.467;
        }
    }
    article p, .lead {

        @media screen and (max-width: 39.9375rem) {
            margin-top: 1.25em;
            margin-bottom: 1.25em;
            font-size: 1rem;
            line-height: 1.75;
        }

        @media screen and (min-width: 40rem) and (max-width: 47.9375rem) {
            margin-top: 1.25em;
            margin-bottom: 1.25em;
            font-size: 1rem;
            line-height: 1.75;
        }

        @media screen and (min-width: 48rem) and (max-width: 63.9375rem) {
            margin-top: 1.2em;
            margin-bottom: 1.2em;
            font-size: 1.25em;
            line-height: 1.6;
        }

        @media screen and (min-width: 64rem) and (max-width: 79.9375rem) {
            margin-top: 1.2em;
            margin-bottom: 1.2em;
            font-size: 1.25em;
            line-height: 1.6;
        }

        @media screen and (min-width: 80rem) and (max-width: 95.9375rem) {
            margin-top: 1.33em;
            margin-bottom: 1.33em;
            font-size: 1.125rem;
            line-height: 1.78;
        }

        @media screen and (min-width: 95.9375rem) {
            margin-top: 1.33em;
            margin-bottom: 1.33em;
            font-size: 1.5rem;
            line-height: 1.67;
        }
    }
    article p {
        color: var(--prose-600);
    }
`