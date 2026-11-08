// Problem 1: Optional multiplier with a default value
export function multiplyValue(value: number, multiplier?: number): number {
  return value * (multiplier ?? 2);
}
