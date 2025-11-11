---
title: BigInt.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/valueOf
---

{{JSRef}}

La méthode **`valueOf()`** renvoie la valeur primitive encapsulée dans un objet {{jsxref("BigInt")}}.

{{InteractiveExample("JavaScript Demo: BigInt.valueOf()")}}

```js interactive-example
console.log(typeof Object(1n));
// Expected output: "object"

console.log(typeof Object(1n).valueOf());
// Expected output: "bigint"
```

## Syntaxe

```js
bigIntObj.valueOf();
```

### Valeur de retour

Un grand entier (_big int_) représentant la valeur primitive de l'objet {{jsxref("BigInt")}} courant.

## Exemples

### Utiliser `valueOf()`

```js
typeof Object(1n); // object
typeof Object(1n).valueOf(); // bigint
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("BigInt.prototype.toString()")}}
