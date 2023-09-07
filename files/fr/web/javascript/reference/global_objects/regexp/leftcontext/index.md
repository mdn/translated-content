---
title: RegExp.leftContext ($`)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/leftContext
---

{{JSRef}} {{non-standard_header}}

La propriété non-standard **`leftContext`** est une propriété statique accessible uniquement en lecture. Cette propriété liée aux expressions rationnelles contient la sous-chaîne qui précède la correspondance la plus récente. `` RegExp.$` `` est un alias pour cette propriété.

## Syntaxe

```js
RegExp.leftContext;
RegExp["$`"];
```

## Description

La propriété `leftContext` est une propriété statique, elle n'est donc pas distincte entre les différents objets représentants les expressions rationnelles. Il faut donc toujours utiliser la syntaxe `RegExp.leftContext` ou ``RegExp['$`'].``

La valeur de la propriété `leftContext` n'est accessible uniquement qu'en lecture. Elle est modifiée par le moteur à chaque fois qu'une nouvelle correspondance est trouvée.

L'alias ne peut pas être utilisé avec la notation utilisant le point (`` RegExp.$` ``). En effet, le parseur attend un gabarit de chaîne à la suite de l'accent grave. Si on utilise le point, on aura donc une exception {{jsxref("SyntaxError")}}. Pour cet alias, on utilisera [la notation à base de crochets](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_membres#Notation_avec_crochets).

## Exemples

```js
var re = /monde/g;
re.test("coucou monde !");
RegExp.leftContext; // "coucou "
RegExp["$`"]; // "coucou "
```

## Spécifications

Cette propriété n'est pas standard et ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{non-standard_inline}} {{jsxref("RegExp.input", "RegExp.input ($_)")}}
- {{non-standard_inline}} {{jsxref("RegExp.lastMatch", "RegExp.lastMatch ($&amp;)")}}
- {{non-standard_inline}} {{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}
- {{non-standard_inline}} {{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}}
- {{non-standard_inline}} {{jsxref("RegExp.n", "RegExp.$1-$9")}}
