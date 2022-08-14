---
title: RegExp.$1-$9
slug: Web/JavaScript/Reference/Global_Objects/RegExp/n
tags:
  - JavaScript
  - Non-standard
  - Propriété
  - Reference
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/n
original_slug: Web/JavaScript/Reference/Objets_globaux/RegExp/n
---
{{JSRef}} {{non-standard_header}}

Les propriétés non-standard **$1, $2, $3, $4, $5, $6, $7, $8, $9** sont des propriétés statiques accessibles en lecture qui contiennent les différents groupes capturés par une expression rationnelle.

## Syntaxe

```js
RegExp.$1
RegExp.$2
RegExp.$3
RegExp.$4
RegExp.$5
RegExp.$6
RegExp.$7
RegExp.$8
RegExp.$9
```

## Description

Les propriétés $1, ..., $9 sont des propriétés statiques. Ce ne sont pas des propriétés rattachées à une expression rationnelle donnée. Pour cette raison, on utilisera toujours la syntaxe `RegExp.$1`, ..., `RegExp.$9`.

Les valeurs de ces propriétés ne sont accessibles qu'en lecture et sont modifiées par le moteur à chaque fois qu'une nouvelle correspondance est trouvée.

Le nombre de groupe d'une expression rationnelle n'est pas limité. Cependant, l'objet `RegExp` ne contient que les neufs premiers groupes. Pour accéder à chacun des groupes liés à une expression rationnelle donnée, on pourra utiliser les indices du tableau relevant les correspondances.

Ces propriétés peuvent être utilisées pour le texte de remplacement de la méthode {{jsxref("String.replace")}}. Avec cette méthode, on ne préfixera pas les valeurs par `RegExp` (voir l'exemple ci-après), lorsque les parenthèses groupantes ne sont pas utilisées dans l'expression, `$n` sera interprété littérallement (avec `n` un entier positif).

## Exemples

Dans le script qui suit, on utilise {{jsxref("String.prototype.replace()", "replace()")}} d'une instance de {{jsxref("String")}} pour inverser le premier mot et le dernier et placer une virgule entre. Le script utilise `$1` et `$2` pour faire référence aux groupes de l'expression rationnelle :

```js
var re = /(\w+)\s(\w+)/;
var str = 'Jean Biche';
str.replace(re, '$2, $1'); // "Biche, Jean"
RegExp.$1; // "Jean"
RegExp.$2; // "Biche"
```

## Spécifications

Ces propriétés ne sont pas standard, elles ne font partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat("javascript.builtins.RegExp.n")}}

## Voir aussi

- {{non-standard_inline}} {{jsxref("RegExp.input", "RegExp.input ($_)")}}
- {{non-standard_inline}} {{jsxref("RegExp.lastMatch", "RegExp.lastMatch ($&amp;)")}}
- {{non-standard_inline}} {{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}
- {{non-standard_inline}} {{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}
- {{non-standard_inline}} {{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}}
