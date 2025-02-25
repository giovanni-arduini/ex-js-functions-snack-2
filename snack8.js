function contoAllaRovescia(n) {
  let remaining = n;

  const interval = setInterval(() => {
    console.log(remaining);
    remaining--;

    if (remaining < 0) {
      clearInterval(interval);
      console.log("Tempo scaduto!");
    }
  }, 1000);
}

contoAllaRovescia(7);
