const binarySearch = (arr: number[], target: number): number | null => {
  const search = (left: number, right: number): number | null => {
    if (left > right) return null;

    const mid = Math.floor((left + right) / 2);
    const midValue = arr[mid];

    if (midValue === target) return mid;
    if (midValue < target) return search(mid + 1, right);
    return search(left, mid - 1);
  };

  return search(0, arr.length - 1);
};

// Esempio di utilizzo
const array = Array.from({ length: 32 }, (_, index) => index + 1);
const target = 28;
const result = binarySearch(array, target);

console.log(
  result !== null
    ? `Elemento trovato all'indice: ${result}`
    : "Elemento non trovato"
);
