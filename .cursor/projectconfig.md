# Blog Website - Project Configuration

## AI Guidelines
### Learning-Focused Development
- **No automatic code generation** unless specifically requested
- **Step-by-step guidance** for learning purposes
- **Explain concepts** before implementing solutions
- **Encourage experimentation** and learning from mistakes
- **Focus on understanding** rather than just completion

### Code Review Approach
- **Automatic issue detection** and explanation
- **Learning opportunity identification** in code reviews
- **Best practice suggestions** with explanations
- **Performance and security considerations**

## Code Standards
### Backend (.NET 8.0)
- **Organization**: Use regions for logical grouping
- **Documentation**: XML comments for public APIs
- **Patterns**: Repository pattern, dependency injection
- **Error Handling**: Consistent exception handling
- **Validation**: Input validation and model validation

### Frontend (React.js 19+ + TypeScript)
- **Organization**: Component-based architecture
- **Documentation**: JSDoc comments for components
- **Patterns**: Custom hooks, context API, functional components
- **Styling**: Shadow DOM for component isolation
- **State Management**: React hooks and context

### Shadow DOM Implementation
- **Component Isolation**: Each component has its own shadow root
- **Styling**: Scoped CSS within shadow DOM
- **Custom Elements**: Web Components where appropriate
- **Theming**: CSS custom properties for theming

## Project Context
### Technology Stack
- **Backend**: .NET 8.0 Web API (C#)
- **Frontend**: React.js 19+ with TypeScript 5.4+
- **Styling**: Shadow DOM for component isolation
- **Database**: SQL Server 2022+ with Entity Framework Core 8.0
- **Authentication**: JWT tokens
- **Build Tools**: Vite 5.0+ for frontend

### Learning Goals
- **Full-stack development** with modern technologies
- **API design** and RESTful principles
- **Component-based architecture** with React
- **Shadow DOM** implementation and benefits
- **Database design** and Entity Framework
- **Authentication and authorization**

### Key Functionality
- **Blog post management** (CRUD operations)
- **User authentication** and authorization
- **Responsive design** with Shadow DOM
- **Search and filtering** capabilities
- **Admin dashboard** for content management

## Development Workflow
### Step-by-Step Approach
1. **Plan**: Define requirements and design
2. **Implement**: Small, testable increments
3. **Test**: Verify functionality at each step
4. **Review**: Code review with learning focus
5. **Refactor**: Improve based on feedback

### Testing Strategy
- **Unit tests** for backend logic
- **Component tests** for React components
- **Integration tests** for API endpoints
- **Manual testing** for UI/UX validation

## Documentation Standards
- **README files** for each major component
- **API documentation** with examples
- **Component documentation** with props and usage
- **Database schema** documentation
- **Deployment guides** and setup instructions 