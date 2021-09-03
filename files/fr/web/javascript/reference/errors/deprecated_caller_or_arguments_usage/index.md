---
title: 'ReferenceError: deprecated caller or arguments usage'
slug: Web/JavaScript/Reference/Errors/Deprecated_caller_or_arguments_usage
tags:
  - Erreur
  - JavaScript
  - ReferenceError
translation_of: Web/JavaScript/Reference/Errors/Deprecated_caller_or_arguments_usage
original_slug: Web/JavaScript/Reference/Erreurs/Deprecated_caller_or_arguments_usage
---
{{jsSidebar("Errors")}}

## Message

    TypeError: 'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context (Edge)
    Warning: ReferenceError: deprecated caller usage (Firefox)
    Warning: ReferenceError: deprecated arguments usage (Firefox)
    TypeError: 'callee' and 'caller' cannot be accessed in strict mode. (Safari)

## Type d'erreur

Un avertissement uniquement affiché en mode strict qui prend la forme d'une {{jsxref("ReferenceError")}}. L'exécution du script JavaScript n'est pas interrompue.

## Quel est le problème ?

[En mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode), les propriétés {{jsxref("Function.caller")}} et/ou {{jsxref("Function.arguments")}} sont utilisées alors qu'elles ne devraient pas l'être. Ces propriétés sont dépréciées car elles font fuiter des informations sur l'appelant de la fonction et ne sont pas standards. De plus, ces propriétés rendent certaines optimisations plus complexe et peuvent nuire aux performances.

## Exemples

### Utilisation de `function.caller` ou de `arguments.callee.caller`

{{jsxref("Function.caller")}} et [`arguments.callee.caller`](/fr/docs/Web/JavaScript/Reference/Fonctions/arguments/callee) sont dépréciées (se référer aux articles de la référence pour plus d'informations).

```js example-bad
"use strict";

function myFunc() {
  if (myFunc.caller == null) {
    return 'La fonction a été appelée depuis la portée globale !';
  } else {
    return 'L\'appelant est ' + myFunc.caller;
  }
}

myFunc();
// Warning: ReferenceError: deprecated caller usage
// "La fonction a été appelée depuis la portée globale !"
```

### `Function.arguments`

{{jsxref("Function.arguments")}} est dépréciée (se référer à l'article sur cette propriété pour plus d'informations).

```js example-bad
"use strict";

function f(n) { g(n - 1); }

function g(n) {
  console.log('before: ' + g.arguments[0]);
  if (n > 0) { f(n); }
  console.log('after: ' + g.arguments[0]);
}

f(2);

console.log('returned: ' + g.arguments);
// Warning: ReferenceError: deprecated arguments usage
```

## Voir aussi

- [Les fonctionnalités obsolètes et dépréciées](/fr/docs/JavaScript/Reference/Annexes/Fonctionnalités_dépréciées)
- [Le mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode)
- {{jsxref("Function.arguments")}}
- {{jsxref("Function.caller")}} and [`arguments.callee.caller`](/fr/docs/Web/JavaScript/Reference/Functions/arguments/callee)
