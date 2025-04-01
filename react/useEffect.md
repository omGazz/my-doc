### 1. **Esecuzione una sola volta (al montaggio)**

Se si vuole che l'`useEffect` venga eseguito una sola volta, al momento della creazione del componente (montaggio), bisogna fornire un **array di dipendenze vuoto** (`[]`). Questo indica a React di eseguire l'effetto solo la prima volta che il componente viene montato, e mai più.

Esempio:
```typescript
import React, { useEffect } from 'react';

const MyComponent: React.FC = () => {
  useEffect(() => {
    console.log('Effetto eseguito una volta al montaggio');
    // Questo effetto viene eseguito una sola volta

    // Cleanup opzionale
    return () => {
      console.log('Cleanup durante lo smontaggio del componente');
    };
  }, []); // Array di dipendenze vuoto

  return <div>My Component</div>;
};

export default MyComponent;
```

In questo esempio, il codice all'interno dell'`useEffect` viene eseguito solo quando il componente viene montato per la prima volta. Il **cleanup** (funzione di ritorno opzionale) viene eseguito quando il componente viene smontato.

### 2. **Esecuzione ad ogni aggiornamento**

Se **non si fornisce un array di dipendenze**, l'`useEffect` verrà eseguito **ad ogni rendering** del componente, cioè ogni volta che lo stato o le proprietà del componente cambiano.

Esempio:
```typescript
useEffect(() => {
  console.log('Effetto eseguito ad ogni rendering');
});
```

In questo caso, l'effetto verrà eseguito ogni volta che il componente viene aggiornato.

### 3. **Esecuzione condizionata (dipendenze specifiche)**

Se si fornisce un array di dipendenze contenente una o più variabili, l'`useEffect` verrà eseguito **solo quando una di queste dipendenze cambia**.

Esempio:
```typescript
import React, { useState, useEffect } from 'react';

const MyComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effetto eseguito quando "count" cambia');
  }, [count]); // L'effetto viene eseguito solo quando "count" cambia

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementa</button>
    </div>
  );
};

export default MyComponent;
```

In questo esempio, l'`useEffect` viene eseguito solo quando la variabile `count` cambia.

### 4. **Esecuzione durante il montaggio e lo smontaggio**

Quando un `useEffect` viene configurato con un **array di dipendenze vuoto**, la funzione di cleanup verrà eseguita solo quando il componente viene smontato.

Esempio:
```typescript
useEffect(() => {
  console.log('Componente montato');

  return () => {
    console.log('Componente smontato');
  };
}, []); // L'array vuoto indica che l'effetto viene eseguito una sola volta al montaggio
```

### Riassunto

- **`useEffect(() => {...}, [])`**: Viene eseguito una volta al montaggio e il cleanup (se presente) al momento dello smontaggio.
- **`useEffect(() => {...})`**: Viene eseguito ad ogni rendering del componente.
- **`useEffect(() => {...}, [dep1, dep2])`**: Viene eseguito solo quando almeno una delle dipendenze cambia.
- **Cleanup (`return () => {...}`)**: Se l'`useEffect` include una funzione di cleanup, questa viene eseguita prima di eseguire l'effetto successivo o quando il componente viene smontato.

In conclusione, il comportamento dell'`useEffect` può essere controllato in base alle necessità, permettendo di eseguire il codice solo al momento opportuno.