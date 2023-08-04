---
title: Error.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Error/toString
---

{{JSRef}}

La méthode **`toString()`** renvoie une représentation de l'objet {{jsxref("Error")}} sous la forme d'une chaine de caractères.

## Syntaxe

```js
e.toString();
```

### Valeur de retour

Une chaîne de caractères représentant l'objet {{jsxref("Error")}}.

## Description

L'objet {{jsxref("Error")}} surcharge la méthode {{jsxref("Object.prototype.toString()")}} héritée par tous les objets. Sa sémantique est la suivante (en partant du principe que {{jsxref("Object")}} et {{jsxref("String")}} ont leurs valeurs originales) :

```js
Error.prototype.toString = function () {
  "use strict";

  var obj = Object(this);
  if (obj !== this) throw new TypeError();

  var name = this.name;
  name = name === undefined ? "Error" : String(name);

  var msg = this.message;
  msg = msg === undefined ? "" : String(msg);

  if (name === "") return msg;
  if (msg === "") return name;

  return name + ": " + msg;
};
```

## Exemples

```js
var e = new Error("Erreur fatale");
console.log(e.toString()); // "Error: Erreur fatale"

e.name = undefined;
console.log(e.toString()); // "Error: Erreur fatale"

e.name = "";
console.log(e.toString()); // "Erreur fatale"

e.message = undefined;
console.log(e.toString()); // ""

e.name = "salut";
console.log(e.toString()); // "salut"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Error.prototype.toSource()")}} {{non-standard_inline}}
