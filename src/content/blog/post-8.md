---
title: "API Design Best Practices: Build APIs That Developers Love"
description: "Panduan lengkap design RESTful API yang clean, scalable, dan developer-friendly"
pubDate: 2026-01-12
tags: ["api", "backend", "web-dev"]
image: "post-8"
---

## Why API Design Matters

Good API design is like good UX—invisible when done right, frustrating when done wrong. **70% of developers** abandon APIs karena poor documentation or confusing design. Let's make APIs that developers actually enjoy using! 🎯

### The API Design Philosophy

```
Good API = Predictable + Consistent + Well-documented
```

## RESTful Design Principles

### 1. Resource-Based URLs

```
❌ BAD:
POST /createUser
GET /getUserById/123
POST /updateUser/123
POST /deleteUser/123

✅ GOOD:
POST   /users          (Create user)
GET    /users/123      (Get user)
PUT    /users/123      (Update user)
DELETE /users/123      (Delete user)
```

**Key rule:** URLs should represent resources (nouns), not actions (verbs).

### 2. HTTP Methods Semantics

```javascript
// GET - Read data (idempotent, safe)
GET /api/articles?page=1&limit=10

// POST - Create new resource
POST /api/articles
Body: { "title": "New Article", "content": "..." }

// PUT - Replace entire resource
PUT /api/articles/123
Body: { "title": "Updated Title", "content": "..." }

// PATCH - Partial update
PATCH /api/articles/123
Body: { "title": "Only Update Title" }

// DELETE - Remove resource
DELETE /api/articles/123
```

## URL Structure Best Practices

### Consistent Naming Convention

```
✅ Use kebab-case or snake_case consistently:
/api/user-profiles
/api/blog-posts
/api/user_profiles (if you prefer snake_case)

❌ Don't mix:
/api/userProfiles (camelCase - avoid in URLs)
/api/BlogPosts (PascalCase - avoid in URLs)
```

### Nested Resources

```
GET /users/123/posts           # User's posts
GET /users/123/posts/456       # Specific post
GET /posts/456/comments        # Post's comments
GET /posts/456/comments/789    # Specific comment

⚠️ Don't nest too deep (max 2-3 levels):
❌ /users/123/posts/456/comments/789/likes/012
```

### Query Parameters for Filtering

```javascript
// Filtering
GET /api/articles?status=published&category=tech

// Sorting
GET /api/articles?sort=-createdAt,title
// - prefix = descending, no prefix = ascending

// Pagination
GET /api/articles?page=2&limit=20
GET /api/articles?offset=20&limit=20

// Field selection (sparse fieldsets)
GET /api/users/123?fields=id,name,email

// Search
GET /api/articles?search=typescript
```

## Response Format Standards

### Success Response Structure

```json
{
  "success": true,
  "data": {
    "id": 123,
    "title": "My Article",
    "author": {
      "id": 1,
      "name": "John Doe"
    }
  },
  "meta": {
    "timestamp": "2026-01-12T10:00:00Z",
    "version": "1.0"
  }
}
```

### Pagination Response

```json
{
  "success": true,
  "data": [
    { "id": 1, "title": "Article 1" },
    { "id": 2, "title": "Article 2" }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 156,
    "totalPages": 8,
    "hasNext": true,
    "hasPrev": false
  }
}
```

### Error Response Structure

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format"
      },
      {
        "field": "password",
        "message": "Password must be at least 8 characters"
      }
    ]
  },
  "meta": {
    "timestamp": "2026-01-12T10:00:00Z",
    "requestId": "abc-123-def"
  }
}
```

## HTTP Status Codes

Use appropriate status codes:

```javascript
// Success (2xx)
200 OK              // Standard success
201 Created         // Resource created
204 No Content      // Success but no data to return

// Client Errors (4xx)
400 Bad Request     // Invalid data
401 Unauthorized    // Authentication required
403 Forbidden       // Authenticated but no permission
404 Not Found       // Resource doesn't exist
409 Conflict        // Resource conflict (duplicate)
422 Unprocessable   // Validation failed
429 Too Many Req    // Rate limit exceeded

// Server Errors (5xx)
500 Internal Error  // Generic server error
503 Service Unavail // Server overloaded/maintenance
```

### Real-world Example

```javascript
// Express.js example
app.post("/api/users", async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    if (error.code === "DUPLICATE_EMAIL") {
      return res.status(409).json({
        success: false,
        error: {
          code: "DUPLICATE_EMAIL",
          message: "Email already exists",
        },
      });
    }

    res.status(500).json({
      success: false,
      error: {
        code: "INTERNAL_ERROR",
        message: "Something went wrong",
      },
    });
  }
});
```

## Versioning Strategies

### 1. URL Versioning (Most Common)

```
https://api.example.com/v1/users
https://api.example.com/v2/users
```

### 2. Header Versioning

```
GET /users
Accept: application/vnd.api+json; version=1
```

### 3. Query Parameter

```
GET /users?version=1
```

**Recommendation:** Use URL versioning untuk simplicity.

## Authentication & Security

### Bearer Token (JWT)

```javascript
// Request
GET /api/profile
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

// Response
200 OK
{
  "success": true,
  "data": {
    "id": 123,
    "name": "John Doe"
  }
}
```

### API Keys

```javascript
// Query parameter (less secure)
GET /api/data?api_key=your-api-key-here

// Header (preferred)
GET /api/data
X-API-Key: your-api-key-here
```

### Rate Limiting Headers

```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1609459200
```

## HATEOAS (Hypermedia)

Include links to related resources:

```json
{
  "success": true,
  "data": {
    "id": 123,
    "title": "My Article",
    "author": {
      "id": 1,
      "name": "John Doe"
    },
    "_links": {
      "self": "/api/articles/123",
      "author": "/api/users/1",
      "comments": "/api/articles/123/comments",
      "edit": "/api/articles/123",
      "delete": "/api/articles/123"
    }
  }
}
```

## API Documentation

Use OpenAPI (Swagger) specification:

```yaml
openapi: 3.0.0
info:
  title: Blog API
  version: 1.0.0
paths:
  /articles:
    get:
      summary: Get all articles
      parameters:
        - name: page
          in: query
          schema:
            type: integer
            default: 1
      responses:
        "200":
          description: Success
          content:
            application/json:
              schema:
                type: object
                properties:
                  success:
                    type: boolean
                  data:
                    type: array
                    items:
                      $ref: "#/components/schemas/Article"
```

## Best Practices Checklist

✅ **Consistent naming:** Use kebab-case or snake_case
✅ **Proper HTTP methods:** GET, POST, PUT, PATCH, DELETE
✅ **Meaningful status codes:** 200, 201, 400, 404, 500, etc.
✅ **Versioning:** /v1/, /v2/ in URL
✅ **Pagination:** Include page, limit, total
✅ **Filtering & sorting:** Query parameters
✅ **Error handling:** Consistent error format
✅ **Authentication:** Bearer token or API keys
✅ **Rate limiting:** Protect your API
✅ **Documentation:** OpenAPI/Swagger
✅ **CORS:** Configure properly
✅ **HTTPS only:** No plain HTTP in production

## Common Mistakes to Avoid

```javascript
// ❌ Don't use verbs in URLs
POST /createUser
GET /getUser

// ✅ Use nouns + HTTP methods
POST /users
GET /users/123

// ❌ Don't return arrays directly
[{...}, {...}]

// ✅ Wrap in object
{ "data": [{...}, {...}] }

// ❌ Don't ignore HTTP status codes
res.status(200).json({ error: "User not found" })

// ✅ Use appropriate codes
res.status(404).json({ error: "User not found" })
```

## Conclusion

Great API design is about consistency, clarity, and developer experience. Follow REST principles, use proper status codes, document thoroughly, dan always think from the API consumer's perspective.

**Key takeaways:**

- Resources as nouns, actions as HTTP methods
- Consistent response structure
- Proper error handling with status codes
- Version your API from day one
- Document everything with OpenAPI

Build APIs that developers love! 🚀
