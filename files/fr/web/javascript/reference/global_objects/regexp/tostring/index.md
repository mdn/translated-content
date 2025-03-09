---
title: RegExp.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/toString
---

{{JSRef}}

La méthode **`toString()`** renvoie une chaîne de caractères représentant l'expression rationnelle.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.toString()", "taller")}}

```js interactive-example
console.log(new RegExp("a+b+c"));
// Expected output: /a+b+c/

console.log(new RegExp("a+b+c").toString());
// Expected output: "/a+b+c/"

console.log(new RegExp("bar", "g").toString());
// Expected output: "/bar/g"

console.log(new RegExp("\n", "g").toString());
// Expected output (if your browser supports escaping): "/\n/g"

console.log(new RegExp("\\n", "g").toString());
// Expected output: "/\n/g"
```

## Syntaxe

```js
regexObj.toString();
```

### Valeur de retour

Une chaîne de caractères représentant l'expression rationnelle appelante.

## Description

L'objet {{jsxref("RegExp")}} surcharge la méthode `toString` de l'objet {{jsxref("Object")}}. Il n'hérite donc pas de {{jsxref("Object.prototype.toString()")}}. Pour les objets `RegExp`, la méthode `toString()` renvoie une représentation de l'expression rationnelle sous la forme d'une chaîne de caractères.

## Exemples

### Utiliser `toString()`

L'exemple qui suit affiche la chaîne correspondant à la valeur de l'objet {{jsxref("Global_Objects/RegExp", "RegExp")}} :

```js
var maRegExp = new RegExp("a+b+c");
console.log(maRegExp.toString()); // affiche "/a+b+c/"

var toto = new RegExp("truc", "g");
console.log(toto.toString()); // affiche "/truc/g"
```

### Les expressions ratonnelles vides et l'échappement

À partir d'ECMAScript 5, la méthode renvoie la chaîne `"(?:)"` pour les expressions vides. De plus, les fins de lignes (telles que "\n") sont désormais échappées.

```js
new RegExp().toString(); // "(?:)"

new RegExp("\n").toString() === "/\n/"; // true avant ES5
new RegExp("\n").toString() === "/\\n/"; // true à partir d'ES5
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Object.prototype.toString()")}}
