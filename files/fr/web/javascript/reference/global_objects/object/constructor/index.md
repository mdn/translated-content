---
title: Object.prototype.constructor
slug: Web/JavaScript/Reference/Global_Objects/Object/constructor
---

{{JSRef}}

La propriété **`constructor`** renvoie une référence à la fonction {{jsxref("Object")}} qui a créé le prototype de l'instance. La valeur de cette propriété est une référence à la fonction elle-même, ce n'est pas une chaîne de caractères représentant le nom de la fonction. Cette valeur est en lecture seule pour les valeurs de types primitifs comme `1`, `true` et `"test"`.

## Description

Tous les objets héritent d'une propriété `constructor` de leur prototype (à l'exception de ceux créés avec `Object.create(null)`). Les objets créés sans constructeur (c'est-à-dire avec des littéraux) auront le constructeur correspondant au type du littéral :

```js
var o = {};
o.constructor === Object; // true

var a = [];
a.constructor === Array; // true

var n = new Number(3);
n.constructor === Number; // true
```

## Exemples

### Afficher le constructeur d'un objet

L'exemple ci-dessous crée un constructeur `Arbre`, et un objet de ce type, `monArbre`. Le script affiche ensuite la propriété `constructor` de l'objet `monArbre` :

```js
function Arbre(nom) {
  this.nom = nom;
}

var monArbre = new Arbre("Sequoia");
console.log("monArbre.constructor vaut " + monArbre.constructor);
```

Cet exemple produira le résultat suivant :

```js
monArbre.constructor vaut function Arbre(nom) {
    this.nom = nom;
}
```

### Modifier le constructeur d'un objet

Dans l'exemple suivant, on illustre comment modifier la valeur d'un constructeur pour les objets génériques. Dans l'exemple suivant, seules les valeurs `true`, `1` et `"test"` ne seront pas affectées car leurs constructeurs sont en lecture seule uniquement. Cet exemple montre qu'il ne faut pas se reposer de façon aveugle sur la propriété `constructor` d'un objet.

```js
function Type() {}

var types = [
  new Array(),
  [],
  new Boolean(),
  true, // restera tel quel
  new Date(),
  new Error(),
  new Function(),
  function () {},
  Math,
  new Number(),
  1, // restera tel quel
  new Object(),
  {},
  new RegExp(),
  /(?:)/,
  new String(),
  "test", // restera tel quel
];

for (var i = 0; i < types.length; i++) {
  types[i].constructor = Type;
  types[i] = [
    types[i].constructor,
    types[i] instanceof Type,
    types[i].toString(),
  ];
}

console.log(types.join("\n"));
```

L'exemple produira le résultat suivant :

```js
function Type() {},false,
function Type() {},false,
function Type() {},false,false
function Boolean() {
    [native code]
},false,true
function Type() {},false,Mon Sep 01 2014 16:03:49 GMT+0600
function Type() {},false,Error
function Type() {},false,function anonymous() {

}
function Type() {},false,function () {}
function Type() {},false,[object Math]
function Type() {},false,0
function Number() {
    [native code]
},false,1
function Type() {},false,[object Object]
function Type() {},false,[object Object]
function Type() {},false,/(?:)/
function Type() {},false,/(?:)/
function Type() {},false,
function String() {
    [native code]
},false,test
```

### Modifier le constructeur d'une fonction

La plupart du temps, cette propriété est utilisée afin de définir une fonction en tant que constructeur, c'est-à-dire qu'on l'appellera avec **`new`** et en « attachant » la chaîne de prototypes.

```js
function Parent() {}
Parent.prototype.parentMethod = function parentMethod() {};

function Child() {}
// on redefinit le prototype de child afin qu'il pointe vers celui de Parent
Child.prototype = Object.create(Parent.prototype);

Child.prototype.constructor = Child; // on renvoie le constructeur original Child
```

Pourquoi faut-il écrire cette dernière ligne ? Eh bien, ça dépend.

Essayons de définir les cas où il est nécessaire de réaffecter le constructeur original et les cas où c'est superflu.

Imaginons que l'objet possède une méthode `create()` qui lui permette de créer un autre exemplaire :

```js
function Parent() {}
function CreatedConstructor() {}

CreatedConstructor.prototype = Object.create(Parent.prototype);

CreatedConstructor.prototype.create = function create() {
  return new this.constructor();
};

new CreatedConstructor().create().create();
// error undefined is not a function car constructor === Parent
```

Dans l'exemple précédent, on a une exception car le constructeur pointe vers `Parent`.

Pour éviter cet écueil, il suffit d'affecter le bon constructeur (celui qui sera utilisé ensuite) :

```js
function Parent() {}
function CreatedConstructor() {}

CreatedConstructor.prototype = Object.create(Parent.prototype);
// On réaffecte le bon constructeur afin de l'utiliser plus loin
CreatedConstructor.prototype.constructor = CreatedConstructor;

CreatedConstructor.prototype.create = function create() {
  return new this.constructor();
};

new CreatedConstructor().create().create();
// pas d'exception cette fois-ci
```

Prenons un autre exemple :

```js
function ParentWithStatic() {}

ParentWithStatic.startPosition = { x: 0, y: 0 };
ParentWithStatic.getStartPosition = function getStartPosition() {
  return this.startPosition;
};

function Child(x, y) {
  this.position = {
    x: x,
    y: y,
  };
}

Child.prototype = Object.create(ParentWithStatic.prototype);
Child.prototype.constructor = Child;

Child.prototype.getOffsetByInitialPosition =
  function getOffsetByInitialPosition() {
    var position = this.position;
    var startPosition = this.constructor.getStartPosition(); // error undefined is not a function, since the constructor is Child

    return {
      offsetX: startPosition.x - position.x,
      offsetY: startPosition.y - position.y,
    };
  };
```

Ici, il faudra conserverr le constructeur parent si on veut que le code fonctionne correctement.

En résumé, lorsqu'on paramètre manuellement le constructeur, on peut obtenir des résultats sources de confusion. La plupart du temps, la propriété `constructor` n'est pas utilisée et la réaffecter n'est pas nécessaire.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
