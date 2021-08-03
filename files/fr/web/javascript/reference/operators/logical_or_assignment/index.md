---
title: Affectation après OU logique (||=)
slug: Web/JavaScript/Reference/Operators/Logical_OR_assignment
tags:
  - JavaScript
  - Language feature
  - Logical Operator
  - Operator
  - Reference
browser-compat: javascript.operators.logical_or_assignment
---
{{jsSidebar("Operators")}}

L'opérateur d'affectation après OU logique (`x ||= y`) n'affecte la valeur de l'opérande droit uniquement si l'opérande gauche est [équivalent à faux (_falsy_)](/fr/docs/Glossary/Falsy).

{{EmbedInteractiveExample("pages/js/expressions-logical-or-assignment.html")}}

## Syntaxe

```js
expr1 ||= expr2
```

## Description

### Évaluation en court-circuit

L'opérateur [OU logique](/fr/docs/Web/JavaScript/Reference/Operators/Logical_OR) fonctionne ainsi :

```js
x || y;
// renvoie x lorsque x est équivalent à vrai
// renvoie y lorsque x n'est pas équivalent à vrai
```

L'opérateur OU logique peut utiliser un court-circuit : le second opérande est uniquement évalué si le premier opérande n'est pas équivalent à vrai.

L'opérateur d'affectation après OU logique observe les mêmes règles : l'affectation a uniquement lieu si l'opération logique a besoin d'évaluer l'opérande droit. Autrement dit, `x ||= y` est équivalent à :

```js
x || (x = y);
```

En revanche, il n'est pas équivalent à l'expression suivante qui effectue, quoi qu'il arrive, une affectation :

```js example-bad
x = x || y;
```

On notera que ce comportement est différent entre les opérateurs binaires et les opérateurs logiques.

## Exemples

### Affecter une valeur par défaut

Dans l'exemple qui suit, si `paroles` est vide, on y place une valeur par défaut :

```js
document.getElementById('paroles').textContent ||= 'Aucune parole.'
```

Ici, la notion de court-circuit est utile, car l'élément ne sera pas mis à jour si ce n'est pas nécessaire. Il n'y aura pas d'effet de bord indésiré comme une autre étape de rendu ou la perte du focus, etc.

Attention toutefois à la valeur qu'on teste. Si on souhaite affecter une valeur lorsqu'on rencontre une chaîne de caractère vide (équivalente à faux), on pourra utiliser `||=`. Sinon, si on souhaite uniquement distinguer [`null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/null) ou [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/null), on utilisera l'opérateur [`??=`](/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'opérateur OU logique (||)](/fr/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [L'opérateur de coalescence des nuls (`??`)](/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
- [L'opérateur d'affectation après OU binaire (`|=`)](/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)
- [Le type `Boolean`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [_Truthy_](/fr/docs/Glossary/Truthy)
- [_Falsy_](/fr/docs/Glossary/Falsy)
