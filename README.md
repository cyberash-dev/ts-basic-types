# ts-useful-types

A collection of useful TypeScript utility types for everyday development.

## Installation

```bash
npm install ts-useful-types
```

## Types

### Primitive

Represents all primitive JavaScript/TypeScript types.

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

### PlainObject<T>

A recursive utility type that ensures an object contains only primitive values or other plain objects. Useful for defining JSON-serializable objects or configuration objects.

**Usage examples:**

```typescript
// Valid plain object
type Config = PlainObject<{
  name: string;
  port: number;
  features: {
    enabled: boolean;
    timeout: number;
  };
}>;

const config: Config = {
  name: "myapp",
  port: 3000,
  features: {
    enabled: true,
    timeout: 5000
  }
}; // ✅ Valid

// Invalid - contains non-primitive values
type InvalidConfig = PlainObject<{
  name: string;
  handler: () => void; // ❌ Functions are not allowed
  date: Date; // ❌ Date objects are not allowed
}>;
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
