---
title: "TypeError: 'x' is not iterable"
slug: Web/JavaScript/Reference/Errors/is_not_iterable
---

{{jsSidebar("Errors")}}

## Message

```
TypeError: 'x' is not iterable (Firefox, Chrome)
TypeError: 'x' is not a function or its return value is not iterable (Chrome)
```

## Type d'erreur

{{jsxref("TypeError")}}

## Quel est le problème ?

La valeur passée comme opérande droit de [`for…of`](/fr/docs/Web/JavaScript/Reference/Instructions/for...of) ou comme argument d'une fonction telle que {{jsxref("Promise.all")}} ou {{jsxref("TypedArray.from")}} n'est pas [un objet itérable](/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration). Un objet itérable peut être un objet itérable natif tel qu'un objet {{jsxref("Array")}}, {{jsxref("String")}} ou {{jsxref("Map")}} ou le résultat d'un générateur ou un objet qui implémente [le protocole itérable](/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration#Le_protocole_«_itérable_»).

## Exemples

### Parcourir les propriétés d'un objet

En JavaScript, les objets ne sont pas itérables car ils n'implémentent pas le [protocole itérable](/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration#Le_protocole_«_itérable_»). On ne peut donc pas utiliser `for...of` afin d'en parcourir les propriétés.

```js example-bad
var obj = { France: "Paris", England: "London" };
for (let p of obj) {
  // TypeError: obj is not iterable
  // …
}
```

Si on souhaite utiliser un itérateur pour parcourir les propriétés (leurs noms ou leurs valeurs), on pourra utiliser les méthodes {{jsxref("Object.keys")}} ou {{jsxref("Object.entries")}} qui fournissent des itérateurs :

```js example-good
var obj = { France: "Paris", England: "London" };
// On parcourt les noms des propriétés
for (let country of Object.keys(obj)) {
  var capital = obj[country];
  console.log(country, capital);
}

for (const [country, capital] of Object.entries(obj))
  console.log(country, capital);
```

On pourrait également utiliser un objet {{jsxref("Map")}} :

```js example-good
var map = new Map();
map.set("France", "Paris");
map.set("England", "London");
// On parcourt les noms des propriétés
for (let country of map.keys()) {
  let capital = map[country];
  console.log(country, capital);
}

for (let capital of map.values()) console.log(capital);

for (const [country, capital] of map.entries()) console.log(country, capital);
```

### Itérer grâce à un générateur

[Les générateurs](/fr/docs/Web/JavaScript/Guide/iterateurs_et_generateurs) sont des fonctions qui, lorsqu'elles sont appelées, produisent des objets itérables.

```js example-bad
function* generate(a, b) {
  yield a;
  yield b;
}

for (let x of generate) // TypeError: generate is not iterable
  console.log(x);
```

Lorsqu'elles ne sont pas appelées, l'objet {{jsxref("Function")}} correspondant au générateur peut être appelé mais il n'est pass itérable. Il ne faut donc pas oublier d'invoquer le générateur afin de parcourir les valeurs de l'itérateur qu'il produit.

```js example-good
function* generate(a, b) {
  yield a;
  yield b;
}

for (let x of generate(1, 2)) console.log(x);
```

### Parcourir un itérable spécifique

Les itérables spécifiques (_custom iterables_) peuvent être créés en implémentant la méthode {{jsxref("Symbol.iterator")}}. En implémentant cette méthode, il faut s'assurer que la valeur renvoyée est un objet qui est un itérateur. Autrement dit, l'objet renvoyé doit posséder une méthode `next()`.

```js example-bad
const monIterableVide = {
  [Symbol.iterator]() {
    return []; // [] est un iterable mais pas un itérateur
    // car il n'a pas de méthode next
  },
};

Array.from(monIterableVide); // TypeError: monIterableVide is not iterable
```

Voici une implémentation correcte :

```js example-good
const monIterableVide = {
  [Symbol.iterator]() {
    return [][Symbol.iterator]();
  },
};

Array.from(monIterableVide); // []
```

## Voir aussi

- [Le protocole itérable](/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration#Le_protocole_«_itérable_»)
- {{jsxref("Object.keys")}}
- {{jsxref("Object.entries")}}
- {{jsxref("Map")}}
- [Les générateurs](/fr/docs/Web/JavaScript/Guide/iterateurs_et_generateurs#Générateurs)
- [`for…of`](/fr/docs/Web/JavaScript/Reference/Instructions/for...of)
