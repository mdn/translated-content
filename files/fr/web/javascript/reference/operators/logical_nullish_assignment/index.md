---
title: Affectation après coalescence des nuls (??=)
slug: Web/JavaScript/Reference/Operators/Logical_nullish_assignment
tags:
  - Assignment operator
  - JavaScript
  - Language feature
  - Logical Operator
  - Operator
  - Reference
browser-compat: javascript.operators.logical_nullish_assignment
---
{{jsSidebar("Operators")}}

L'opérateur d'affectation après coalescence des nuls (`x ??= y`) effectue une affectation uniquement si l'opérande de gauche (`x`) vaut [`null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/null) ou [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/null).

{{EmbedInteractiveExample("pages/js/expressions-logical-nullish-assignment.html")}}

## Syntaxe

```js
expr1 ??= expr2
```

## Description

### Évaluation en court-circuit

L'opérateur de [coalescence des nuls](/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator) est évalué de gauche à droite et le moteur teste s'il est possible d'utiliser un court-circuit grâce à la règle suivante :

`(une expression qui renvoie null ou undefined) ?? expr` sera court-circuité pour fournir l'opérande gauche si celle-ci ne vaut ni `null` ni `undefined`.

Ce « court-circuit » implique que l'expression `expr` **n'est pas évaluée** si ce n'est pas nécessaire. Ainsi, tout effet de bord lié à celle-ci n'aura pas lieu (par exemple, si `expr` appelle une fonction, cette dernière n'est pas exécutée).

L'opérateur d'affectation après coalescence des nuls obéit également à cette logique. Ainsi, `x ??= y` sera équivalent à :

```js
x ?? (x = y);
```

En revanche, ce ne sera pas équivalent à l'expression suivante qui effectue une affectation quoi qu'il arrive :

```js example-bad
x = x ?? y;
```

## Exemples

### Utiliser l'opérateur d'affectation après coalescence des nuls

```js
function config(options) {
  options.duration ??= 100;
  options.speed ??= 25;
  return options;
}

config({ duration: 125 }); // { duration: 125, speed: 25 }
config({}); // { duration: 100, speed: 25 }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'opérateur de coalescence des nuls (`??`)](/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
- [_Nullish_](/fr/docs/Glossary/Nullish)
- [_Truthy_](/fr/docs/Glossary/Truthy)
- [_Falsy_](/fr/docs/Glossary/Falsy)
