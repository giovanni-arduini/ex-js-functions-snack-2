function sequenzaOperazioni(oprerations, interval) {
  oprerations.forEach((operation, i) => {
    setTimeout(() => {
      operation();
    }, interval * i);
  });
}

sequenzaOperazioni(
  [() => console.log("1"), () => console.log("2"), () => console.log("3")],
  2000
);
