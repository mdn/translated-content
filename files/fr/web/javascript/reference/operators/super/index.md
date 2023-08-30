---
title: super
slug: Web/JavaScript/Reference/Operators/super
---

{{jsSidebar("Operators")}}

Le mot-clé **`super`** est utilisé afin d'appeler ou d'accéder à des fonctions définies sur l'objet parent.

Les expressions de la forme `super.propriete` et `super[expr]` sont valides pour n'importe quelle [définition de méthode](/fr/docs/Web/JavaScript/Reference/Functions/Method_definitions), que ce soit au sein d'une [classe](/fr/docs/Web/JavaScript/Reference/Classes) ou d'un [littéral objet](/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer).

## Syntaxe

```js
super([arguments]); // Le constructeur parent est appelé
super.functionOnParent([arguments]);
```

## Description

Lorsqu'il est utilisé dans un constructeur, le mot-clé `super` est utilisé seul et doit apparaître avant le mot-clé `this`. Ce mot-clé peut également être utilisé afin d'appeler des fonctions sur un objet parent.

## Exemples

### Utiliser `super` avec les classes

Ce fragment de code est tiré de [cet exemple](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html). Ici on utilise `super()` afin d'éviter la duplication des parties communes entre le constructeur de `Rectangle` et de `Carre`.

```js
class Rectangle {
  constructor(hauteur, largeur) {
    this.name = "Rectangle";
    this.hauteur = hauteur;
    this.largeur = largeur;
  }
  coucou() {
    console.log("Coucou, je suis un " + this.name + ".");
  }
  get aire() {
    return this.hauteur * this.largeur;
  }
  set aire(valeur) {
    this.hauteur = Math.sqrt(valeur);
    this.largeur = Math.sqrt(valeur);
  }
}

class Carre extends Rectangle {
  constructor(longueur) {
    // Ici, on appelle le constructeur de Rectangle
    // qui est l'objet « parent » de Carré
    super(longueur, longueur);

    // Pour les classes dérivées, super() doit être appelé
    // avant d'utiliser 'this' sinon cela entraînera une
    // exception ReferenceError.
    this.name = "Carré";
  }
}
```

### Utiliser super pour appeler des méthodes statiques

Il est possible d'utiliser super pour invoquer des méthodes [statiques](/fr/docs/Web/JavaScript/Reference/Classes/static) :

```js
class Rectangle {
  constructor() {}
  static logNbCotes() {
    return "J'ai 4 côtés";
  }
}

class Carre extends Rectangle {
  constructor() {}
  static logDescription() {
    return super.logNbCotes() + " qui sont tous égaux";
  }
}
Carre.logDescription(); // "J'ai 4 côtés qui sont tous égaux"
```

### Supprimer des propriétés parentes lèvera une exception

Il n'est pas possible d'utiliser l'opérateur [`delete`](/fr/docs/Web/JavaScript/Reference/Operators/delete) sur `super.prop` ou `super[expr]` pour supprimer une propriété de la classe parente, cela renverra une exception [`ReferenceError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError) :

```js
class Base {
  toto() {}
}

class Derivee extends Base {
  delete() {
    delete super.toto; // À ne pas faire
  }
}

new Derivee().delete();
// ReferenceError : suppression invalide avec 'super'
```

### `super.prop` ne peut pas surcharger les propriétés non modifiables

Lorsque des propriétés sont définies sans accès en écriture (_non-writable_), par exemple avec [`Object.defineProperty()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty), `super` ne peut pas surcharger les valeurs de ces propriétés.

```js
class X {
  constructor() {
    Object.defineProperty(this, "prop", {
      configurable: true,
      writable: false,
      value: 1,
    });
  }
}
class Y extends X {
  constructor() {
    super();
  }
  toto() {
    super.prop = 2; // Impossible de surcharger
  }
}
const y = new Y();
y.toto(); // TypeError "prop" est en lecture seule
console.log(y.prop); // 1
```

### Utiliser `super.prop` sur les littéraux objets

`super` peut également être utilisé avec [la notation littérale](/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer). Dans l'exemple qui suit, deux objets définissent chacun une méthode. Le deuxième objet utilise `super` pour appeler la méthode du premier objet. Cela fonctionne grâce à [`Object.setPrototypeOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) avec lequel on définit que le prototype de `obj2` est `obj1`. De cette façon, super peut parcourir la chaîne de prototypes et trouver `methode1` dans `obj1`.

```js
const obj1 = {
  methode1() {
    console.log("méthode 1");
  },
};

const obj2 = {
  methode2() {
    super.methode1();
  },
};

Object.setPrototypeOf(obj2, obj1);
obj2.methode2(); // affiche "méthode 1" dans la console
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les classes](/fr/docs/Web/JavaScript/Reference/Classes)
