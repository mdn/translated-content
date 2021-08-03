---
title: GeneratorFunction
slug: Web/JavaScript/Reference/Global_Objects/GeneratorFunction
tags:
  - Constructor
  - ECMAScript 2015
  - GeneratorFunction
  - Iterator
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/GeneratorFunction
original_slug: Web/JavaScript/Reference/Objets_globaux/GeneratorFunction
---
{{JSRef}}

Le constructeur **`GeneratorFunction`** permet de créer un nouvel objet qui est une {{jsxref("Instructions/function*", "fonction génératrice","",1)}}. En JavaScript, chaque générateur (ou fonction génératrice) est un objet `GeneratorFunction`.

L'objet `GeneratorFunction` n'est pas un objet global. Il peut être obtenu en exécutant le code suivant :

```js
Object.getPrototypeOf(function*(){}).constructor
```

## Syntaxe

    new GeneratorFunction ([arg1[, arg2[, ...argN]],] corpsFonction)

### Paramètres

- `arg1, arg2, ... argN`
  - : Les noms à utiliser pour les arguments formellement déclarés. Chacun doit être une chaîne de caractères correspondant à un identifiant JavaScript valide ou une liste de telles chaînes séparées par des virgules. Par exemple, on peut avoir "`x`", "`maValeur`", ou "`a,b`".
- `corpsFonction`
  - : Une chaîne qui contient les instructions JavaScript qui composent la définition de la fonction.

## Description

Les {{jsxref("Instructions/function*", "fonctions génératrices","",1)}} créées avec le constructeur `GeneratorFunction` sont analysés lorsque la fonction est crée. Cela est moins efficace que de déclarer un générateur avec une expression {{jsxref("Statements/function*", "function*")}} puis de l'appeler car ces fonctions sont analysées avec le reste du code (ce qui permet au moteur JavaScript d'effectuer certaines optimisations).

Tous les arguments passés à la fonction sont traités par la suite avec les noms des identifiants utilisés pour les noms des paramètres lors de la création de la fonction et avec cet ordre là.

> **Note :** Les {{jsxref("Instructions/function*", "générateurs","",1)}} créés avec le constructeur `GeneratorFunction` ne créent pas de fermetures avec leurs contextes de création. Ils sont toujours créés dans la portée globale. Lorsqu'ils sont exécutés, ils n'ont accès qu'à leurs variables locales et aux variables globales et ils n'ont pas accès aux variables de la portée où a eu lieu l'appel à `GeneratorFunction`. Ce comportement est différent de celui obtenu lorsqu'on appelle {{jsxref("Objets_globaux/eval", "eval")}} avec du code correspondant à une expression de générateur.

L'appel du constructeur `GeneratorFunction` comme fonction (c'est-à-dire sans utiliser l'opérateur `new`) aura le même effet que si celui-ci est invoqué comme constructeur.

## Propriétés

- **`GeneratorFunction.length`**
  - : La propriété de longueur du constructeur `GeneratorFunction` qui vaut 1.
- {{jsxref("GeneratorFunction.prototype")}}
  - : Le prototype du constructeur qui permet d'ajouter des propriétés à tous les générateurs.

## Le prototype de `GeneratorFunction`

### Propriétés

{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/GeneratorFunction/prototype', 'Properties')}}

## Les instances de `GeneratorFunction`

Les instances de `GeneratorFunction` héritent des méthodes et propriétés de {{jsxref("GeneratorFunction.prototype")}}. Comme pour tous les constructeurs, il est possible de modifier le prototype afin d'apporter des modifications à toutes les instances de `GeneratorFunction`.

## Exemples

### Créer un générateur en utilisant le constructeur `GeneratorFunction`

```js
var GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor
var g = new GeneratorFunction("a", "yield a * 2");
var itérateur = g(10);
console.log(itérateur.next().value); // 20
```

## Spécifications

| Spécification                                                                                            | Statut                       | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-generatorfunction-objects', 'GeneratorFunction')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-generatorfunction-objects', 'GeneratorFunction')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.GeneratorFunction")}}

## Voir aussi

- L'instruction {{jsxref("Instructions/function*", "function*")}}
- L'expression {{jsxref("Opérateurs/function*", "function*")}}
- {{jsxref("Function")}}
- L'instruction {{jsxref("Instructions/function", "function")}}
- L'expression {{jsxref("Opérateurs/L_opérateur_function", "function")}}
- {{jsxref("Fonctions", "Les fonctions et portées de fonctions", "", 1)}}
