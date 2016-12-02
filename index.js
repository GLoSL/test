"use strict"

var fn_init = function() {
  let lignCdes = [];
  let clients = [
    {name:"Client1", code:"cl1"},
    {name:"Client2", code:"cl2"}
  ];
  let tva = [2, 10, 20.6];
  for(let i = 0; i < 6; i++) {
    let indexTva = Math.round(Math.random()*(tva.length - 1));
    let myTva = tva[indexTva];
    let indexClient = Math.round(Math.random()*(clients.length - 1));
    let myClient = clients[indexClient];
    let montHt = Math.random()*1000;
    lignCdes.push([myClient, myTva, montHt]);
  }
  return lignCdes;
}

console.log(fn_init());
