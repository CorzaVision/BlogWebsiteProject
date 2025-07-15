# Blog Website - Backend

This folder contains the .NET Core backend for the Blog Website project.

## Project Structure

```
Backend/
├── BlogWebsite.API/              # Web API project (main entry point)
├── BlogWebsite.Core/             # Business logic layer
├── BlogWebsite.Infrastructure/   # Data access layer
└── BlogWebsite.Tests/            # Unit and integration tests
```

## Technology Stack

- **Framework**: .NET 8.0 (LTS)
- **ORM**: Entity Framework Core 8.0
- **Database**: SQL Server 2022+
- **Authentication**: JWT tokens
- **API**: RESTful Web API

## Getting Started

### Prerequisites
- .NET 8.0 SDK
- SQL Server 2022+ (LocalDB or full instance)
- Visual Studio 2022 or VS Code

### Setup Steps
1. Navigate to `BlogWebsite.API/` directory
2. Update connection string in `appsettings.json`
3. Run database migrations: `dotnet ef database update`
4. Start the API: `dotnet run`

## Development Guidelines

### Code Organization
- Use **regions** for logical grouping in large files
- Follow **Repository Pattern** for data access
- Implement **Dependency Injection** for loose coupling
- Use **DTOs** for API responses

### API Design
- Follow RESTful conventions
- Use proper HTTP status codes
- Implement consistent error handling
- Add XML documentation for all public APIs

### Database
- Use Entity Framework migrations
- Follow naming conventions
- Implement proper relationships
- Add indexes for performance

## Learning Focus

This backend is designed to help you learn:
- **API Development** with .NET Core
- **Database Design** and Entity Framework
- **Authentication & Authorization**
- **Clean Architecture** patterns
- **Testing** strategies 