# Algoritmo della ricerca binaria

Poniamo di avere una lista di 32 elementi, un array con i numeri che vanno da **1** a **32**.

Il numero di cui dobbiamo trovare la posizione è il numero **28** ma noi non lo sappiamo:

#### Primo tentativo:
Prendiamo la lista e la dividiamo in 2, quindi 16 e chiediamo **Il numero che stiamo cercando è più grande di 16?**

SI  

Quindi sappiamo che il numero che stiamo cercando è nella seconda parte della lista ossia dalla posizione 16 alla posizione 32. Elimiano la parte da 1 a 16

#### Secondo tentativo

la nostra lista ora va da 16 a 32 quindi devo trovare il numero a metà tra questi, perciò **16 + 32 / 2 = 24** e chiediamo **Il numero che stiamo cercando è più grande di 24?**

SI

quindi, come abbiamo fatto prima, eliminiamo i numeri che vanno da **16** a **24**

#### Terzo tentativo

la nostra lista ora va da **24** a **32** e come ho fatto prima e farò sempre devo trovare il numero a metà tra 24 e 32 perciò **24 + 32 / 2 = 28**

**28 TROVATO!**

In questo caso siamo riusciti a trovare il numero che stavamo cercando in soli 3 tentativi, ma ad ogni modo anche nel peggiore dei casi, saremmo riusciti a trovare il numero che stavamo cercando in **O(log 32)** ossia **5 tentativi**