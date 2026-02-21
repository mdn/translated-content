---
title: Error.prototype.name
short-title: name
slug: Web/JavaScript/Reference/Global_Objects/Error/name
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété de donnée **`name`** de `Error.prototype` est partagée par toutes les instances de {{JSxRef("Error")}}. Elle représente le nom du type d'erreur. Pour `Error.prototype.name`, la valeur initiale est `"Error"`. Les sous-classes comme {{JSxRef("TypeError")}} et {{JSxRef("SyntaxError")}} fournissent leur propre propriété `name`.

## Valeur

Une chaîne de caractères. Pour `Error.prototype.name`, la valeur initiale est `"Error"`.

{{js_property_attributes(1, 0, 1)}}

## Description

Par défaut, les instances de {{JSxRef("Error")}} reçoivent le nom "Error". La propriété `name`, associée à la propriété {{JSxRef("Error/message", "message")}}, est utilisée par la méthode {{JSxRef("Error.prototype.toString()")}} pour créer une représentation de l'erreur sous la forme d'une chaîne de caractères.

## Exemples

### Déclencher une erreur personnalisée

```js
const e = new Error("Donnée malformée"); // e.name est "Error"

e.name = "ParseError";
throw e;
// e.toString() retournera "ParseError: Donnée malformée"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{JSxRef("Error.prototype.message")}}
- La méthode {{JSxRef("Error.prototype.toString()")}}
