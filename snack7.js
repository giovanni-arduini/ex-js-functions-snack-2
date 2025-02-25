const eseguiEferma = function (message, startTime, endTime) {
  const interval = setInterval(() => console.log(message), startTime);
  setTimeout(() => clearInterval(interval), endTime);
};

eseguiEferma("Ciao", 1000, 4000);
