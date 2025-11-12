---
title: AsyncGeneratorFunction
slug: Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

L'objet **`AsyncGeneratorFunction`** fournit des méthodes pour les [fonctions génératrices asynchrones](/fr/docs/Web/JavaScript/Reference/Statements/async_function*). En JavaScript, chaque fonction génératrice asynchrone est en réalité un objet `AsyncGeneratorFunction`.

Notez que `AsyncGeneratorFunction` n'est _pas_ un objet global. Vous pouvez l'obtenir avec le code suivant&nbsp;:

```js
const AsyncGeneratorFunction = async function* () {}.constructor;
```

`AsyncGeneratorFunction` est une sous-classe de {{JSxRef("Function")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: AsyncGeneratorFunction", "taller")}}

```js interactive-example
const AsyncGeneratorFunction = async function* () {}.constructor;

const foo = new AsyncGeneratorFunction(`
  yield await Promise.resolve('a');
  yield await Promise.resolve('b');
  yield await Promise.resolve('c');
`);

let str = "";

async function generate() {
  for await (const val of foo()) {
    str += val;
  }
  console.log(str);
}

generate();
// Résultat attendu : "abc"
```

## Constructeur

- {{JSxRef("AsyncGeneratorFunction/AsyncGeneratorFunction", "AsyncGeneratorFunction()")}}
  - : Crée un nouvel objet `AsyncGeneratorFunction`.

## Propriétés d'instance

_Hérite également des propriétés d'instance de sa super-classe {{JSxRef("Function")}}._

Ces propriétés sont définies sur `AsyncGeneratorFunction.prototype` et partagées par toutes les instances de `AsyncGeneratorFunction`.

- {{JSxRef("Object/constructor", "AsyncGeneratorFunction.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'instance de l'objet. Pour les instances de `AsyncGeneratorFunction`, la valeur initiale est le constructeur {{JSxRef("AsyncGeneratorFunction/AsyncGeneratorFunction", "AsyncGeneratorFunction")}}.
- `AsyncGeneratorFunction.prototype.prototype`
  - : Toutes les fonctions génératrices asynchrones partagent la même propriété [`prototype`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function), qui est [`AsyncGenerator.prototype`](/fr/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator). Chaque fonction génératrice asynchrone créée avec la syntaxe `async function*` ou le constructeur `AsyncGeneratorFunction()` possède également sa propre propriété `prototype`, dont le prototype est `AsyncGeneratorFunction.prototype.prototype`. Lorsque la fonction génératrice asynchrone est appelée, sa propriété `prototype` devient le prototype de l'objet générateur asynchrone retourné.
- `AsyncGeneratorFunction.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"AsyncGeneratorFunction"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

Ces propriétés sont des propriétés propres à chaque instance de `AsyncGeneratorFunction`.

- {{JSxRef("AsyncGeneratorFunction/prototype", "prototype")}}
  - : Utilisé lorsque la fonction est utilisée comme constructeur avec l'opérateur [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new). Il deviendra le prototype du nouvel objet.

## Méthodes d'instance

_Hérite des méthodes d'instance de sa super-classe {{JSxRef("Function")}}._

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'instruction [`async function*`](/fr/docs/Web/JavaScript/Reference/Statements/async_function*)
- [L'expression `async function*`](/fr/docs/Web/JavaScript/Reference/Operators/async_function*)
- L'objet global {{JSxRef("Function")}}
- L'objet {{JSxRef("AsyncFunction")}}
- L'objet {{JSxRef("GeneratorFunction")}}
- {{JSxRef("Functions", "Les fonctions", "", 1)}}
