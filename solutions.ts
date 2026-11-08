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

// Problem 3: Format a readonly coordinate tuple
export function formatCoordinate(
  coordinate: readonly [number, number, string],
): string {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

// Problem 4: Concatenate arrays of the same type
export function concatenateArrays<T>(...arrays: T[][]): T[] {
  const combined: T[] = [];

  for (const array of arrays) {
    combined.push(...array);
  }

  return combined;
}