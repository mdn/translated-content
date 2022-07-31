---
title: yield*
slug: Web/JavaScript/Reference/Operators/yield*
tags:
  - ECMAScript 2015
  - Generators
  - Iterable
  - Iterator
  - JavaScript
  - Operator
  - Reference
translation_of: Web/JavaScript/Reference/Operators/yield*
original_slug: Web/JavaScript/Reference/Opérateurs/yield*
---
{{jsSidebar("Operators")}}

Une **expression `yield*`** est utilisée afin de déléguer le mécanisme d'itération/génération à un autre {{jsxref("Instructions/function*", "générateur")}} ou à un autre objet itérable.

{{EmbedInteractiveExample("pages/js/expressions-yieldasterisk.html")}}

## Syntaxe

```js
yield* expression
```

- `expression`
  - : L'expression qui renvoie un objet itérable.

## Description

L'expression `yield*` itère sur l'opérande et génère chaque valeur générée par l'opérande.

La valeur de l'expression `yield*` est la valeur renvoyée par l'itérateur lorsque celui est terminé (la propriété `done` vaut `true`).

## Exemples

### Délégation de la génération

Dans le code suivant, les valeurs générées par `g1()` sont renvoyées grâce aux appels à la fonction `next()`, comme pour celles renvoyées par `g2()`.

```js
function* g1() {
  yield 2;
  yield 3;
  yield 4;
}
function* g2() {
  yield 1;
  yield* g1();
  yield 5;
}

var iterator = g2();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

### Les autres objets itérables

`yield*` peut également être utilisé avec d'autres sortes d'itérables (chaînes, tableaux ou arguments) :

```js
function* g3() {
  yield* [1, 2];
  yield* "34";
  yield* Array.from(arguments);
}

var iterator = g3(5, 6);

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: "3", done: false }
console.log(iterator.next()); // { value: "4", done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: 6, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

### La valeur de l'expression `yield*`

`yield*` est une expression et non une instruction, elle est donc évaluée et fournit une valeur :

```js
function* g4() {
  yield* [1, 2, 3];
  return "toto";
}

var résultat;

function* g5() {
  résultat = yield* g4();
}

var iterator = g5();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true },
                              // g4() renvoie{ value: "toto", done: true } at this point

console.log(résultat);          // "toto"
```

## Spécifications

| Spécification                                                                                                                        | État                         | Commentaires        |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-generator-function-definitions-runtime-semantics-evaluation', 'Yield')}} | {{Spec2('ES2015')}}     | Définition initiale |
| {{SpecName('ESDraft', '#sec-generator-function-definitions-runtime-semantics-evaluation', 'Yield')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilité des navigateurs

{{Compat("javascript.operators.yield_star")}}

## Notes relatives à Firefox

- À partir de Gecko 33 {{geckoRelease(33)}}, l'analyse de l'expression `yield` a été mise à jour pour être conforme aux spécifications ES2015 ({{bug(981599)}}) :

  - La restriction concernant les terminateurs de lignes est désormais implémentée. Il n'est pas autorisé d'avoir un terminateur de ligne entre "yield" et "\*". Le code suivant lèvera une exception {{jsxref("SyntaxError")}}:

    ```js
        function* toto() {
          yield
          *[];
        }
        ```

## Voir aussi

- [Le protocole itérateur](/fr/docs/Web/JavaScript/Guide/Le_protocole_iterator)
- L'instruction {{jsxref("Instruction/function*", "function*")}}
- L'expression {{jsxref("Opérateurs/function*", "function*")}}
- {{jsxref("Opérateurs/yield", "yield")}}
