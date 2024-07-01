---
title: Expression async function*
slug: Web/JavaScript/Reference/Operators/async_function*
l10n:
  sourceCommit: 1be604140d8179f54bc180af6cd4bc27576219de
---

{{jsSidebar("Operators")}}

Les mots-clés **`async function*`** peuvent être utilisés afin de créer une fonction génératrice asynchrone au sein d'une expression.

{{EmbedInteractiveExample("pages/js/expressions-async-function-asterisk.html", "taller")}}

## Syntaxe

```js
async function* (param0) {
  instructions
}
async function* (param0, param1) {
  instructions
}
async function* (param0, param1, /* … ,*/ paramN) {
  instructions
}

async function* nom(param0) {
  instructions
}
async function* nom(param0, param1) {
  instructions
}
async function* nom(param0, param1, /* … ,*/ paramN) {
  instructions
}
```

### Paramètres

- `nom` {{optional_inline}}
  - : Le nom de la fonction. S'il est absent, la fonction est _anonyme_. Le nom est uniquement local au corps de la fonction.
- `paramN` {{optional_inline}}
  - : Le nom d'un argument à passer à la fonction. Une fonction peut avoir jusqu'à 255 arguments.
- `instructions` {{optional_inline}}
  - : Les instructions qui forment le corps de la fonction.

## Description

Une expression `async function*` est très proche et possède quasiment la même syntaxe qu'une [instruction `async function*`](/fr/docs/Web/JavaScript/Reference/Statements/async_function*). La différence principale entre une expression `async function*` et une instruction `async function*` est que _le nom de la fonction_ peut être omis dans les expressions `async function*` afin de créer des fonctions génératrices asynchrones _anonymes_. Voir aussi le chapitre sur [les fonctions en JavaScript](/fr/docs/Web/JavaScript/Reference/Functions) pour plus d'informations.

## Exemples

### Utiliser async function\*

L'exemple qui suit définit une fonction génératrice asynchrone anonyme et l'affecte à `x`. Cette fonction génère le carré de son argument&nbsp;:

```js
const x = async function* (y) {
  yield Promise.resolve(y * y);
};
x(6)
  .next()
  .then((res) => console.log(res.value)); // affiche 36
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'instruction [`async function*`](/fr/docs/Web/JavaScript/Reference/Statements/async_function*)
- L'objet [`AsyncGeneratorFunction`](/fr/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction)
- [Le protocole itérateur](/fr/docs/Web/JavaScript/Reference/Iteration_protocols)
- L'objet [`GeneratorFunction`](/fr/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction)
- [`yield`](/fr/docs/Web/JavaScript/Reference/Operators/yield)
- [`yield*`](/fr/docs/Web/JavaScript/Reference/Operators/yield*)
- L'objet [`Function`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function)
- [Les fonctions en JavaScript](/fr/docs/Web/JavaScript/Reference/Functions)
