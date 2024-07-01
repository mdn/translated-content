---
title: RegExp.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/toString
---

{{JSRef}}

La méthode **`toString()`** renvoie une chaîne de caractères représentant l'expression rationnelle.

{{EmbedInteractiveExample("pages/js/regexp-prototype-tostring.html", "taller")}}

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
