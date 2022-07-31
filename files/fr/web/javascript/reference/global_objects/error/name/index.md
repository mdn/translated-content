---
title: Error.prototype.name
slug: Web/JavaScript/Reference/Global_Objects/Error/name
tags:
  - Error
  - JavaScript
  - Propriété
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Error/name
original_slug: Web/JavaScript/Reference/Objets_globaux/Error/name
---
{{JSRef}}

La propriété **`name`** est une chaîne de caractères représentant le nom du type d'erreur. La valeur initiale est "Error".

## Description

Par défaut, les instances d'{{jsxref("Error")}} reçoivent le nom "Error". La propriété `name`, associée à la propriété {{jsxref("Error.message", "message")}}, est utilisée par la méthode {{jsxref("Error.prototype.toString()")}} pour créer une représentation de l'erreur sous la forme d'une chaine de caractères.

## Exemples

### Déclencher une erreur personnalisée

```js
var e = new Error("Donnée malformée"); // e.name est "Error"

e.name = "ParseError";
throw e;
// e.toString() renverra "ParseError: Donnée malformée"
```

## Spécifications

| Spécification                                                                                        | Statut                       | Commentaires         |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES1')}}                                                                             | {{Spec2('ES1')}}         | Définition initiale. |
| {{SpecName('ES5.1', '#sec-15.11.4.2', 'Error.prototype.name')}}                 | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES6', '#sec-error.prototype.name', 'Error.prototype.name')}}     | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-error.prototype.name', 'Error.prototype.name')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Error.name")}}

## Voir aussi

- {{jsxref("Error.prototype.message")}}
- {{jsxref("Error.prototype.toString()")}}
