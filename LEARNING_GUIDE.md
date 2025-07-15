# Blog Website - Learning Guide

## 🎓 Step-by-Step Development Without AI

This guide helps you build the blog website from scratch, understanding each concept and implementation detail.

## 📚 Learning Path

### Phase 1: Understanding the Technologies

#### 1.1 .NET Core Web API Basics
**What to Learn:**
- What is a Web API and why use it?
- HTTP methods (GET, POST, PUT, DELETE)
- RESTful API design principles
- JSON data format

**Resources:**
- Microsoft .NET Core documentation
- REST API tutorials
- JSON basics

**Practice:**
- Create a simple "Hello World" API
- Test with Postman or browser
- Understand HTTP status codes

#### 1.2 React.js Fundamentals
**What to Learn:**
- What is React and why use it?
- Components and JSX
- Props and state
- Functional components vs class components

**Resources:**
- React official documentation
- React tutorials on YouTube
- JSX syntax guide

**Practice:**
- Create a simple React app
- Build basic components
- Pass props between components

#### 1.3 Shadow DOM Concepts
**What to Learn:**
- What is Shadow DOM?
- Why use Shadow DOM?
- Web Components basics
- Style encapsulation

**Resources:**
- MDN Web Components documentation
- Shadow DOM tutorials
- CSS custom properties

**Practice:**
- Create a simple custom element
- Understand style isolation
- Use CSS custom properties

### Phase 2: Backend Development

#### 2.1 Setting Up .NET 8.0 Project
**Steps:**
1. Install .NET 8.0 SDK
2. Create new Web API project: `dotnet new webapi`
3. Understand project structure
4. Run the project: `dotnet run`

**What You'll Learn:**
- Project file structure
- Program.cs and Startup.cs
- Configuration files
- Dependency injection basics

#### 2.2 Database Design
**Steps:**
1. Plan your database tables
2. Create Entity Framework models
3. Set up DbContext
4. Create initial migration

**What You'll Learn:**
- Database relationships
- Entity Framework Core
- Code-first approach
- Migration concepts

#### 2.3 API Controllers
**Steps:**
1. Create your first controller
2. Implement CRUD operations
3. Add validation
4. Handle errors properly

**What You'll Learn:**
- Controller patterns
- Model validation
- Error handling
- HTTP status codes

### Phase 3: Frontend Development

#### 3.1 React Project Setup
**Steps:**
1. Install Node.js 20+ and npm
2. Create React app: `npm create vite@latest my-blog -- --template react-ts`
3. Understand project structure
4. Start development server: `npm run dev`

**What You'll Learn:**
- React project structure
- TypeScript basics
- Development server
- Hot reloading

#### 3.2 Component Architecture
**Steps:**
1. Plan your component hierarchy
2. Create reusable components
3. Implement props and state
4. Use React hooks

**What You'll Learn:**
- Component composition
- State management
- React hooks (useState, useEffect)
- Props drilling

#### 3.3 Shadow DOM Implementation
**Steps:**
1. Create custom elements
2. Implement Shadow DOM
3. Add scoped styles
4. Use CSS custom properties

**What You'll Learn:**
- Web Components
- Shadow DOM API
- Style encapsulation
- Custom properties

### Phase 4: Integration

#### 4.1 API Communication
**Steps:**
1. Create API service functions
2. Use fetch or axios
3. Handle loading states
4. Implement error handling

**What You'll Learn:**
- HTTP requests
- Async/await
- Error handling
- Loading states

#### 4.2 State Management
**Steps:**
1. Use React Context
2. Create custom hooks
3. Manage global state
4. Handle authentication state

**What You'll Learn:**
- Context API
- Custom hooks
- Global state management
- Authentication flow

## 🛠️ Development Workflow

### For Each Feature:
1. **Plan**: Write down what you want to build
2. **Research**: Find relevant documentation
3. **Implement**: Write code step by step
4. **Test**: Verify it works as expected
5. **Refactor**: Improve the code
6. **Document**: Add comments and documentation

### Testing Strategy:
- **Backend**: Test API endpoints with Postman
- **Frontend**: Test components in browser
- **Integration**: Test full user flows
- **Manual**: Click through your application

## 📖 Learning Resources

### .NET 8.0
- [Microsoft .NET Documentation](https://docs.microsoft.com/en-us/dotnet/)
- [Entity Framework Core 8.0](https://docs.microsoft.com/en-us/ef/core/)
- [ASP.NET Core Web API](https://docs.microsoft.com/en-us/aspnet/core/web-api/)

### React.js
- [React Official Documentation](https://reactjs.org/docs/getting-started.html)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [React Hooks Documentation](https://reactjs.org/docs/hooks-intro.html)

### Shadow DOM
- [MDN Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Shadow DOM v1](https://developers.google.com/web/fundamentals/web-components/shadowdom)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

## 🎯 Practice Projects

### Mini Projects to Build:
1. **Simple Todo API** - Learn basic CRUD operations
2. **Weather App** - Practice API integration
3. **Counter Component** - Understand React state
4. **Custom Button** - Learn Shadow DOM
5. **Blog Post List** - Combine all concepts

## 💡 Tips for Learning

### Backend Tips:
- Start with simple endpoints
- Use Postman to test your APIs
- Read error messages carefully
- Use debugging tools

### Frontend Tips:
- Use browser developer tools
- Console.log for debugging
- Start with simple components
- Test on different screen sizes

### General Tips:
- Code a little every day
- Don't copy-paste without understanding
- Ask questions when stuck
- Build projects to practice
- Read other people's code

## 🚀 Next Steps

1. **Choose a starting point** from Phase 1
2. **Follow the steps** one by one
3. **Practice** with mini projects
4. **Build confidence** with each concept
5. **Move to the next phase** when ready

Remember: Learning to code is a journey, not a destination. Take your time, practice regularly, and don't be afraid to make mistakes! 