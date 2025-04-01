# Ricerca Binaria

La ricerca binaria è un algoritmo che permette di compiere una ricerca in una lista ordinata in molti meno passaggi di quella che viene chiamata **Ricerca semplice**.

### Ricerca semplice
Con ricerca semplice si intende avere, per esempio, un array di 32 elementi ordinati. Nella peggiore delle ipotesi ho bisogno di 32 tentativi per trovare l'elemento che sto cercando. Usando la notazione _Big O_ (Big Oh), ossia una speciale notazione che dice quanto è veloce un algoritmo.
In questo caso la "velocità" dell'algoritmo è O(n) dove n è il numero di tentativi necessari nella peggiore delle ipotesi. In questo contesto quindi la ricerca semplice eseguita su un array di 32 elementi avrà una velocità di O(32).

### Ricerca binaria
La ricerca binaria viene effetttuata in modo diverso da quella semplice, ma spiegherò i passaggi da seguire dopo, adesso voglio paralre della velocità di questa ricerca.
Se la _ricerca semplice_ ha una velocità di O(n), la _ricerca binaria_ ha una velocità di **O(log n)**, ossia per trovare la risposta giusta servono **log n** tentativi dove **n** è la lunghezza della lista ordinata e la base di log è 2. Quindi, riprendendo la nostra lista ordinata di 32 elementi, la velocità della ricerca binaria sarà di **log(32)=5** perchè 2 * 2 * 2 * 2 * 2 = 32.

### Velocità a confronto
Su una lista di 32 elementi:

| Metodo             | Numero di tentativi |
|--------------------|---------------------|
| **Ricerca Semplice** | 32                  |
| **Ricerca Binaria**  | 5                   |
