---
title: Constructeur AsyncFunction()
short-title: AsyncFunction()
slug: Web/JavaScript/Reference/Global_Objects/AsyncFunction/AsyncFunction
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Le constructeur **`AsyncFunction()`** crée des objets {{JSxRef("AsyncFunction")}}.

Notez que `AsyncFunction` n'est _pas_ un objet global. Il peut être obtenu avec le code suivant&nbsp;:

```js
const AsyncFunction = async function () {}.constructor;
```

Le constructeur `AsyncFunction()` n'est pas destiné à être utilisé directement, et toutes les mises en garde mentionnées dans la description de {{JSxRef("Function/Function", "Function()")}} s'appliquent à `AsyncFunction()`.

## Syntaxe

```js-nolint
new AsyncFunction(functionBody)
new AsyncFunction(arg1, functionBody)
new AsyncFunction(arg1, arg2, functionBody)
new AsyncFunction(arg1, arg2, /* …, */ argN, functionBody)

AsyncFunction(functionBody)
AsyncFunction(arg1, functionBody)
AsyncFunction(arg1, arg2, functionBody)
AsyncFunction(arg1, arg2, /* …, */ argN, functionBody)
```

> [!NOTE]
> `AsyncFunction()` peut être appelé avec ou sans [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new). Les deux créent une nouvelle instance de `AsyncFunction`.

### Paramètres

Voir {{JSxRef("Function/Function", "Function()")}}.

## Exemples

### Créer une fonction asynchrone à partir du constructeur `AsyncFunction()`

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

const AsyncFunction = async function () {}.constructor;

const fn = new AsyncFunction(
  "a",
  "b",
  "return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);",
);

fn(10, 20).then((v) => {
  console.log(v); // affiche 30 après 4 secondes
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`async function`](/fr/docs/Web/JavaScript/Reference/Statements/async_function)
- [Expression de fonction `async`](/fr/docs/Web/JavaScript/Reference/Operators/async_function)
- [Constructeur `Function()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
