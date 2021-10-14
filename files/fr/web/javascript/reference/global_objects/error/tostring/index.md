---
title: Error.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Error/toString
tags:
  - Error
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Error/toString
original_slug: Web/JavaScript/Reference/Objets_globaux/Error/toString
---
{{JSRef}}

La méthode **`toString()`** renvoie une représentation de l'objet {{jsxref("Error")}} sous la forme d'une chaine de caractères.

## Syntaxe

    e.toString()

### Valeur de retour

Une chaîne de caractères représentant l'objet {{jsxref("Error")}}.

## Description

L'objet {{jsxref("Error")}} surcharge la méthode {{jsxref("Object.prototype.toString()")}} héritée par tous les objets. Sa sémantique est la suivante (en partant du principe que {{jsxref("Object")}} et {{jsxref("String")}} ont leurs valeurs originales) :

```js
Error.prototype.toString = function () {
  "use strict";

  var obj = Object(this);
  if (obj !== this)
    throw new TypeError();

  var name = this.name;
  name = (name === undefined) ? "Error" : String(name);

  var msg = this.message;
  msg = (msg === undefined) ? "" : String(msg);

  if (name === "")
    return msg;
  if (msg === "")
    return name;

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

| Spécification                                                                                                    | État                         | Commentaires                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                         | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.11.4.4', 'Error.prototype.toString')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-error.prototype.tostring', 'Error.prototype.toString')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-error.prototype.tostring', 'Error.prototype.toString')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Error.toString")}}

## Voir aussi

- {{jsxref("Error.prototype.toSource()")}} {{non-standard_inline}}
