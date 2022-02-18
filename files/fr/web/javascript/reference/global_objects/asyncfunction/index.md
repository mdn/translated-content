---
title: AsyncFunction
slug: Web/JavaScript/Reference/Global_Objects/AsyncFunction
tags:
  - Constructeur
  - Experimental
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/AsyncFunction
original_slug: Web/JavaScript/Reference/Objets_globaux/AsyncFunction
---
{{JSRef}}

Le constructeur **`AsyncFunction`** crée un nouvel objet pour {{jsxref("Instructions/async function", "une fonction asynchrone","",1)}}. En JavaScript, chaque fonction asynchrone est en fait un objet `AsyncFunction`.

Attention, `AsyncFunction` n'est pas un objet global. On peut l'obtenir grâce au code suivant :

```js
Object.getPrototypeOf(async function(){}).constructor
```

## Syntaxe

    new AsyncFunction ([arg1[, arg2[, ...argN]],] functionBody)

### Paramètres

- `arg1, arg2, ... argN`
  - : Les noms des paramètres passés à la fonction. Chacun doit être une chaîne de caractères qui puisse être un identifiant JavaScript valide ou une liste de telles chaînes séparées par une virgule (ex. "`x`", "`laValeur`", ou "`a,b`").
- `functionBody`
  - : Une chaîne de caractères qui contient les instructions JavaScript définissant la définition de la fonction.

## Description

Les objets des {{jsxref("Instructions/async_function", "fonctions asynchrones","",1)}} créés avec le constructeur `AsyncFunction` sont analysés lorsque la fonction est créée. C'est moins efficace que de déclarer une fonction asynchrone avec une {{jsxref("Instructions/async_function", "expression de fonction asynchrone")}} et de l'appeler depuis le code car ces fonctions sont analysées avec le reste du code.

Tous les arguments passés à la fonction sont traités comme les noms des identifiants des paramètres de la fonction qui sera créée, dans l'ordre dans lequel ils sont passés.

> **Note :** Les fonctions asynchrones créées avec le constructeur `AsyncFunction` ne créent pas de fermetutres dans leurs contextes de création. Elles sont toujours créées dans la portée globale. Lorsqu'on les exécute, ellee ne pourront accéder qu'à leurs variables locales et aux variables globales, pas à celles qui appartiennent à la portée dans laquelle `AsyncFunction` a été appelé. On aurait donc un comportement différent  si on appelait {{jsxref("Objets_globaux/eval", "eval")}} avec le code de l'expression de la fonction asynchrone.

Si on appelle `AsyncFunction` comme une fonction (c'est-à-dire sans `new`), cela aura le même effet que s'il est appelé comme un constructeur.

## Propriétés

- **`AsyncFunction.length`**
  - : La propriété de longueur du constructeur `AsyncFunction` dont la valeur est 1.
- {{jsxref("AsyncFunction.prototype")}}
  - : Le prototype permet d'ajouter des propriétés à tous les objets représentant les fonctions asynchrones.

## Prototype de l'objet `AsyncFunction`

### Propriétés

{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/AsyncFunction/prototype', 'Propriétés')}}

## Instances `AsyncFunction`

Les instances d'`AsyncFunction` héritent des méthodes et des propriétés de {{jsxref("AsyncFunction.prototype")}}. Comme avec les autres constructeurs, on peut changer l'objet prototype du constructeur afin de modifier l'ensemble des instances `AsyncFunction`.

## Exemples

### Créer une fonction asynchrone avec un constructeur `AsyncFunction`

```js
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

var AsyncFunction = Object.getPrototypeOf(async function(){}).constructor
var a = new AsyncFunction("a",
                          "b",
                          "return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);");
a(10, 20).then(v => {
  console.log(v); // affiche 30 après 4 secondes
});
```

## Spécifications

| Spécification                                                                                            | État                         | Commentaires                     |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------------------- |
| {{SpecName('ESDraft', '#sec-async-function-objects', 'AsyncFunction object')}} | {{Spec2('ESDraft')}} | Définition initiale dans ES2017. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.AsyncFunction")}}

## Voir aussi

- Instruction {{jsxref("Instructions/async_function", "async function")}}
- Expression {{jsxref("Opérateurs/async_function","async function")}}
- {{jsxref("Objets_globaux/Function", "Function")}}
- Instruction {{jsxref("Instructions/function", "function")}}
- Expression {{jsxref("Opérateurs/function", "function")}}
- {{jsxref("Fonctions", "Fonctions et portées des fonctions", "", 1)}}
