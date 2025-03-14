---
title: Reflect.apply()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/apply
---

{{JSRef}}

La méthode statique **`Reflect.apply()`** permet d'appeler une fonction cible avec des arguments donnés.

{{InteractiveExample("JavaScript Demo: Reflect.apply()")}}

```js interactive-example
console.log(Reflect.apply(Math.floor, undefined, [1.75]));
// Expected output: 1

console.log(
  Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]),
);
// Expected output: "hello"

console.log(
  Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index,
);
// Expected output: 4

console.log(Reflect.apply("".charAt, "ponies", [3]));
// Expected output: "i"
```

## Syntaxe

```js
Reflect.apply(cible, argumentThis, listeArguments);
```

### Paramètres

- `cible`
  - : La fonction cible à appeler.
- `argumentThis`
  - : La valeur fournie pour `this` lors de l'appel à _`cible`_.
- `listeArguments`
  - : Un objet semblable à un tableau qui définit les arguments à passer à _`cible`_. S'il vaut {{jsxref("null")}} ou {{jsxref("undefined")}}, aucun argument ne sera passé.

### Valeur de retour

Le résultat de l'appel de la fonction cible indiquée avec la valeur `this` et les arguments indiqués.

### Exceptions levées

Une exception {{jsxref("TypeError")}}, si _cible_ ne peut pas être appelée.

## Description

Avec ES5, on utilise généralement {{jsxref("Function.prototype.apply()")}} pour appeler une fonction avec une valeur `this` donnée et des arguments donnés.

```js
Function.prototype.apply.call(Math.floor, undefined, [1.75]);
```

`Reflect.apply` permet de rendre cela plus concis et facile à comprendre.

## Exemples

```js
Reflect.apply(Math.floor, undefined, [1.75]);
// 1;

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);
// "hello"

Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index;
// 4

Reflect.apply("".charAt, "poneys", [3]);
// "e"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Reflect")}}
- {{jsxref("Function.prototype.apply()")}}
