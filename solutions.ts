// Problem 1: Optional multiplier with a default value
export function multiplyValue(value: number, multiplier?: number): number {
  return value * (multiplier ?? 2);
}

// Problem 2: Type narrowing for string, number, and boolean inputs
export function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  }

  if (typeof value === "number") {
    return value * 10;
  }

  return value ? "Active" : "Inactive";
}