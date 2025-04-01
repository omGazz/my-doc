Esempi custom hook utili

### 1. **useFetch**
Questo hook semplifica il recupero di dati da un'API gestendo lo stato di caricamento, errori e dati. È particolarmente utile per evitare il codice duplicato quando si effettuano chiamate API. Il `useFetch` utilizza `useState` e `useEffect` per fare una richiesta e aggiornare lo stato al completamento. È ideale per gestire fetch di dati asincroni in modo standardizzato.

### 2. **useDebounce**
`useDebounce` viene utilizzato per ritardare l'esecuzione di una funzione finché l'utente non ha smesso di interagire con un input. È perfetto per applicazioni di ricerca, dove non è necessario eseguire una query al server su ogni singola pressione di tasto, ma piuttosto dopo un certo periodo di inattività. Questo riduce il numero di richieste HTTP e migliora le performance.

### 3. **useLocalStorage**
Un hook utile per gestire lo stato persistente utilizzando il `localStorage` del browser. Fornisce una sintassi simile a `useState`, ma i valori vengono memorizzati nel `localStorage`, consentendo di mantenere i dati tra i ricaricamenti della pagina. È particolarmente utile per salvare preferenze dell'utente come temi, autenticazione, o impostazioni personalizzate.

### 4. **useMediaQuery**
Questo hook consente di rilevare la corrispondenza di una media query (ad esempio, per verificare se lo schermo è mobile). Utilizza l'API `window.matchMedia` e può essere utilizzato per gestire il rendering condizionale o applicare stili differenti direttamente nei componenti, migliorando il comportamento responsive.

### 5. **useClickOutside**
`useClickOutside` è utile per rilevare quando si fa clic al di fuori di un elemento, come una modale o un menu a tendina, e chiudere il componente. Questo hook utilizza un `ref` per tracciare l'elemento di riferimento e un listener per gestire i clic all'esterno, migliorando l'interazione utente.

### 6. **useToggle**
Un hook semplice ma utile che gestisce lo stato booleano con una funzione di toggle. È utile per gestire visibilità di elementi, abilitazione/disabilitazione di pulsanti, o attivazione di modalità di visualizzazione.

### 7. **useScroll**
Questo hook traccia la posizione di scroll della finestra o di un elemento. Può essere usato per animazioni basate sulla posizione dello scroll, aggiornamenti di componenti in base alla visibilità, o per caricare dati dinamicamente (infinite scroll).

### 8. **useIntersectionObserver**
Utilizza l'API `IntersectionObserver` per rilevare quando un elemento entra o esce dal viewport. È ideale per implementare funzionalità come il caricamento lazy delle immagini o infinite scrolling.

### 9. **useUpdateEffect**
Simile a `useEffect`, ma viene eseguito solo quando le dipendenze cambiano, escludendo il primo render. È utile per gestire effetti che devono essere eseguiti solo in seguito a un aggiornamento dello stato e non al montaggio iniziale.

