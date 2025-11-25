# Portfolio Website

A modern, responsive portfolio website built with React and Vite. This single-page application showcases personal information, skills, projects, experience, and education in an elegant and interactive interface.

## Features

The portfolio includes the following sections:

- **Navigation** - Smooth navigation across different sections
- **Hero** - Eye-catching landing section with introduction
- **About** - Personal background and information
- **Skills** - Technical skills and competencies
- **Projects** - Showcase of personal and professional projects
- **Experience** - Work experience and career history
- **Education** - Educational background and qualifications
- **Contact** - Contact information and form

## Tech Stack

- **React 19.2.0** - Modern UI library
- **Vite 7.2.2** - Fast build tool and development server
- **ESLint** - Code linting and quality assurance
- CSS3 - Custom styling for components

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine (v18+ recommended).

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ShriyaPortfolio
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server with hot module replacement:
```bash
npm run dev
```

The application will open at `http://localhost:5173` (or another port if 5173 is in use).

### Build

Create a production build:
```bash
npm run build
```

The optimized files will be generated in the `dist` directory.

### Preview

Preview the production build locally:
```bash
npm run preview
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## Project Structure

```
ShriyaPortfolio/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Navigation.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── App.css
│   └── index.css
├── public/
├── package.json
└── vite.config.js
```

## Development Notes

- Each component has its own CSS file for modular styling
- The project uses Vite for fast hot module replacement during development
- React 19 is used with the latest features and optimizations
- ESLint is configured with React-specific rules for code quality

## Customization

To customize the portfolio for your own use:

1. Update the content in each component file under `src/components/`
2. Modify styles in the corresponding CSS files
3. Add your projects, experience, and education details
4. Update contact information in the Contact component
5. Replace any images or assets in the `public` directory

## License

This project is private and intended for personal use.
