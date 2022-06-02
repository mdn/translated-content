---
title: RegExp.input ($_)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/input
tags:
  - JavaScript
  - Non-standard
  - Propriété
  - Reference
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/input
original_slug: Web/JavaScript/Reference/Objets_globaux/RegExp/input
---
{{JSRef}} {{non-standard_header}}

La propriété non-standard **`input`** est une propriété statique de l'expression rationnelle qui contient la chaîne de caractères sur laquelle est effectuée la recherche de correspondances. `RegExp.$_` est un alias de cette propriété.

## Syntaxe

```js
RegExp.input
RegExp.$_
```

## Description

La propriété `input` est statique. Ce n'est pas la propriété d'une instance d'expression rationnelle. Cette propriété doit toujours être utilisée avec la syntaxe `RegExp.input` ou `RegExp.$_.`

La valeur de la propriété **`input`** est modifiée à chaque fois que la chaîne sur laquelle on recherche est modifiée et qu'il y a une correspondance.

## Exemples

### Utiliser `input` et `$_`

```js
var re = /coucou/g;
re.test("coucou toi !");
RegExp.input;         // "coucou toi !"
re.test("toto");      // nouveau test, pas de correspondance
RegExp.$_;            // "coucou toi !"
re.test("coucou monde !"); // nouveau test avec correspondance
RegExp.$_;            // "coucou monde !"
```

## Spécifications

Cette propriété n'est pas standard. Elle ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat("javascript.builtins.RegExp.input")}}

## Voir aussi

- {{non-standard_inline}} {{jsxref("RegExp.lastMatch", "RegExp.lastMatch ($&amp;)")}}
- {{non-standard_inline}} {{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}
- {{non-standard_inline}} {{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}
- {{non-standard_inline}} {{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}}
- {{non-standard_inline}} {{jsxref("RegExp.n", "RegExp.$1-$9")}}
