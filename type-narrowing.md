# Type Narrowing in TypeScript

## Introduction

A union type allows a variable to hold values of more than one type. Before using a value, however, TypeScript needs evidence that the value supports the operation being performed. Type narrowing is the process of refining a broad type into a more specific type through runtime checks.

## Detailed Explanation

The `typeof` operator is useful for JavaScript primitive types. After checking a value, TypeScript understands which branch is safe.

```ts
function format(value: string | number): string {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  }

  return value.toFixed(2);
}
```

The `instanceof` operator checks whether an object was created by a particular class or constructor. It is useful when different class instances provide different methods.

```ts
class Dog {
  bark(): string {
    return "Woof";
  }
}

class Cat {
  meow(): string {
    return "Meow";
  }
}

function speak(pet: Dog | Cat): string {
  if (pet instanceof Dog) {
    return pet.bark();
  }

  return pet.meow();
}
```

The `in` operator checks whether a property exists on an object. TypeScript can use that check to distinguish object types with different properties.

```ts
type Admin = { permissions: string[] };
type Guest = { visitCode: string };

function describe(user: Admin | Guest): string {
  if ("permissions" in user) {
    return user.permissions.join(", ");
  }

  return user.visitCode;
}
```

These checks do more than prevent runtime mistakes: they communicate the intended logic to the compiler and to other developers.

## Conclusion

Use `typeof` for primitive values, `instanceof` for class instances, and `in` for property-based object distinctions. Correct narrowing makes union types practical while preserving TypeScript's static safety.
