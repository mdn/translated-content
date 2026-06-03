---
title: Constructeur AsyncFunction()
short-title: AsyncFunction()
slug: Web/JavaScript/Reference/Global_Objects/AsyncFunction/AsyncFunction
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
> `AsyncFunction()` peut être appelé avec ou sans {{JSxRef("Operators/new", "new")}}. Les deux créent une nouvelle instance de `AsyncFunction`.

### Paramètres

Voir {{JSxRef("Function/Function", "Function()")}}.

## Exemples

On notera que ces exemples omettent l'utilisation des types de confiance pour des raisons de concision. Pour un code montrant l'approche recommandée, voir [Utiliser `TrustedScript`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval#utiliser_trustedscript) dans `eval()`.

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
