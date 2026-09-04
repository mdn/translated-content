---
title: AsyncGeneratorFunction.prototype.prototype
short-title: prototype
slug: Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/prototype
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété **`prototype`** de `AsyncGeneratorFunction.prototype` est partagée par toutes les fonctions génératrices asynchrones. Sa valeur est [`AsyncGenerator.prototype`](/fr/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator). Chaque fonction génératrice asynchrone créée avec la syntaxe `async function*` ou le constructeur `AsyncGeneratorFunction()` possède également sa propre propriété `prototype`, dont le prototype est `AsyncGeneratorFunction.prototype.prototype`. Lorsque la fonction génératrice asynchrone est appelée, sa propriété `prototype` devient le prototype de l'objet générateur asynchrone retourné.

## Valeur

Il s'agit du même objet que [`AsyncGenerator.prototype`](/fr/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator). `AsyncGeneratorFunction.prototype.prototype` est le nom techniquement plus précis, mais `AsyncGenerator.prototype` correspond à l'intuition qu'il s'agit du prototype des objets générateurs asynchrones.

{{js_property_attributes(0, 0, 1)}}

La propriété `prototype` de chaque instance de `AsyncGeneratorFunction` est un objet vide sans propriétés, dont le prototype est `AsyncGeneratorFunction.prototype.prototype`. Elle possède les attributs de propriété suivants&nbsp;:

{{js_property_attributes(1, 0, 0)}}

## Description

Une instance de fonction génératrice asynchrone possède deux propriétés `prototype`. La première est sa propre propriété `prototype`. La seconde est la propriété `prototype` de son prototype, qui est `AsyncGeneratorFunction.prototype`. (Rappelez-vous que chaque fonction génératrice asynchrone est une instance de `AsyncGeneratorFunction`, donc son prototype est `AsyncGeneratorFunction.prototype`.)

```js
async function* genFunc() {}
const AsyncGeneratorFunctionPrototype = Object.getPrototypeOf(genFunc);
console.log(Object.hasOwn(genFunc, "prototype")); // true
console.log(Object.hasOwn(AsyncGeneratorFunctionPrototype, "prototype")); // true
```

Lorsqu'une fonction génératrice asynchrone est appelée, sa propriété `prototype` devient le prototype de l'objet générateur asynchrone retourné.

```js
const gen = genFunc();
const proto = Object.getPrototypeOf;
console.log(proto(gen) === genFunc.prototype); // true
console.log(proto(proto(gen)) === AsyncGeneratorFunctionPrototype.prototype); // true
```

Le schéma suivant illustre la chaîne de prototypes d'une fonction génératrice asynchrone et de ses instances. Chaque flèche creuse indique une relation d'héritage (c'est-à-dire un lien de prototype), et chaque flèche pleine indique une relation de propriété. Notez qu'il n'existe aucun moyen d'accéder à `genFunc` depuis `gen` — ils n'ont qu'une relation via `instanceof`.

![Diagramme d'héritage des générateurs asynchrones et des fonctions génératrices asynchrones](https://mdn.github.io/shared-assets/images/diagrams/javascript/asyncgeneratorfunction/prototype-chain.svg)

## Spécifications

{{Specifications}}

## Voir aussi

- L'instruction [`async function*`](/fr/docs/Web/JavaScript/Reference/Statements/async_function*)
- [L'expression `async function*`](/fr/docs/Web/JavaScript/Reference/Operators/async_function*)
- {{JSxRef("AsyncGeneratorFunction")}}
- {{JSxRef("GeneratorFunction")}}
- [Héritage et chaîne de prototypes](/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [Itérateurs et générateurs](/fr/docs/Web/JavaScript/Guide/Iterators_and_generators)
