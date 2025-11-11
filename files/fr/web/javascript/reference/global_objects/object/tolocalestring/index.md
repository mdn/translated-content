---
title: Object.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toLocaleString
---

{{JSRef}}

La méthode **`toLocaleString()`** renvoie une chaine de caractères représentant l'objet. Cette méthode est destinée à être surchargée par les objets dérivés à des fins spécifiques pour prendre en compte les locales.

{{InteractiveExample("JavaScript Demo: Object.prototype.tolocalestring()")}}

```js interactive-example
const date1 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

console.log(date1.toLocaleString("ar-EG"));
// Expected output: "٢٠‏/١٢‏/٢٠١٢ ٤:٠٠:٠٠ ص"

const number1 = 123456.789;

console.log(number1.toLocaleString("de-DE"));
// Expected output: "123.456,789"
```

## Syntaxe

```js
obj.toLocaleString();
```

### Valeur de retour

Une chaîne de caractères qui représente l'objet en tenant compte de la locale.

## Description

La méthode `toLocaleString` renvoie le résultat de l'appel à la méthode {{jsxref("Object.toString", "toString()")}}.

Cette fonction est destinée à fournir aux objets une méthode générique `toLocaleString`, même si tous ne peuvent l'utiliser. Voir la liste ci-dessous.

### Objets surchargeant la méthode toLocaleString

- {{jsxref("Array")}} : {{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("Number")}} : {{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Date")}} : {{jsxref("Date.prototype.toLocaleString()")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Object.prototype.toString()")}}
