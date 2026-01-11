---
title: "TypeScript Pro Tips: Level Up Your Type Game"
description: "Advanced TypeScript techniques yang bikin code kamu lebih safe dan maintainable"
pubDate: 2026-01-10
tags: ["typescript", "web-dev", "programming"]
image: "post-6"
---

## Kenapa TypeScript?

TypeScript bukan cuma JavaScript with types. It's a powerful tool yang bisa prevent bugs sebelum production. Di 2026, **85% projects** baru pakai TypeScript—and for good reason!

### The Type Safety Promise

```typescript
// JavaScript: Runtime errors menanti
function greet(name) {
  return `Hello ${name.toUpperCase()}`;
}
greet(); // 💥 Runtime error!

// TypeScript: Caught at compile time
function greet(name: string): string {
  return `Hello ${name.toUpperCase()}`;
}
greet(); // ❌ Compile error: Expected 1 argument
```

## Advanced Type Patterns

### 1. Discriminated Unions

Perfect untuk handle different states dengan type safety:

```typescript
type Result<T, E> = { success: true; data: T } | { success: false; error: E };

function fetchUser(): Result<User, string> {
  // Implementation
}

const result = fetchUser();
if (result.success) {
  console.log(result.data.name); // ✅ Type-safe
} else {
  console.log(result.error); // ✅ Type-safe
}
```

### 2. Template Literal Types

Type-safe string manipulation:

```typescript
type EventName = "click" | "scroll" | "mousemove";
type EventHandler = `on${Capitalize<EventName>}`;
// Result: 'onClick' | 'onScroll' | 'onMousemove'

type Route = "/home" | "/about" | "/contact";
type RoutePath = `${Route}/${string}`;
// Allows: '/home/123', '/about/team', etc.
```

## Generic Constraints

Make your generics more powerful:

```typescript
// Basic generic
function getProperty<T>(obj: T, key: keyof T) {
  return obj[key];
}

// With constraints
function sortBy<T extends { id: number; name: string }>(
  items: T[],
  key: keyof T
): T[] {
  return items.sort((a, b) => (a[key] > b[key] ? 1 : -1));
}
```

### Conditional Types

```typescript
type IsArray<T> = T extends any[] ? true : false;

type A = IsArray<string[]>; // true
type B = IsArray<string>; // false

// Practical example: Extract return type
type Awaited<T> = T extends Promise<infer U> ? U : T;

type A = Awaited<Promise<string>>; // string
type B = Awaited<number>; // number
```

## Utility Types Deep Dive

TypeScript provides built-in utility types:

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Pick specific properties
type PublicUser = Pick<User, "id" | "name">;

// Omit specific properties
type UserWithoutPassword = Omit<User, "password">;

// Make all properties optional
type PartialUser = Partial<User>;

// Make all properties required
type RequiredUser = Required<Partial<User>>;

// Make all properties readonly
type ReadonlyUser = Readonly<User>;
```

## Type Guards

Custom type checking:

```typescript
interface Dog {
  bark(): void;
}

interface Cat {
  meow(): void;
}

// Type predicate
function isDog(animal: Dog | Cat): animal is Dog {
  return (animal as Dog).bark !== undefined;
}

function makeSound(animal: Dog | Cat) {
  if (isDog(animal)) {
    animal.bark(); // ✅ TypeScript knows it's a Dog
  } else {
    animal.meow(); // ✅ TypeScript knows it's a Cat
  }
}
```

## Mapped Types

Transform existing types:

```typescript
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

type Optional<T> = {
  [P in keyof T]?: T[P];
};

// Real-world example
interface ApiResponse {
  data: string;
  status: number;
  error: string;
}

type NullableResponse = Nullable<ApiResponse>;
// Result: { data: string | null; status: number | null; error: string | null }
```

## Best Practices

### 1. Use `unknown` instead of `any`

```typescript
// ❌ Avoid
function process(data: any) {
  return data.value; // No type checking
}

// ✅ Better
function process(data: unknown) {
  if (typeof data === "object" && data !== null && "value" in data) {
    return (data as { value: string }).value;
  }
}
```

### 2. Strict Mode Always

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true
  }
}
```

### 3. Type Inference over Explicit Types

```typescript
// ❌ Redundant
const numbers: number[] = [1, 2, 3];

// ✅ Let TypeScript infer
const numbers = [1, 2, 3];

// ✅ Explicit when needed
const mixed: (string | number)[] = [1, "two", 3];
```

## Conclusion

TypeScript powerful banget kalau kita tau cara maximize-nya. Start with basic types, gradually adopt advanced patterns, dan always enable strict mode. Your future self (and team) will thank you!

**Key takeaways:**

- Use discriminated unions untuk complex state
- Leverage utility types untuk code reuse
- Custom type guards untuk runtime safety
- Generic constraints untuk flexible yet safe APIs

Happy typing! 🎯
