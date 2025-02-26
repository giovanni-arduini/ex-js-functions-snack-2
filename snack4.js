const creaTimer = function (t) {
  return () => {
    setTimeout(() => {
      console.log("Tempo sacaduto");
    }, t);
  };
};

const timer3s = creaTimer(2000);

timer3s();
