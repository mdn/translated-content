---
title: Expression async function
slug: Web/JavaScript/Reference/Operators/async_function
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Les mots-clés **`async function`** peuvent être utilisés pour définir une fonction asynchrone au sein d'une expression.

Vous pouvez également définir des fonctions asynchrones en utilisant une [déclaration `async function`](/fr/docs/Web/JavaScript/Reference/Statements/async_function) ou la [syntaxe fléchée](/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

## Syntaxe

```js-nolint
async function (param0) {
  statements
}
async function (param0, param1) {
  statements
}
async function (param0, param1, /* …, */ paramN) {
  statements
}

async function name(param0) {
  statements
}
async function name(param0, param1) {
  statements
}
async function name(param0, param1, /* …, */ paramN) {
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

Une expression `async function` est très proche, et partage quasiment la même syntaxe avec une [déclaration `async function`](/fr/docs/Web/JavaScript/Reference/Statements/async_function). La différence principale entre une expression `async function` et une déclaration `async function` est le _nom de la fonction_, qui peut être omis dans les expressions `async function` pour créer des fonctions _anonymes_. Une expression `async function` peut être utilisée comme une [<abbr>IIFE</abbr>](/fr/docs/Glossary/IIFE) (<i lang="en">Immediately Invoked Function Expression</i>) qui s'exécute dès qu'elle est définie, ce qui permet de simuler un [`await` de niveau supérieur](/fr/docs/Web/JavaScript/Guide/Modules#await_de_niveau_supérieur). Voir également le chapitre sur [les fonctions](/fr/docs/Web/JavaScript/Reference/Functions) pour plus d'informations.

## Exemples

### Utiliser l'expression `async function`

```js
function completeeApres2Secondes(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

// l'expression async function affectée à une variable
const add = async function (x) {
  const a = await completeeApres2Secondes(20);
  const b = await completeeApres2Secondes(30);
  return x + a + b;
};

add(10).then((v) => {
  console.log(v); // affiche 60 après 4 secondes.
});

// l'expression async function utilisée comme IIFE
(async function (x) {
  const p1 = completeeApres2Secondes(20);
  const p2 = completeeApres2Secondes(30);
  return x + (await p1) + (await p2);
})(10).then((v) => {
  console.log(v); // affiche 60 après 2 secondes.
});
```

### IIFE asynchrone

Un [IIFE](/fr/docs/Glossary/IIFE) `async` permet d'utiliser [`await`](/fr/docs/Web/JavaScript/Reference/Operators/await) et [`for...await`](/fr/docs/Web/JavaScript/Reference/Statements/for-await...of) dans des contextes où [`await` de niveau supérieur](/fr/docs/Web/JavaScript/Reference/Operators/await#await_de_niveau_supérieur) n'est pas disponible. Ici, nous utilisons une [fonction fléchée](/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions) pour définir l'IIFE, mais les expressions `async function` peuvent également être utilisées.

```js
const obtenirFluxFichier = async (url) => {
  // implémentation
};

(async () => {
  const diffusion = await obtenirFluxFichier(
    "https://domain.name/path/file.ext",
  );
  for await (const fragment of diffusion) {
    console.log({ fragment });
  }
})();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des fonctions](/fr/docs/Web/JavaScript/Guide/Functions)
- [Les fonctions](/fr/docs/Web/JavaScript/Reference/Functions)
- L'instruction {{JSxRef("Statements/async_function", "async function")}}
- L'objet natif {{JSxRef("AsyncFunction")}}
- L'opérateur {{JSxRef("Operators/await", "await")}}
