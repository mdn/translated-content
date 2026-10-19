---
title: Expression async function*
slug: Web/JavaScript/Reference/Operators/async_function*
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Les mots-clés **`async function*`** peuvent être utilisés pour définir une fonction génératrice asynchrone au sein d'une expression.

Vous pouvez également définir des fonctions génératrices asynchrones en utilisant une [déclaration `async function*`](/fr/docs/Web/JavaScript/Reference/Statements/async_function*).

{{InteractiveExample("Démonstration JavaScript&nbsp;: l'expression async function*", "taller")}}

```js interactive-example
async function joinAll(generator) {
  let str = "";
  for await (const val of generator()) {
    str += val;
  }
  return str;
}
joinAll(async function* () {
  yield await Promise.resolve("a");
  yield await Promise.resolve("b");
  yield await Promise.resolve("c");
}).then((str) => console.log(str));
// Résultat attendu : "abc"
```

## Syntaxe

```js-nolint
async function* (param0) {
  statements
}
async function* (param0, param1) {
  statements
}
async function* (param0, param1, /* …, */ paramN) {
  statements
}

async function* name(param0) {
  statements
}
async function* name(param0, param1) {
  statements
}
async function* name(param0, param1, /* …, */ paramN) {
  statements
}
```

> [!NOTE]
> Une [instruction d'expression](/fr/docs/Web/JavaScript/Reference/Statements/Expression_statement) ne peut pas commencer par les mots-clés `async function` afin d'éviter toute ambiguïté avec une [déclaration `async function`](/fr/docs/Web/JavaScript/Reference/Statements/async_function). Les mots-clés `async function` ne commencent une expression que lorsqu'ils apparaissent dans un contexte qui ne peut pas accepter d'instructions.

### Paramètres

- `name` {{Optional_Inline}}
  - : Le nom de la fonction. Peut être omis, auquel cas la fonction est _anonyme_. Le nom n'est local qu'au corps de la fonction.
- `paramN` {{Optional_Inline}}
  - : Le nom d'un paramètre formel pour la fonction. Pour la syntaxe des paramètres, voir la [référence sur les fonctions](/fr/docs/Web/JavaScript/Guide/Functions#paramètres_de_fonction).
- `statements` {{Optional_Inline}}
  - : Les instructions qui composent le corps de la fonction.

## Description

Une expression `async function*` est très proche, et partage quasiment la même syntaxe avec une [déclaration `async function*`](/fr/docs/Web/JavaScript/Reference/Statements/async_function*). La différence principale entre une expression `async function*` et une déclaration `async function*` est le _nom de la fonction_, qui peut être omis dans les expressions `async function*` pour créer des fonctions _anonymes_. Une expression `async function*` peut être utilisée comme une [<abbr>IIFE</abbr>](/fr/docs/Glossary/IIFE) (<i lang="en">Immediately Invoked Function Expression</i>) qui s'exécute dès qu'elle est définie, ce qui permet de créer un [objet itérable asynchrone](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#les_protocoles_ditérateur_asynchrone_et_ditérable_asynchrone) ad hoc. Voir également le chapitre sur [les fonctions](/fr/docs/Web/JavaScript/Reference/Functions) pour plus d'informations.

## Exemples

### Utiliser l'expression `async function*`

L'exemple qui suit définit une fonction génératrice asynchrone anonyme et l'affecte à `x`. Cette fonction génère le carré de son argument&nbsp;:

```js
const x = async function* (y) {
  yield Promise.resolve(y * y);
};
x(6)
  .next()
  .then((res) => console.log(res.value)); // 36
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des fonctions](/fr/docs/Web/JavaScript/Guide/Functions)
- [Les fonctions](/fr/docs/Web/JavaScript/Reference/Functions)
- L'instruction {{JSxRef("Statements/async_function*", "async function*")}}
- L'objet natif {{JSxRef("AsyncGeneratorFunction")}}
- [Les protocoles d'itération](/fr/docs/Web/JavaScript/Reference/Iteration_protocols)
- L'opérateur {{JSxRef("Operators/yield", "yield")}}
- L'opérateur {{JSxRef("Operators/yield*", "yield*")}}
