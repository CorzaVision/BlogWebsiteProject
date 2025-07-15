# Blog Website - Frontend

This folder contains the React.js frontend with Shadow DOM implementation for the Blog Website project.

## Project Structure

```
Frontend/
├── src/
│   ├── components/               # React components
│   │   ├── common/              # Reusable UI components
│   │   ├── blog/                # Blog-specific components
│   │   └── shadow/              # Shadow DOM components
│   ├── pages/                   # Page components
│   ├── services/                # API services
│   ├── hooks/                   # Custom React hooks
│   ├── context/                 # React context providers
│   ├── types/                   # TypeScript type definitions
│   └── utils/                   # Utility functions
├── public/                      # Static assets
├── package.json                 # Dependencies
└── tsconfig.json               # TypeScript configuration
```

## Technology Stack

- **Framework**: React.js 19+
- **Language**: TypeScript 5.4+
- **Styling**: Shadow DOM for component isolation
- **Routing**: React Router 6.22+
- **State Management**: React Context + Hooks
- **Build Tool**: Vite 5.0+

## Getting Started

### Prerequisites
- Node.js 20+ and npm
- Modern web browser with Shadow DOM support

### Setup Steps
1. Navigate to `Frontend/` directory
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Open browser to `http://localhost:5173` (Vite default)

## Shadow DOM Implementation

### What is Shadow DOM?
Shadow DOM provides **style encapsulation** and **component isolation**. It creates a boundary between your component's styles and the rest of the page.

### Benefits
- **Style Isolation**: CSS doesn't leak in or out of components
- **Component Reusability**: Self-contained components
- **Theme Support**: CSS custom properties for theming
- **Maintainability**: Clear component boundaries

### Example Implementation
```typescript
// Custom blog post component with Shadow DOM
class BlogPostComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    
    // Scoped styles within shadow DOM
    const style = document.createElement('style');
    style.textContent = `
      .blog-post {
        font-family: 'Arial', sans-serif;
        line-height: 1.6;
        color: var(--text-color, #333);
      }
    `;
    
    shadow.appendChild(style);
    shadow.appendChild(this.createContent());
  }
}
```

## Development Guidelines

### Component Organization
- Use **functional components** with hooks
- Implement **component composition** for reusability
- Create **custom hooks** for logic reuse
- Use **TypeScript** for type safety

### Shadow DOM Best Practices
- Create **custom elements** for complex components
- Use **CSS custom properties** for theming
- Implement **scoped animations** within shadow DOM
- Ensure **accessibility** in shadow components

### State Management
- Use **React Context** for global state
- Implement **custom hooks** for local state
- Follow **immutable state** patterns
- Use **useReducer** for complex state logic

## Learning Focus

This frontend is designed to help you learn:
- **React.js** with TypeScript
- **Shadow DOM** implementation
- **Component-based architecture**
- **Modern JavaScript** features
- **Web Components** and custom elements
- **Responsive design** with Shadow DOM 