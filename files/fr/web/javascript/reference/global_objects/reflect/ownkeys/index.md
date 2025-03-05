---
title: Reflect.ownKeys()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys
---

{{JSRef}}

La méthode statique **`Reflect.ownKeys()`** renvoie un tableau qui contient les clés des propriétés propres (non héritées) de l'objet `cible`.

{{InteractiveExample("JavaScript Demo: Reflect.ownKeys()")}}

```js interactive-example
const object1 = {
  property1: 42,
  property2: 13,
};

const array1 = [];

console.log(Reflect.ownKeys(object1));
// Expected output: Array ["property1", "property2"]

console.log(Reflect.ownKeys(array1));
// Expected output: Array ["length"]
```

## Syntaxe

```js
Reflect.ownKeys(cible);
```

### Paramètres

- `cible`
  - : L'objet cible dont on souhaite obtenir les noms et symboles des propriétés propres.

### Valeur de retour

Un objet {{jsxref("Array")}} qui contient les clés des propriétés propres de `cible`.

### Exceptions

Une erreur {{jsxref("TypeError")}} si `cible` n'est pas un {{jsxref("Object")}}.

## Description

La méthode `Reflect.ownKeys` renvoie un tableau dont les éléments sont les clés des propriétés propres de l'objet `cible`. Sa valeur de retour est équivalente à `{{jsxref("Object.getOwnPropertyNames", "Object.getOwnPropertyNames(target)", "", 1)}}.concat({{jsxref("Object.getOwnPropertySymbols", "Object.getOwnPropertySymbols(target)", "", 1)}})`.

## Exemples

```js
Reflect.ownKeys({ z: 3, y: 2, x: 1 }); // [ "z", "y", "x" ]
Reflect.ownKeys([]); // ["length"]

var sym = Symbol.for("comète");
var sym2 = Symbol.for("météore");
var obj = {
  [sym]: 0,
  str1: 0,
  773: 0,
  0: 0,
  [sym2]: 0,
  "-1": 0,
  8: 0,
  "seconde str": 0,
};
Reflect.ownKeys(obj);
// [ "0", "8", "773", "str1", "-1", "seconde str", Symbol(comète), Symbol(météore) ]
// Indices dans l'ordre numérique
// Chaînes de caractères dans l'ordre d'insertion
// Symboles dans l'ordre d'insertion
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Reflect")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
