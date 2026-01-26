---
title: Constructeur AsyncGeneratorFunction()
short-title: AsyncGeneratorFunction()
slug: Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/AsyncGeneratorFunction
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Le constructeur **`AsyncGeneratorFunction()`** crée des objets {{JSxRef("AsyncGeneratorFunction")}}.

Notez que `AsyncGeneratorFunction` n'est pas un objet global. Il peut être obtenu en évaluant le code suivant&nbsp;:

```js
const AsyncGeneratorFunction = async function* () {}.constructor;
```

Le constructeur `AsyncGeneratorFunction()` n'est pas destiné à être utilisé directement, et toutes les mises en garde mentionnées dans la description de {{JSxRef("Function/Function", "Function()")}} s'appliquent à `AsyncGeneratorFunction()`.

## Syntaxe

```js-nolint
new AsyncGeneratorFunction(functionBody)
new AsyncGeneratorFunction(arg1, functionBody)
new AsyncGeneratorFunction(arg1, arg2, functionBody)
new AsyncGeneratorFunction(arg1, arg2, /* …, */ argN, functionBody)

AsyncGeneratorFunction(functionBody)
AsyncGeneratorFunction(arg1, functionBody)
AsyncGeneratorFunction(arg1, arg2, functionBody)
AsyncGeneratorFunction(arg1, arg2, /* …, */ argN, functionBody)
```

> [!NOTE]
> `AsyncGeneratorFunction()` peut être appelé avec ou sans [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new). Les deux créent une nouvelle instance de `AsyncGeneratorFunction`.

### Paramètres

Voir {{JSxRef("Function/Function", "Function()")}}.

## Exemples

### Utilisation du constructeur

L'exemple suivant utilise le constructeur `AsyncGeneratorFunction` pour créer une fonction génératrice asynchrone.

```js
const AsyncGeneratorFunction = async function* () {}.constructor;
const createAsyncGenerator = new AsyncGeneratorFunction("a", "yield a * 2");
const asyncGen = createAsyncGenerator(10);
asyncGen.next().then((res) => console.log(res.value)); // 20
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'instruction [`async function*`](/fr/docs/Web/JavaScript/Reference/Statements/async_function*)
- [L'expression `async function*`](/fr/docs/Web/JavaScript/Reference/Operators/async_function*)
- [Le constructeur `Function()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
- [Guide sur les itérateurs et générateurs](/fr/docs/Web/JavaScript/Guide/Iterators_and_generators)
- {{JSxRef("Functions", "Les fonctions", "", 1)}}
