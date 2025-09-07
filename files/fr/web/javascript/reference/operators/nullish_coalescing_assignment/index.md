---
title: Affectation après coalescence des nuls (??=)
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment
l10n:
  sourceCommit: 71cf0cb885d46d83af054ae4df350248e246f006
---

{{jsSidebar("Operators")}}

L'opérateur d'**affectation de coalescence des nuls (`??=`)**, également connu sous le nom d'opérateur **affectation logique nulle**, évalue uniquement l'opérande de droite et l'attribue à gauche si l'opérande de gauche est [nulle](/fr/docs/Glossary/Nullish) (`null` ou `undefined`).

{{InteractiveExample("JavaScript Demo: Expressions - Nullish coalescing assignment")}}

```js interactive-example
const a = { duration: 50 };

a.speed ??= 25;
console.log(a.speed);
// Expected output: 25

a.duration ??= 10;
console.log(a.duration);
// Expected output: 50
```

## Syntaxe

```js-nolint
x ??= y
```

## Description

L'opérateur de coalescence des nuls est un [_court-circuit_](/fr/docs/Web/JavaScript/Reference/Operators/Operator_precedence#court-circuit), ce qui signifie que `x ??= y` est équivalent à `x ?? (x = y)`, sauf que l'expression `x` n'est évaluée qu'une seule fois.

Aucune affectation n'est effectuée si le côté gauche n'est pas nul, en raison d'un court-circuit de l'opérateur de [coalescence des nuls](/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing). Par exemple, ce qui suit ne génère pas d'erreur, bien que «&nbsp;x&nbsp;» soit une constante «&nbsp;const&nbsp;»&nbsp;:

```js
const x = 1;
x ??= 2;
```

Les éléments suivants ne déclencheront pas non plus le «&nbsp;setter&nbsp;»&nbsp;:

```js
const x = {
  get value() {
    return 1;
  },
  set value(v) {
    console.log("Assignation appelée");
  },
};

x.value ??= 2;
```

En fait, si «&nbsp;x&nbsp;» n'est pas nul, «&nbsp;y&nbsp;» n'est pas du tout évalué.

```js
const x = 1;
x ??= console.log("y est évalué");
// Ne génère pas de sortie
```

## Exemple

### Utiliser l'opérateur d'affectation après coalescence des nuls

Vous pouvez utiliser l'opérateur d'affectation de coalescence des nuls pour appliquer des valeurs par défaut aux propriétés d'objet. Par rapport à l'utilisation de la déstructuration et des [valeurs par défaut](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring#valeurs-par-défaut), `??=` applique également la valeur par défaut si la propriété a pour valeur `null`.

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

- [L'opérateur de coalescence des nuls (`??`)](/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Valeur nulle (<i lang="en">nullish</i>)](/fr/docs/Glossary/Nullish)
- [<i lang="en">Truthy</i>](/fr/docs/Glossary/Truthy)
- [<i lang="en">Falsy</i>](/fr/docs/Glossary/Falsy)
