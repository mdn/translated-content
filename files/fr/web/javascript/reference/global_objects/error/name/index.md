---
title: Error.prototype.name
slug: Web/JavaScript/Reference/Global_Objects/Error/name
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

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Error.prototype.message")}}
- {{jsxref("Error.prototype.toString()")}}
