function creaThrottler(f, limit) {
  let lastExecution = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastExecution >= limit) {
      lastExecution = now;
      callback(...args);
    } else {
      console.log("Non posso eseguire");
    }
  };
}

const throttleLog = creaThrottler(() => console.log("Eseguo"), 2000);
