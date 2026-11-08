# Generics and Promise Types in TypeScript

## Introduction

Generics let a function or type work with different value types while keeping the relationship between its inputs and outputs. This is especially useful for asynchronous code: a promise represents a value that will be available later, and `Promise<T>` describes the value it will eventually fulfill with.

## Reusable types for asynchronous results

Consider a helper that returns its input after an asynchronous step:

```ts
function later<T>(value: T): Promise<T> {
  return new Promise<T>((resolve): void => {
    setTimeout((): void => resolve(value), 10);
  });
}
```

Calling `later("ready")` produces a `Promise<string>`; calling `later(42)` produces a `Promise<number>`. The compiler preserves each type, so consumers receive the right value without unsafe casts.

A generic API wrapper can express the same idea for different response shapes:

```ts
async function fetchJson<T>(url: string): Promise<T> {
  const response: Response = await fetch(url);
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  return (await response.json()) as T;
}
```

The caller supplies the expected result type, such as `fetchJson<User[]>("/users")`, and gets a `Promise<User[]>`. This annotation helps the rest of the program, though it does not validate JSON at runtime; untrusted data still needs runtime checks.

Generics also keep utility functions reusable. A function accepting `Promise<T>` can await it and return `T` without discarding the specific result type. In contrast, using `any` would allow arbitrary operations and erase useful compiler feedback.

## Conclusion

Use a type parameter when multiple calls should preserve their own input or result type. `Promise<T>` carries that type across the asynchronous boundary, making reusable APIs clearer and safer.
