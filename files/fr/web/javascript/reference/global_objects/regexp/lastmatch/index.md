---
title: RegExp.lastMatch ($&)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch
tags:
  - JavaScript
  - Non-standard
  - Propriété
  - Reference
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch
original_slug: Web/JavaScript/Reference/Objets_globaux/RegExp/lastMatch
---
{{JSRef}} {{non-standard_header}}

La propriété non-standard **`lastMatch`** est une propriété statique en lecture seule pour les expressions rationnelles qui contient les caractères de la dernière correspondance. `RegExp.$&` est un alias pour cette propriété.

## Syntaxe

    RegExp.lastMatch
    RegExp['$&']

## Description

La propriété `lastMatch` est une propriété statique, ce n'est pas une propriété pour chaque objet qui représente une expression rationnelle. Cette propriété doit donc toujours être utilisée avec la syntaxe `RegExp.lastMatch` ou `RegExp['$&'].`

La valeur de la propriété `lastMatch` n'est accessible qu'en lecture seule et est modifiée à chaque fois qu'une correspondance est trouvée.

Il n'est pas possible d'utiliser l'alias avec la notation utilisant le point pour accéder à la propriété (`RegExp.$&`) car le parseur attend une expression avec "&" dans ce cas, ce qui provoque une exception {{jsxref("SyntaxError")}}. Pour utiliser l'alias, on prendra donc la notation [utilisant les crochets](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_membres#Notation_avec_crochets).

## Exemples

### Utiliser `lastMatch` et `$&`

```js
var re = /coucou/g;
re.test("coucou toi!");
RegExp.lastMatch; // "coucou"
RegExp['$&'];     // "coucou"
```

## Spécifications

Cette propriété n'est pas standard. Elle ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat("javascript.builtins.RegExp.lastMatch")}}

## Voir aussi

- {{non-standard_inline}} {{jsxref("RegExp.input", "RegExp.input ($_)")}}
- {{non-standard_inline}} {{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}
- {{non-standard_inline}} {{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}
- {{non-standard_inline}} {{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}}
- {{non-standard_inline}} {{jsxref("RegExp.n", "RegExp.$1-$9")}}
