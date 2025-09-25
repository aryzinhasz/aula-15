function Animal() {}

Animal.prototype.falar = function () {
  return this;
};

Animal.comer = function () {
  return this;
};

let obj = new Animal();
let falar = obj.falar;
falar(); // objeto global

let comer = Animal.comer;
comer(); // objeto global

class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(this.nome + " emite um barulho.");
  }
}

let Animal = {
  falar() {
    console.log(this.nome + " faça barulho.");
  },
};

class Cachorro {
  constructor(nome) {
    this.nome = nome;
  }
}

Object.setPrototypeOf(Cachorro.prototype, Animal);

let cachorro = new Cachorro("Mitzie");
cachorro.falar(); //Mitzie faça barulho.
