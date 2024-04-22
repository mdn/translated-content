---
title: Object.prototype.__proto__
slug: Web/JavaScript/Reference/Global_Objects/Object/proto
---

{{JSRef}}{{Deprecated_header}}

> **Attention :** Étant donnée la façon dont la plupart des moteurs JavaScript optimisent les performances, modifier le `[[Prototype]]` d'un objet est une opération lente pour chaque navigateur et moteur JavaScript. Les impacts liés aux performances sur ce point sont vastes et subtiles : ils concernent pas uniquement le temps passé à effectuer `obj.__proto__ = ...`, mais peuvent concerner n'importe quel code pour n'importe quel objet dont `[[Prototype]]` a été modifié. Si vous souhaitez obtenir des performances optimales, évitez de modifier le `[[Prototype]]` d'un objet. À la place, il est conseillé de créer un objet avec le prototype voulu en utilisant {{jsxref("Object.create()")}}.

> **Attention :** Bien que la propriété `Object.prototype.__proto__` soit déjà supportée dans la plupart des navigateurs à l'heure actuelle, son comportement n'a été standardisé que récemment avec la spécification ECMAScript 2015. Si vous avez besoin d'utiliser cette propriété dans des environnements antérieurs à ES2015, il est recommandé d'utiliser {{jsxref("Object.getPrototypeOf()")}}.

La propriété `__proto__` de {{jsxref("Object.prototype")}} est une propriété accesseur (un couple de fonction avec un accesseur (_getter_) et un mutateur (_setter_)) qui expose le `[[Prototype]]` interne (qui est soit un objet, soit {{jsxref("null")}}) de l'objet courant.

L'utilisation de `__proto__` est sujet à controverse. Elle a été déconseillée par plusieurs personnes et n'avait jamais été incluse dans la spécification ECMAScript. Cependant, de nombreux navigateurs ont décidé de l'implémenter. À l'heure actuelle, la propriété `__proto__` a été standardisée avec la spécification ECMAScript 2015 et sera officiellement supportée à l'avenir. Une alternative à cette propriété peut être l'utilisation des méthodes {{jsxref("Object.getPrototypeOf")}}/{{jsxref("Reflect.getPrototypeOf")}} et {{jsxref("Object.setPrototypeOf")}}/{{jsxref("Reflect.setPrototypeOf")}}. Cependant, modifier le `[[Prototype]]` d'un objet est toujours une opération lente qui doit être évitée le plus possible pour des raisons de performances.

La propriété `__proto__` peut également être utilisée avec un littéral objet afin de définir le `[[Prototype]]` lors de la construction (ce qui en fait une alternative à {{jsxref("Object.create()")}}. Voir la page sur {{jsxref("Opérateurs/Initialisateur_objet","les initialisateurs d'objet","",1)}}.

## Syntaxe

```js
var proto = obj.__proto__;
```

> **Note :** le nom de la propriété est composé de deux tirets bas, suivis de « proto », suivis par deux tirets bas (_underscores_)

## Description

L'accesseur `__proto__` expose la valeur du `[[Prototype]]` interne d'un objet.

- Pour les objets créés via un littéral objet, cette valeur est {{jsxref("Object.prototype")}}.
- Pour les objet créés via un littéral de tableau, cette valeur est {{jsxref("Array.prototype")}}.
- Pour les fonctions, cette valeur est {{jsxref("Function.prototype")}}.
- Pour les objets créés en utilisant `new fun`, avec `fun` un des constructeurs natif de fonctions, fournis par JavaScript ({{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Date")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("String")}}, etc.), cette valeur est `fun.prototype`.
- Pour les objets créés en utilisant `new fun`, avec `fun` une function definie dans un script, cette valeur est la valeur de `fun.prototype` au moment où `new fun` est évaluée. (Ainsi, si on affecte une nouvelle valeur à `fun.prototype`, les instances crées précédemment conserveront leur `[[Prototype]]`, les objets créés par la suite bénéficieront de la nouvelle valeur pour leur `[[Prototype]]`.)

Le mutateur `__proto__` permet de changer le `[[Prototype]]` d'un objet. Cet objet doit être extensible selon {{jsxref("Object.isExtensible")}}, si ce n'est pas le cas, une exception {{jsxref("TypeError")}} sera renvoyée. La valeur fournie pour le nouveau prototype doit être un objet ou {{jsxref("null")}}. Toute autre valeur entraînera un échec silencieux.

Pour plus d'éléments sur le fonctionnement de l'héritage et des prototypes, voir la page sur [l'héritage et les chaînes de prototypes](/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).

Le propriété `__proto__` n'est qu'une propriété accesseur (composée d'une fonction accesseur (_getter_) et d'une fonction mutateur (_setter_)) pour {{jsxref("Object.prototype")}}. Si l'accès à `__proto__` consulte {{jsxref("Object.prototype")}}, on trouvera la propriété. Un accesseur qui ne consulte pas {{jsxref("Object.prototype")}} ne pourra pas trouver le prototype. Si une propriété `__proto__` est trouvée avant que {{jsxref("Object.prototype")}} ne soit consulté, cette propriété « cachera » {{jsxref("Object.prototype")}}.

```js
var aucunProto = Object.create(null);

console.log(typeof aucunProto.__proto__); // undefined
console.log(Object.getPrototypeOf(aucunProto)); // null

aucunProto.__proto__ = 17;

console.log(aucunProto.__proto__); // 17
console.log(Object.getPrototypeOf(aucunProto)); // null

var protoCaché = {};
Object.defineProperty(protoCaché, "__proto__", {
  value: 42,
  writable: true,
  configurable: true,
  enumerable: true,
});

console.log(protoCaché.__proto__); // 42
console.log(Object.getPrototypeOf(protoCaché) === Object.prototype); // true
```

## Exemples

Dans ce qui suit, on crée un nouvelle instance d'`Employé` et on teste si `__proto__` est bien le même objet que le prototype de son constructeur.

> **Attention :** Les remarques données plus haut sur les atteintes à la performance restent valables pour ces exemples. Ces exemples permettent uniquement d'illustrer le fonctionnement de `__proto__`, ils ne font pas office de recommandations.

```js
// On déclare une fonction à utiliser comme constructeur
function Employé() {
  /* on initialise l'instance */
}

// On crée une nouvelle instance d'Employé
var fred = new Employé();

// On teste l'équivalence
fred.__proto__ === Employé.prototype; // true
```

À cet instant, `fred` hérite de `Employé`. On peut toutefois changer ça en assignant un nouvel objet à `fred.__proto__` :

```js
// Assigner un nouvel objet à __proto__
fred.__proto__ = Object.prototype;
```

`fred` n'hérite plus de `Employé.prototype`, mais de `Object.prototype`. Il perd donc les propriétés héritées de `Employé.prototype`.

Cela n'est possible que pour les objets {{jsxref("Object.isExtensible", "extensibles","",1)}}. La propriété `__proto__` d'un objet non-extensible ne peut pas être changée :

```js
var obj = {};
Object.preventExtensions(obj);

obj.__proto__ = {}; // renvoie une exception TypeError
```

On notera que même la propriété `__proto__` de `Object.prototype` peut être redéfinie tant que la chaîne de prototypes se termine par `null` :

```js
var b = {};

Object.prototype.__proto__ = Object.create(
  null, //[[Prototype]]
  {
    salut: {
      value: function () {
        console.log("salut");
      },
    },
  },
);

b.salut();
```

Si la propriété `__proto__` de {{jsxref("Object.prototype")}} ne permet pas d'aboutir à {{jsxref("null")}} via la chaîne de prototypes, on a une chaîne cyclique et on doit avoir une exception {{jsxref("TypeError")}} "cyclic \_\_proto\_\_ value".

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}}
