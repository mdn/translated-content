---
title: Affectation après ET logique (&&=)
slug: Web/JavaScript/Reference/Operators/Logical_AND_assignment
---

{{jsSidebar("Operators")}}

L'opérateur d'affectation après ET logique (`x &&= y`) n'affecte la valeur de l'opérande droit uniquement si l'opérande gauche est [équivalent à vrai (_truthy_)](/fr/docs/Glossary/Truthy).

{{EmbedInteractiveExample("pages/js/expressions-logical-and-assignment.html")}}

## Syntaxe

```js
expr1 &&= expr2;
```

## Description

### Évaluation en court-circuit

L'opérateur [ET logique](/fr/docs/Web/JavaScript/Reference/Operators/Logical_AND) est évalué de gauche à droite et le moteur vérifie s'il peut utiliser un court-circuit avec la régle suivante :

`(une expression équivalente à faux) && expr` sera court-circuitée pour fournir directement l'expression équivalente à faux.

Ce « court-circuit » indique que `expr` **n'est pas évaluée**. Tout effet de bord lié à cette évaluation n'aura pas lieu (par exemple si `expr` est un appel de fonction, la fonction n'est pas exécutée).

L'opérateur d'affectation après ET logique utilise également ce court-circuit et `x &&= y` est donc équivalent à :

```js
x && (x = y);
```

En revanche, **il n'est pas équivalent** à ce qui suit, et qui effectue quoi qu'il arrive une affectation :

```js example-bad
x = x && y;
```

## Exemples

### Utiliser l'affectation après ET logique

```js
let x = 0;
let y = 1;

x &&= 0; // 0
x &&= 1; // 0
y &&= 1; // 1
y &&= 0; // 0
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'opérateur ET logique (&&)](/fr/docs/Web/JavaScript/Reference/Operators/Logical_AND)
- [L'opérateur de coalescence des nuls (`??`)](/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
- [L'opérateur d'affectation après ET binaire (`&=`)](/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)
- [Le type `Boolean`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [_Truthy_](/fr/docs/Glossary/Truthy)
- [_Falsy_](/fr/docs/Glossary/Falsy)
