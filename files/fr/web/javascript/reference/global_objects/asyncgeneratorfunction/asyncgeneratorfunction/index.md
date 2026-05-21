---
title: Constructeur AsyncGeneratorFunction()
short-title: AsyncGeneratorFunction()
slug: Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/AsyncGeneratorFunction
l10n:
  sourceCommit: fefa80c1e817377a0bbaf6a636ce6b8797f38fbb
---

> [!WARNING]
> Les arguments passés à ce constructeur sont analysés et exécutés dynamiquement en tant que JavaScript.
> Les API de ce type sont connues sous le nom de [points d'injection](/fr/docs/Web/API/Trusted_Types_API#concepts_et_utilisation) et peuvent potentiellement être un vecteur pour des attaques de [cross-site-scripting (XSS)](/fr/docs/Web/Security/Attacks/XSS).
>
> Vous pouvez atténuer ce risque en passant toujours des objets {{DOMxRef("TrustedScript")}} au lieu de chaînes de caractères et en [appliquant des types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_appliquer_les_types_de_confiance).
>
> Voir [les considérations de sécurité](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/Function#considérations_de_sécurité) dans la référence du constructeur `Function()` pour plus d'informations.

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
> `AsyncGeneratorFunction()` peut être appelé avec ou sans {{JSxRef("Operators/new", "new")}}. Les deux créent une nouvelle instance de `AsyncGeneratorFunction`.

### Paramètres

Voir {{JSxRef("Function/Function", "Function()")}}.

## Exemples

On notera que ces exemples omettent l'utilisation des types de confiance pour des raisons de concision. Pour un code montrant l'approche recommandée, voir [Utiliser `TrustedScript`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval#utiliser_trustedscript) dans `eval()`.

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
