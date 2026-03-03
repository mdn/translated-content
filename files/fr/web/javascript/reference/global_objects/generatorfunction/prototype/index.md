---
title: "GeneratorFunction : propriété prototype"
short-title: prototype
slug: Web/JavaScript/Reference/Global_Objects/GeneratorFunction/prototype
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété **`prototype`** de `GeneratorFunction.prototype` est partagée par toutes les fonctions génératrices. Sa valeur est [`Generator.prototype`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Generator). Chaque fonction génératrice créée avec la syntaxe `function*` ou le constructeur `GeneratorFunction()` possède aussi sa propre propriété `prototype`, dont le prototype est `GeneratorFunction.prototype.prototype`. Lorsque la fonction génératrice est appelée, sa propriété `prototype` devient le prototype de l'objet générateur retourné.

## Valeur

Le même objet que [`Generator.prototype`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Generator). `GeneratorFunction.prototype.prototype` est le nom techniquement plus précis, mais `Generator.prototype` correspond à l'intuition qu'il s'agit du prototype des objets générateurs.

{{js_property_attributes(1, 0, 0)}}

La propriété `prototype` de chaque instance de `GeneratorFunction` est un objet vide sans propriétés, dont le prototype est `GeneratorFunction.prototype.prototype`. Elle possède les attributs de propriété suivants&nbsp;:

{{js_property_attributes(0, 0, 1)}}

## Description

Une instance de fonction génératrice possède deux propriétés `prototype`. La première est sa propre propriété `prototype`. La seconde est la propriété `prototype` de son prototype, qui est `GeneratorFunction.prototype`. (Rappelez-vous que chaque fonction génératrice est une instance de `GeneratorFunction`, donc elle a `GeneratorFunction.prototype` comme prototype.)

```js
function* genFunc() {}
const GeneratorFunctionPrototype = Object.getPrototypeOf(genFunc);
console.log(Object.hasOwn(genFunc, "prototype")); // true
console.log(Object.hasOwn(GeneratorFunctionPrototype, "prototype")); // true
```

Lorsque la fonction génératrice est appelée, la propriété `prototype` de la fonction génératrice devient le prototype de l'objet générateur retourné.

```js
const gen = genFunc();
const proto = Object.getPrototypeOf;
console.log(proto(gen) === genFunc.prototype); // true
console.log(proto(proto(gen)) === GeneratorFunctionPrototype.prototype); // true
```

Le diagramme suivant illustre la chaîne de prototypes d'une fonction génératrice et de ses instances. Chaque flèche creuse indique une relation d'héritage (c'est-à-dire un lien de prototype), et chaque flèche pleine indique une relation de propriété. Notez qu'il n'y a aucun moyen d'accéder à `genFunc` depuis `gen` — ils n'ont qu'une relation `instanceof`.

![Le diagramme d'héritage des générateurs et des fonctions génératrices](https://mdn.github.io/shared-assets/images/diagrams/javascript/generatorfunction/prototype-chain.svg)

## Spécifications

{{Specifications}}

## Voir aussi

- La déclaration {{JSxRef("Statements/function*", "function*")}}
- [L'expression `function*`](/fr/docs/Web/JavaScript/Reference/Operators/function*)
- L'objet {{JSxRef("AsyncGeneratorFunction")}}
- L'objet {{JSxRef("GeneratorFunction")}}
- [Héritage et chaîne de prototypes](/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [Itérateurs et générateurs](/fr/docs/Web/JavaScript/Guide/Iterators_and_generators)
