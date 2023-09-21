import Category from "./models/enums/Category";
import Complexity from "./models/enums/Complexity";

function enumToString(e: unknown[]) {
  return e.slice(0, e.length / 2);
}

function getComplexityStrings() {
  return enumToString(Object.values(Complexity)) as string[];
}

function getCategoriesString() {
  return enumToString(Object.values(Category)) as string[];
}

function stringToOptionsMapper(input: string) {
  if (input.length === 0) {
    return [];
  }
  return input.split(', ').map((value: string) => ({
    value: value,
    label: value
  }));
}

export { getComplexityStrings, getCategoriesString, stringToOptionsMapper };