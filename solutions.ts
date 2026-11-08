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

// Problem 5: Filter published courses by student count
export interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

export function getPopularCourses(
  courses: Course[],
  minStudents: number,
): Course[] {
  return courses.filter(
    (course: Course): boolean =>
      course.isPublished && course.students >= minStudents,
  );
}

// Problem 6: Pluck a property from each object
export function pluckValues<T, K extends keyof T>(
  items: T[],
  key: K,
): T[K][] {
  return items.map((item: T): T[K] => item[key]);
}

// Problem 7: Employee base class
export class Employee {
  protected name: string;
  private _baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this._baseSalary = baseSalary;
  }

  public getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this._baseSalary}`;
  }
}

export class Manager extends Employee {
  private _department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this._department = department;
  }

  public getRoleInfo(): string {
    return `Manager of ${this._department}: ${this.name}`;
  }
}

// Problem 8: Validate an age asynchronously
export function validateAgeAsync(age: number): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
      return;
    }

    setTimeout((): void => {
      resolve("Access Granted");
    }, 1000);
  });
}