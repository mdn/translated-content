---
title: Intl​.List​Format​.prototype​.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/formatToParts
tags:
  - Internationalisation
  - Intl
  - JavaScript
  - ListFormat
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/formatToParts
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/ListFormat/formatToParts
---
{{JSRef}}{{Draft}}

La méthode **`Intl.ListFormat.prototype.formatToParts()`** renvoie un tableau ({{jsxref("Array")}}) d'objets représentants les différentes composantes de la chaine de caractères qui est le résultat du formatage de la liste (selon les options de locale et de style indiquées).

## Syntaxe

    Intl.ListFormat.prototype.formatToParts(list)

### Paramètres

- `list`
  - : Un tableau ({{jsxref("Array")}}) de valeurs à mettre en forme selon une locale et des options de style.

### Valeur de retour

Un tableau ({{jsxref("Array")}}) de fragments composants la chaîne de caractères pour la liste formatée.

## Description

Alors que la méthode {{jsxref("ListFormat.prototype.format()", "Intl.ListFormat.prototype.format()")}} renvoie une chaîne de caractères avec la liste formatée (en fonction de la locale et des options de style), `formatToParts()` renvoie un tableau des différentes composantes de cette chaîne.

Chaque élément du tableau résultant possède deux propriétés : `type` et `value`. La propriété `type` pourra valoir `"element"` (pour indiquer une valeur de la liste) ou `"literal"` (pour indiquer un élément linguistique). La propriété `value` fournit quant à elle le contenu du fragment sous forme d'une chaîne de caractères.

Les options de locale et de style utilisées pour le formatage sont fournies lors de la construction de l'instance {{jsxref("ListFormat", "Intl.ListFormat")}}.

## Exemples

```js
const fruits = ['Apple', 'Orange', 'Pineapple'];
const myListFormat = new Intl.ListFormat('en-GB', { style: 'long', type: 'conjunction' });

console.table(myListFormat.formatToParts(fruits));
// [
//  { "type": "element", "value": "Apple" },
//  { "type": "literal", "value": ", " },
//  { "type": "element", "value": "Orange" },
//  { "type": "literal", "value": ", and " },
//  { "type": "element", "value": "Pineapple" }
// ]
```

## Spécifications

| Spécification                                                                                                                                       | État    | Commentaires |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------------ |
| [`Intl.ListFormat.prototype.formatToParts` proposal](https://tc39.github.io/proposal-intl-list-format/#sec-Intl.ListFormat.prototype.formatToParts) | Stage 3 |              |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Intl.ListFormat.formatToParts")}}

## Voir aussi

- {{jsxref("ListFormat", "Intl.ListFormat")}}
- {{jsxref("ListFormat.prototype.format()", "Intl.ListFormat.prototype.format()")}}
- {{jsxref("RelativeTimeFormat.formatToParts()", "Intl.RelativeTimeFormat.prototype.formatToParts()")}}
- {{jsxref("NumberFormat.formatToParts()", "Intl.NumberFormat.prototype.formatToParts()")}}
- {{jsxref("DateTimeFormat.formatToParts()", "Intl.DateTimeFormat.prototype.formatToParts()")}}
