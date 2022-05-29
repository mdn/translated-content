---
title: Expression async function
slug: Web/JavaScript/Reference/Operators/async_function
tags:
  - Function
  - JavaScript
  - Opérateur
  - Reference
translation_of: Web/JavaScript/Reference/Operators/async_function
original_slug: Web/JavaScript/Reference/Opérateurs/async_function
---
{{jsSidebar("Operators")}}

Le mot-clé **`async function`** peut être utilisé pour définir une fonction asynchrone au sein d'une expression.

> **Note :** Il est aussi possible de définir une fonction asynchrone en utilisant une [instruction `async function`](/fr/docs/Web/JavaScript/Reference/Instructions/async_function).

## Syntaxe

```js
async function [name]([param1[, param2[, …, paramN]]]) {
  instructions
}
```

### Paramètres

- `name`
  - : Le nom de la fonction. Il est facultatif et s'il n'est pas utilisé, la fonction est _anonyme_. Le nom utilisé est uniquement local pour le corps de la fonction.
- `paramN`
  - : Le nom d'un argument à passer à la fonction.
- `instructions`
  - : Les instructions qui composent le corps de la fonction.

> **Note :** À partir d'ES2015 (ES6), il est aussi possible d'utiliser des [fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es) pour les expressions de fonction asynchrone.

## Description

Une expression `async function` est très proche, et partage quasiment la même syntaxe avec {{jsxref('Instructions/async_function', 'une instruction async function',"",1)}}. La différence principale entre une expression async `function` et une instruction async `function` est qu'on peut omettre le nom de la fonction dans les expressions `async function`. On peut donc utiliser une expression `async function` afin de créer une _IIFE_ (pour _Immediately Invoked Function Expression_) qu'on appelle au moment de sa définition. Voir également le chapitre sur [les fonctions](/fr/docs/Web/JavaScript/Reference/Fonctions) pour plus d'informations.

## Exemples

### Exemple simple

```js
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
};

(async function(x) { // fonction asynchrone immédiatement appelée
  var a = resolveAfter2Seconds(20);
  var b = resolveAfter2Seconds(30);
  return x + await a + await b;
})(10).then(v => {
  console.log(v);  // affiche 60 après 2 secondes.
});

var add = async function(x) {
  var a = await resolveAfter2Seconds(20);
  var b = await resolveAfter2Seconds(30);
  return x + a + b;
};

add(10).then(v => {
  console.log(v);  // affiche 60 après 4 secondes.
});
```

## Spécifications

| Spécification                                                                                        | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ESDraft', '#sec-async-function-definitions', 'async function')}} | {{Spec2('ESDraft')}} |                      |
| {{SpecName('ES2018', '#sec-async-function-definitions', 'async function')}} | {{Spec2('ES2018')}}     |                      |
| {{SpecName('ES2017', '#sec-async-function-definitions', 'async function')}} | {{Spec2('ES2017')}}     | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("javascript.operators.async_function_expression")}}

## Voir aussi

- {{jsxref("Instructions/async_function", "async function")}}
- L'objet {{jsxref("AsyncFunction")}}
- {{jsxref("Opérateurs/await", "await")}}
