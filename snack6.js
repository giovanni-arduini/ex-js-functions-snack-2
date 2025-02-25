// const creaContatoreAutomatico = function (time) {
//   let counter = 0;
//   return () =>
//     setInterval(() => {
//       counter++;
//       console.log(counter);
//     }, time);
// };

// creaContatoreAutomatico(1000);

const creaContatoreAutomatico = function (time) {
  let counter = 0;
  return function () {
    setInterval(() => {
      counter++;
      console.log(counter);
    }, time);
  };
};

creaContatoreAutomatico(1000)();
