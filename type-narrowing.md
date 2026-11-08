# Type Narrowing in TypeScript

## Introduction

Type narrowing is the process of refining a broad type into a more specific type inside a particular branch of code. It lets TypeScript verify that an operation is valid before it runs, especially when values can have several possible shapes.

## Practical narrowing

With a union, `typeof` checks primitive values and narrows the variable for the selected branch:

```ts
function describe(value: string | number): string {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  }
  return value.toFixed(2);
}
```

For class instances, `instanceof` checks the runtime prototype chain:

```ts
class ApiError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

function messageFor(error: Error | ApiError): string {
  if (error instanceof ApiError) {
    return `${error.statusCode}: ${error.message}`;
  }
  return error.message;
}
```

The `in` operator is useful when alternatives are object types with different properties:

```ts
type EmailContact = { email: string };
type PhoneContact = { phone: string };

function contactLabel(contact: EmailContact | PhoneContact): string {
  if ("email" in contact) return contact.email;
  return contact.phone;
}
```

These checks are executable JavaScript, not just compiler hints. TypeScript follows the condition and control flow to understand which members are safe in each branch. A good check should match a real runtime distinction; casting a value merely silences the compiler without proving that distinction.

## Conclusion

Use `typeof` for primitives, `instanceof` for class instances, and `in` for object properties. Thoughtful narrowing documents the cases your program handles and catches unsafe assumptions during development.
