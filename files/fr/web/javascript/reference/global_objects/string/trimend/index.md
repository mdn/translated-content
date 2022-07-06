---
title: String.prototype.trimEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/trimEnd
tags:
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/trimEnd
original_slug: Web/JavaScript/Reference/Objets_globaux/String/trimEnd
---
{{JSRef}}

La méthode **`trimEnd()`** permet de retirer les blancs situés à la fin d'une chaîne de caractères. `trimRight()` est un synonyme pour cette méthode.

{{EmbedInteractiveExample("pages/js/string-trimend.html")}}

## Syntaxe

```js
str.trimEnd();
str.trimRight();
```

### Valeur de retour

Une nouvelle chaîne de caractères basée sur la chaîne appelante et dont les blancs en fin de chaîne ont été supprimés.

## Description

La méthode `trimEnd()` renvoie la chaîne de caractères sans les blancs présents à partir de la droite de la chaîne. `trimEnd()` ne modifie pas la chaîne elle-même.

### Synonyme

Pour des raisons de cohérence avec les méthodes existantes comme {{jsxref("String.prototype.padEnd")}}, le nom standard de cette méthode est `trimEnd`. Toutefois, à des fins de compatibilité web, `trimRight` est un synonyme de `trimEnd`. Pour certains moteurs JavaScript, on pourra donc avoir :

```js
String.prototype.trimRight.name === "trimEnd";
```

## Exemples

L'exemple qui suit illustre comment afficher la chaîne "   toto":

```js
var str = "   toto  ";

console.log(str.length); // 9

str = str.trimEnd();
console.log(str.length); // 7
console.log(str);        // "   toto"
```

## Spécifications

| Spécification                                                                                                                                                        | État                  | Commentaires        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ------------------- |
| Proposition pour [`String.prototype.{trimStart,trimEnd}`](https://github.com/tc39/proposal-string-left-right-trim/#stringprototypetrimstart--stringprototypetrimend) | Brouillon de niveau 4 | Attendu pour ES2019 |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.trimEnd")}}

## Voir aussi

- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimStart()")}}
