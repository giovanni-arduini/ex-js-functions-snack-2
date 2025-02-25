const stampaOgniSecondo = function (message) {
  setInterval(() => console.log(message), 1000);
};

stampaOgniSecondo("È passato un secondo!");
