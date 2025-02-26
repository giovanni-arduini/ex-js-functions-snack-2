const creaContatoreAutomatico = function (time) {
  let counter = 0;
  return () => {
    setInterval(() => {
      counter++;
      console.log(counter);
    }, time);
  };
};

const contaOgniSecondo = creaContatoreAutomatico(1000);
contaOgniSecondo();
