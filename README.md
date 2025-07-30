# ts-basic-types

A collection of basic TypeScript utility types for everyday development.

## Installation

```bash
npm install ts-basic-types
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

### PlainObject

A recursive utility type that represents an object containing only primitive values, other plain objects, or arrays of any nesting level. Useful for defining JSON-serializable objects or configuration objects.

**Usage examples:**

```typescript
// Valid plain object
const config: PlainObject = {
  name: "myapp",
  port: 3000,
  features: {
    enabled: true,
    timeout: 5000
  },
  tags: ["web", "api", "server"], // ✅ Arrays are now supported
  matrix: [[1, 2], [3, 4]], // ✅ Nested arrays are supported
  mixed: [
    { id: 1, active: true },
    { id: 2, active: false }
  ], // ✅ Arrays of objects are supported
  deepNested: [[[{ value: 42 }]]] // ✅ Deep nesting is supported
}; // ✅ Valid

// These would cause TypeScript errors:
const invalidConfig: PlainObject = {
  name: "myapp",
  handler: () => console.log("hello"), // ❌ Functions are not allowed
  date: new Date(), // ❌ Date objects are not allowed
  symbols: [Symbol("test")] // ❌ Non-primitive values in arrays are not allowed
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
