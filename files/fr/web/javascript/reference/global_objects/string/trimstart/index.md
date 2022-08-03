---
title: String.prototype.trimStart()
slug: Web/JavaScript/Reference/Global_Objects/String/trimStart
tags:
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/trimStart
original_slug: Web/JavaScript/Reference/Objets_globaux/String/trimStart
---
{{JSRef}}

La méthode **`trimStart()`** permet de retirer les blancs au début de la chaîne de caractères. `trimLeft()` est un synonyme pour cette méthode.

{{EmbedInteractiveExample("pages/js/string-trimstart.html")}}

## Syntaxe

```js
str.trimStart();
str.trimLeft();
```

### Valeur de retour

Une nouvelle chaîne de caractères dérivant de la chaîne appelante pour laquelle les blancs en début de chaîne ont été retirés.

## Description

La méthode `trimStart()` renvoie la chaîne de caractères dont les blancs à gauche ont été retirés. `trimStart` ne modifie pas la chaîne elle-même.

### Synonyme

Pour des raisons de cohérences avec les méthodes préexistantes (telles que {{jsxref("String.prototype.padStart")}}), le nom standard de cette méthode est `trimStart`. Toutefois, à des fins de compatibilité web, le nom `trimLeft` sera gardé comme un synonyme. Pour certains moteurs JavaScript, on pourra donc avoir :

```js
String.prototype.trimLeft.name === "trimStart";
```

## Exemple

L'exemple qui suit illustre comment afficher la chaîne de caractères `"toto "` en minuscules :

```js
var str = "   toto  ";

console.log(str.length); // 8

str = str.trimStart();
console.log(str.length); // 5
console.log(str);        // "toto  "
```

## Spécifications

| Spécification                                                                                                                                                        | État                  | Commentaires        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ------------------- |
| Proposition pour [`String.prototype.{trimStart,trimEnd}`](https://github.com/tc39/proposal-string-left-right-trim/#stringprototypetrimstart--stringprototypetrimend) | Brouillon de niveau 4 | Attendu pour ES2019 |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.trimStart")}}

## Voir aussi

- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimEnd()")}}
