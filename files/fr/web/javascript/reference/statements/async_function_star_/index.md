---
title: async function*
slug: Web/JavaScript/Reference/Statements/async_function*
l10n:
  sourceCommit: 1be604140d8179f54bc180af6cd4bc27576219de
---

{{jsSidebar("Statements")}}

Une déclaration **`async function*`** définit _une fonction génératrice asynchrone_, qui renvoie un objet [`AsyncGenerator`](/fr/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator).

{{EmbedInteractiveExample("pages/js/expressions-async-function-asterisk.html", "taller")}}

Il est aussi possible de définir des fonctions génératrices asynchrones à l'aide du constructeur [`AsyncGeneratorFunction()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction) ou [d'une expression `async function*`](/fr/docs/Web/JavaScript/Reference/Operators/async_function*).

## Syntaxe

```js
async function* nom(param0) {
  instructions;
}
async function* nom(param0, param1) {
  instructions;
}
async function* nom(param0, param1, /* … ,*/ paramN) {
  instructions;
}
```

> **Note :** Il n'existe pas de notation équivalente aux fonctions fléchées pour les fonctions génératrices asynchrones.

### Paramètres

- `nom`
  - : Le nom de la fonction.
- `param` {{optional_inline}}
  - : Le nom d'un paramètre formel pour la fonction.
- `instructions` {{optional_inline}}
  - : Les instructions formant le corps de la fonction.

## Description

Une fonction génératrice asynchrone combine les fonctionnalités des [fonctions asynchrones](/fr/docs/Web/JavaScript/Reference/Statements/async_function) et des [fonctions génératrices](/fr/docs/Web/JavaScript/Reference/Statements/function*). Les deux mots-clés [`await`](/fr/docs/Web/JavaScript/Reference/Operators/await) et [`yield`](/fr/docs/Web/JavaScript/Reference/Operators/yield) peuvent être utilisés dans le corps d'une telle fonction. Cela permet de gérer des tâches asynchrones de façon concise avec `await`, tout en profitant de l'exécution à la demande permise par les fonctions génératrices.

À la différence des fonctions génératrices normales déclarées avec `function*`, une fonction génératrice asynchrone renvoie un objet [`AsyncGenerator`](/fr/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator) qui suit [le protocole itérable asynchrone](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#les_protocoles_itérateur_et_itérable_asynchrones). Chaque appel à `next()` renvoie [une promesse](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) qui est résolue avec l'objet résultant de l'itérateur.

Lorsqu'une promesse est déclenchée depuis un générateur asynchrone, l'état de la promesse qui est le résultat de l'itérateur correspondra à celui de la promesse déclenchée. On aura par exemple&nbsp;:

```js
async function* toto() {
  yield Promise.reject(1);
}

toto()
  .next()
  .catch((e) => console.error(e));
```

Qui affichera `1` dans la console, car la promesse ainsi générée déclenche une erreur et le résultat dans l'itérateur déclenche une erreur également. La propriété `value` du résultat d'un générateur asynchrone résolu ne sera pas une autre promesse.

## Exemples

### Déclarer une fonction génératrice asynchrone

Les fonctions génératrices asynchrones produisent toujours des promesses comme résultat, même si chaque étape `yield` est synchrone.

```js
async function* monGenerateur(etape) {
  await new Promise((resolve) => setTimeout(resolve, 10));
  yield 0;
  yield etape;
  yield etape * 2;
}

const gen = monGenerateur(2);
gen
  .next()
  .then((res) => {
    console.log(res); // { value: 0, done: false }
    return gen.next();
  })
  .then((res) => {
    console.log(res); // { value: 2, done: false }
    return gen.next();
  })
  .then((res) => {
    console.log(res); // { value: 4, done: false }
    return gen.next();
  })
  .then((res) => {
    console.log(res); // { value: undefined, done: true }
    return gen.next();
  });
```

### Utiliser une fonction génératrice asynchrone afin de lire un ensemble de fichiers

Dans cet exemple, on lit une suite de fichiers en accédant à leur contenu uniquement lorsqu'on le demande, en utilisant le module Node.js [`fs/promises`](https://nodejs.org/dist/latest-v18.x/docs/api/fs.html).

```js
async function* readFiles(directory) {
  const files = await fs.readdir(directory);
  for (const file of files) {
    const stats = await fs.stat(file);
    if (stats.isFile()) {
      yield {
        name: file,
        content: await fs.readFile(file, "utf8"),
      };
    }
  }
}

const files = readFiles(".");
console.log((await files.next()).value);
// Exemple de sortie : { name: 'fichier1.txt', content: '...' }
console.log((await files.next()).value);
// Exemple de sortie : { name: 'fichier2.txt', content: '...' }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'expression [`async function*`](/fr/docs/Web/JavaScript/Reference/Operators/async_function*)
- L'objet [`AsyncGeneratorFunction`](/fr/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction)
- [Le protocole itérateur](/fr/docs/Web/JavaScript/Reference/Iteration_protocols)
- L'objet [`GeneratorFunction`](/fr/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction)
- [`yield`](/fr/docs/Web/JavaScript/Reference/Operators/yield)
- [`yield*`](/fr/docs/Web/JavaScript/Reference/Operators/yield*)
- L'objet [`Function`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function)
- [Les fonctions en JavaScript](/fr/docs/Web/JavaScript/Reference/Functions)
