---
title: String.prototype.trimStart()
slug: Web/JavaScript/Reference/Global_Objects/String/trimStart
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
console.log(str); // "toto  "
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimEnd()")}}
