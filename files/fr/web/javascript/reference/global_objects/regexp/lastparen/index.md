---
title: RegExp.lastParen ($+)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastParen
---

{{JSRef}} {{non-standard_header}}

La propriété **`lastParen`** est une propriété statique accessible en lecture seule qui contient la dernière correspondance enregistrée dans un groupe (entre parenthèse) si jamais elle existe. `RegExp.$+` est un alias pour cette propriété.

## Syntaxe

```js
RegExp.lastParen;
RegExp["$+"];
```

## Description

La propriété `lastParen` est une propriété statique, ce n'est pas une propriété liée à chaque objet. Il faut donc toujours utiliser la syntaxe `RegExp.lastParen` ou `RegExp['$+'].`

La valeur de la propriété `lastParen` n'est accessible qu'en lecture seule et est modifiée automatiquement à chaque fois qu'il y a une correspondance.

Cet alias ne peut pas être utilisé avec la notation utilisant le point pour l'accès aux propriétés (`RegExp.$+`). En effet, le parseur attend une expression avec "+", dans ce cas, une exception {{jsxref("SyntaxError")}} est levée. Pour utiliser cette notation raccourcie, on utilisera [la notation avec les crochets](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_membres#Notation_avec_crochets).

## Exemples

### Utiliser `lastParen` et `$+`

```js
var re = /(coucou)/g;
re.test("coucou toi !");
RegExp.lastParen; // "coucou"
RegExp["$+"]; // "coucou"
```

## Spécifications

Cette propriété n'est pas standard. Elle ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{non-standard_inline}} {{jsxref("RegExp.input", "RegExp.input ($_)")}}
- {{non-standard_inline}} {{jsxref("RegExp.lastMatch", "RegExp.lastMatch ($&amp;)")}}
- {{non-standard_inline}} {{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}
- {{non-standard_inline}} {{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}}
- {{non-standard_inline}} {{jsxref("RegExp.n", "RegExp.$1-$9")}}
