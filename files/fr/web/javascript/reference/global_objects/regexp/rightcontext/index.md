---
title: RegExp.rightContext ($')
slug: Web/JavaScript/Reference/Global_Objects/RegExp/rightContext
tags:
  - JavaScript
  - Non-standard
  - Propriété
  - Reference
  - RegExp
  - Regular Expressions
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/rightContext
original_slug: Web/JavaScript/Reference/Objets_globaux/RegExp/rightContext
---
{{JSRef}} {{non-standard_header}}

La propriété non-standard **`rightContext`** est une propriété statique, accessible uniquement en lecture, qui contient la sous-chaîne suivant la correspondance la plus récente. `RegExp.$'` est un alias pour cette propriété.

## Syntaxe

    RegExp.rightContext
    RegExp["$'"]

## Description

La propriété `rightContext` est une propriété statique et n'est pas liée à une instance d'expression rationnelle. Pour cette raison, il faut toujours utiliser la syntaxe `RegExp.rightContext` ou `RegExp["$'"].`

La valeur de la propriété `rightContext` n'est accessible qu'en lecture. Le moteur la modifie à chaque fois qu'une nouvelle correspondance est trouvée.

L'alias ne peut pas être utilisé avec la syntaxe utilisant le point (`RegExp.$'`). En effet, l'analyseur (_parser_) attend un début de chaîne du fait de la simple quote, ce qui provoquerait une exception {{jsxref("SyntaxError")}}. Il faut donc utiliser [la notation à base de crochets](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_membres#Notation_avec_crochets).

## Exemples

```js
var re = /coucou/g;
re.test("coucou monde !");
RegExp.rightContext; // " monde !"
RegExp["$'"];       // " monde !"
```

## Spécifications

Cette propriété n'est pas standard, elle ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat("javascript.builtins.RegExp.rightContext")}}

## Voir aussi

- {{non-standard_inline}} {{jsxref("RegExp.input", "RegExp.input ($_)")}}
- {{non-standard_inline}} {{jsxref("RegExp.lastMatch", "RegExp.lastMatch ($&amp;)")}}
- {{non-standard_inline}} {{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}
- {{non-standard_inline}} {{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}
- {{non-standard_inline}} {{jsxref("RegExp.n", "RegExp.$1-$9")}}
