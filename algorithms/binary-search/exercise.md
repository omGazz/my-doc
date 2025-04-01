Ecco un paio di esercizi che ti permetteranno di utilizzare la ricerca binaria con TypeScript:

### Esercizio 1: Trovare l'Indice del Primo Numero Maggiore o Uguale a un Target
Data una lista ordinata di numeri, implementa una funzione che utilizza la ricerca binaria per trovare l'indice del primo numero che è maggiore o uguale a un valore target. Se nessun numero soddisfa questa condizione, restituisci `-1`.

```typescript
// Esercizio 1: Implementa questa funzione
const findFirstGreaterOrEqual = (arr: number[], target: number): number => {
  // Implementa qui la ricerca binaria per trovare il primo elemento >= target
};

// Esempio di utilizzo
const array1 = [1, 3, 5, 7, 9, 11, 15, 18, 20];
const target1 = 10;
const result1 = findFirstGreaterOrEqual(array1, target1);

console.log(result1 !== -1 ? `Indice del primo elemento >= ${target1}: ${result1}` : 'Nessun elemento trovato');
```

### Obiettivo:
Implementa la funzione `findFirstGreaterOrEqual` che restituisce l'indice del primo numero maggiore o uguale a `target` nell'array.

### Esercizio 2: Trovare l'Elemento di Picco
Un elemento di picco in un array è un elemento che è maggiore o uguale ai suoi vicini (se esistono). Scrivi una funzione che utilizzi la ricerca binaria per trovare l'indice di un elemento di picco in un array di numeri.

**Nota:** Un array può avere più di un elemento di picco, in questo caso restituisci l'indice di uno qualsiasi di essi.

```typescript
// Esercizio 2: Implementa questa funzione
const findPeakElement = (arr: number[]): number => {
  // Implementa qui la ricerca binaria per trovare un elemento di picco
};

// Esempio di utilizzo
const array2 = [1, 3, 7, 8, 5, 4, 6, 2];
const result2 = findPeakElement(array2);

console.log(`Indice dell'elemento di picco: ${result2}`);
```

### Obiettivo:
Implementa la funzione `findPeakElement` che trova l'indice di un elemento di picco in un array.