---
title: constructor
slug: Web/JavaScript/Reference/Classes/constructor
tags:
  - Classes
  - ECMAScript 2015
  - JavaScript
  - Language feature
translation_of: Web/JavaScript/Reference/Classes/constructor
browser-compat: javascript.classes.constructor
---
{{jsSidebar("Classes")}}

La méthode **`constructor`** est une méthode qui est utilisée pour créer et initialiser un objet lorsqu'on utilise le mot clé [`class`](/fr/docs/Web/JavaScript/Reference/Statements/class).

{{EmbedInteractiveExample("pages/js/classes-constructor.html")}}

## Syntaxe

```js
constructor() { ... }
constructor(argument0) { ... }
constructor(argument0, argument1) { ... }
constructor(argument0, argument1, ... , argumentN) { ... }
```

## Description

Un constructeur vous permet de fournir toute initialisation personnalisée qui doit être effectuée avant que toute autre méthode puisse être appelée sur un objet instancié.

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const otto = new Person('Otto');

otto.introduce();
```

Si vous ne fournissez pas votre propre constructeur, alors un constructeur par défaut sera fourni pour vous. Si votre classe est une classe de base, le constructeur par défaut est vide :

```js
constructor() {}
```

Si votre classe est une classe dérivée, le constructeur par défaut appelle le constructeur parent, en transmettant tous les arguments qui ont été fournis :

```js
constructor(...args) {
  super(...args);
}
```

Cela permet à un code comme celui-ci de fonctionner :

```js
class ValidationError extends Error {
  printCustomerMessage() {
    return `La validation a échoué :-( (détails : ${this.message})`;
  }
}

try {
  throw new ValidationError("Numéro de téléphone invalide");
} catch (error) {
   if (error instanceof ValidationError) {
    console.log(error.name); // Il s'agit d'une erreur au lieu de ValidationError !
    console.log(error.printCustomerMessage());
  } else {
    console.log('Erreur inconnue', error);
    throw error;
  }
}
```

La classe `ValidationError` n'a pas besoin d'un constructeur explicite, car elle n'a pas besoin de faire d'initialisation personnalisée. Le constructeur par défaut se charge alors d'initialiser le parent `Error` à partir de l'argument qui lui est fourni.

Cependant, si vous fournissez votre propre constructeur, et que votre classe dérive d'une certaine classe parente, alors vous devez appeler explicitement le constructeur de la classe parente en utilisant `super`. Par exemple :

```js
class ValidationError extends Error {
  constructor(message) {
    super(message);  // appelle le constructeur de la classe parent
    this.name = 'ValidationError';
    this.code = '42';
  }

  printCustomerMessage() {
     return `La validation a échoué :-( (détails : ${this.message}, code : ${this.code})`;
  }
}

try {
  throw new ValidationError("Numéro de téléphone invalide");
} catch (error) {
   if (error instanceof ValidationError) {
    console.log(error.name); // Maintenant, c'est une ValidationError !
    console.log(error.printCustomerMessage());
  } else {
    console.log('Unknown error', error);
    throw error;
  }
}
```

Il ne peut y avoir qu'une seule méthode spéciale portant le nom « `constructor` » dans une classe. Avoir plus d'une occurrence d'une méthode `constructor` dans une classe lancera une erreur [`SyntaxError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError).

## Exemples

### Utilisation de la méthode du `constructor`

Cet extrait de code est tiré de l'[échantillon de classes](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([démo en direct](https://googlechrome.github.io/samples/classes-es6/index.html)).

```js
class Square extends Polygon {
  constructor(length) {
    // Ici, on appelle le constructeur de la classe parente avec des longueurs
    // fournies pour la largeur et la hauteur du polygone.
    super(length, length);
    // NOTE : Dans les classes dérivées, `super()` doit être appelé avant de pouvoir
    // utiliser `this`. Si vous ne le faites pas, cela provoquera une ReferenceError.
    this.name = 'Carré';
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.height = value**0.5;
    this.width = value**0.5;
  }
}
```

### Un autre exemple

Ici, le prototype de la classe `Square` est modifié — mais le constructeur de sa classe de base `Polygon` est toujours appelé lorsqu'une nouvelle instance d'un carré est créée.

```js
class Polygon {
    constructor() {
        this.name = "Polygone";
    }
}

class Square extends Polygon {
    constructor() {
        super();
    }
}

class Rectangle {}

Object.setPrototypeOf(Square.prototype, Rectangle.prototype);

console.log(Object.getPrototypeOf(Square.prototype) === Polygon.prototype); //false
console.log(Object.getPrototypeOf(Square.prototype) === Rectangle.prototype); //true

let newInstance = new Square();
console.log(newInstance.name); // Polygone
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`super()`](/fr/docs/Web/JavaScript/Reference/Operators/super)
- [Expression `class`](/fr/docs/Web/JavaScript/Reference/Operators/class)
- [Déclaration `class`](/fr/docs/Web/JavaScript/Reference/Statements/class)
- [`Classes`](/fr/docs/Web/JavaScript/Reference/Classes)
- [Object.prototype.constructor](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)
