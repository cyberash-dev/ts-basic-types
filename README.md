# ts-basic-types

A collection of basic TypeScript utility types for everyday development.

## Installation

```bash
npm install ts-basic-types
```

## Types

### Primitive

Represents all primitive JavaScript/TypeScript types.

```typescript
import type { Primitive } from 'ts-basic-types/types/Primitive';

type Primitive = string | number | bigint | symbol | boolean | null | undefined;
```

**Usage examples:**

```typescript
function isPrimitive(value: unknown): value is Primitive {
  return typeof value !== 'object' || value === null;
}

// Type guard for primitive values
const value: unknown = "hello";
if (isPrimitive(value)) {
  // value is now typed as Primitive
  console.log(typeof value); // TypeScript knows this is safe
}
```

### PlainObject

A recursive utility type that represents an object containing only primitive values or other plain objects. Useful for defining JSON-serializable objects or configuration objects.

**Usage examples:**

```typescript
// Valid plain object
const config: PlainObject = {
  name: "myapp",
  port: 3000,
  features: {
    enabled: true,
    timeout: 5000
  }
}; // ✅ Valid

// These would cause TypeScript errors:
const invalidConfig: PlainObject = {
  name: "myapp",
  handler: () => console.log("hello"), // ❌ Functions are not allowed
  date: new Date(), // ❌ Date objects are not allowed
  array: [1, 2, 3] // ❌ Arrays are not allowed
};
```

**Use cases:**
- JSON configuration objects
- API request/response types
- Serializable data structures
- Database record types

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC
