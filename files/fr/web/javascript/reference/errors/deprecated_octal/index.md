---
title: 'SyntaxError: "0"-prefixed octal literals and octal escape seq. are deprecated'
slug: Web/JavaScript/Reference/Errors/Deprecated_octal
tags:
  - Erreurs
  - JavaScript
  - Mode strict
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Deprecated_octal
original_slug: Web/JavaScript/Reference/Erreurs/Deprecated_octal
---
{{jsSidebar("Errors")}}

## Message

```
SyntaxError: Octal numeric literals and escape characters not allowed in strict mode (Edge)
SyntaxError:
"0"-prefixed octal literals and octal escape sequences are deprecated;
for octal literals use the "0o" prefix instead
```

## Type d'erreur

{{jsxref("SyntaxError")}}, uniquement en [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode).

## Quel est le problème ?

Les littéraux en base octale et les séquences d'échappement octales sont dépréciées et lèvent une exception {{jsxref("SyntaxError")}} en mode strict. À partir d'ECMAScript 2015, la syntaxe standard utilise un zéro suivi de la lettre « o » (en minuscule ou en majuscule) (`0o` or `0O)`.

## Exemples

### Littéraux en base octale préfixés par 0

```js example-bad
"use strict";

03;

// SyntaxError: "0"-prefixed octal literals and octal escape sequences
// are deprecated
```

### Séquences d'échappement en base octale

```js example-bad
"use strict";

"\251";

// SyntaxError: "0"-prefixed octal literals and octal escape sequences
// are deprecated
```

### Littéraux valides

Pour former un littéral en base octal, on pourra utiliser un zéro suivi de la lettre « o » :

```js example-good
0o3;
```

Pour former une séquence d'échappement en base octale, on écrira une séquence d'échappement en base hexadécimale :

```js example-good
'\xA9';
```

## Voir aussi

- [La grammaire lexicale JavaScript](/fr/docs/Web/JavaScript/Reference/Grammaire_lexicale#Octaux)
- [Warning: 08/09 is not a legal ECMA-262 octal constant](/fr/docs/Web/JavaScript/Reference/Erreurs/Bad_octal)
