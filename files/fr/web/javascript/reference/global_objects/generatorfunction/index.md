---
title: GeneratorFunction
slug: Web/JavaScript/Reference/Global_Objects/GeneratorFunction
translation_of: Web/JavaScript/Reference/Global_Objects/GeneratorFunction
original_slug: Web/JavaScript/Reference/Objets_globaux/GeneratorFunction
browser-compat: javascript.builtins.GeneratorFunction
---
{{JSRef}}

En JavaScript, chaque fonction génératrice est en réalité un objet `GeneratorFunction`. Il n'existe pas d'objet global avec le nom `GeneratorFunction`, mais il est possible de créer un constructeur `GeneratorFunction()` avec le code suivant&nbsp;:

```js
const GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor;
```

## Description

Les [fonctions génératrices](/fr/docs/Web/JavaScript/Reference/Statements/function*) créées avec un constructeur sont analysées à la création de la fonction. Il s'agit là d'une méthode moins efficace qu'une déclaration de fonction génératrice avec [une expression `function*`](/fr/docs/Web/JavaScript/Reference/Statements/function*) qu'on appelle dans le code. En effet, de telles fonctions sont alors analysées avec le reste du code.

Tous les arguments passés à la fonction sont traités comme les noms des identifiants des paramètres de la fonction à créer, dans l'ordre dans lequel ils sont passés.

> **Note :** Les [fonctions génératrices](/fr/docs/Web/JavaScript/Reference/Statements/function*) créées avec un constructeur ne créent pas de fermetures avec leur contexte de création. Elles sont toujours créées dans la portée globale.
>
> Lors de leur exécution, elles ne pourront accéder qu'à leurs variables locales et aux variables globales, pas à celles de la portée dans laquelle le constructeur a été appelé.
>
> Il y a donc une différence de comportement par rapport à une expression [`eval()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval) qui contiendrait une expression de fonction génératrice.

Invoquer un constructeur de fonction génératrice comme une fonction (sans utiliser `new`) aura le même effet que d'appeler le constructeur.

## Exemples

### Créer un générateur en utilisant le constructeur `GeneratorFunction()`

```js
const GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor;
const g = new GeneratorFunction('a', 'yield a * 2');
const iterator = g(10);
console.log(iterator.next().value); // 20
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'instruction [`function*`](/fr/docs/Web/JavaScript/Reference/Statements/function*)
- L'expression [`function*`](/fr/docs/Web/JavaScript/Reference/Operators/function*)
- [`Function`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function)
- L'instruction [`function`](/fr/docs/Web/JavaScript/Reference/Statements/function)
- L'expression [`function`](/fr/docs/Web/JavaScript/Reference/Operators/function)
- [Les fonctions et portées de fonctions](/fr/docs/Web/JavaScript/Reference/Functions)
