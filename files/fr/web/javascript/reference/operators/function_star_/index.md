---
title: Expression function*
slug: Web/JavaScript/Reference/Operators/function*
tags:
  - ECMAScript 2015
  - Function
  - Iterator
  - JavaScript
  - Operator
  - Reference
translation_of: Web/JavaScript/Reference/Operators/function*
original_slug: Web/JavaScript/Reference/Opérateurs/function*
---
{{jsSidebar("Operators")}}

Le mot-clé **`function*`** peut être utilisé pour définir une fonction génératrice à l'intérieur d'une expression.

{{EmbedInteractiveExample("pages/js/expressions-functionasteriskexpression.html")}}

## Syntaxe

    function* [nom]([param1[, param2[, ..., paramN]]]) {
       instructions
    }

### Paramètres

- `nom`
  - : Le nom de la fonction. Ce paramètre est optionnel, auquel cas la fonction sera une fonction _anonyme_. Le nom sera local par rapport au corps de la fonction.
- `paramN`
  - : Le nom d'un argument à passer à la fonction. Une fonction peut avoir jusqu'à 255 arguments.
- `instructions`
  - : Les instructions qui forment le corps de la fonction.

## Description

Une expression `function*` est très semblable à une instruction {{jsxref('Instructions/function*', 'function*')}}, elle possède également une syntaxe similaire. La différence principale entre une expression `function*` et une instruction `function*` est le nom de la fonction. En effet, dans les expressions, le nom peut être omis pour créer une fonction génératrice _anonyme_. Voir également le chapitre sur les [fonctions](/fr/docs/Web/JavaScript/Reference/Fonctions) pour plus d'informations.

## Exemples

L'exemple qui suit illustre comment définir une génératrice anonyme et l'affecter à une variable `x`. Cette fonction génèrera le carré de son argument :

```js
var x = function*(y) {
   yield y * y;
};
```

## Spécifications

| Spécification                                                                                        | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-generator-function-definitions', 'function*')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-generator-function-definitions', 'function*')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.operators.function_star")}}

## Voir aussi

- L'instruction {{jsxref("Instructions/function*", "function*")}}
- L'objet {{jsxref("GeneratorFunction")}}
- [Le protocole itérateur](/fr/docs/Web/JavaScript/Guide/The_Iterator_protocol)
- {{jsxref("Opérateurs/yield", "yield")}}
- {{jsxref("Opérateurs/yield*", "yield*")}}
- L'objet {{jsxref("Function")}}
- L'instruction {{jsxref("Instructions/function", "function")}}
- L'expression {{jsxref("Opérateurs/L_opérateur_function", "function")}}
- {{jsxref("Fonctions", "Fonctions et portée des fonctions","","1")}}
