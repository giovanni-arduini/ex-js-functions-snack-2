const sum = (n1, n2) => n1 + n2;
const multiply = (n1, n2) => n1 * n2;

const eseguiOperazione = (n1, n2, operazione) => operazione(n1, n2);

eseguiOperazione(3, 4, multiply);
