---
title: Assignement (=)
slug: Web/JavaScript/Reference/Operators/Assignment
tags:
  - Fonctionnalités du language
  - JavaScript
  - Opérateur
  - Opérateur d'assignement
  - Reference
translation_of: Web/JavaScript/Reference/Operators/Assignment
original_slug: Web/JavaScript/Reference/Opérateurs/Assignement
---
{{jsSidebar("Operators")}}

L'opérateur d'assignement simple (`=`) est utilisé pour définir la valeur d'une variable. Il est possible d'ajouter une valeur à plusieurs variables en chaînant les variables.

{{EmbedInteractiveExample("pages/js/expressions-assignment.html")}}

## Syntaxe

    Opérateur : x = y

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

## Specifications

| Specification                                                                                        |
| ---------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-assignment-operators', 'Assignment operators')}} |

## Compatibilité des navigateurs

{{Compat("javascript.operators.assignment")}}

## Voir aussi

- [Assignment operators in the JS guide](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_et_Opérateurs)
