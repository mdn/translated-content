---
title: Assignement (=)
slug: Web/JavaScript/Reference/Operators/Assignment
---

{{jsSidebar("Operators")}}

L'opérateur d'assignement simple (`=`) est utilisé pour définir la valeur d'une variable. Il est possible d'ajouter une valeur à plusieurs variables en chaînant les variables.

{{EmbedInteractiveExample("pages/js/expressions-assignment.html")}}

## Syntaxe

```js
x = y;
```

## Exemples

### Assignement simple et variables en chaînes

```js
// On considère les variables suivantes :
var x = 5;
var y = 10;
var z = 25;

x = y;
// x est égale à 10

x = y = z;
// x, y et z sont égales à 25
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Assignment operators in the JS guide](/fr/docs/Web/JavaScript/Guide/Expressions_et_Opérateurs)
