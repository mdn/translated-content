---
title: AsyncFunction
slug: Web/JavaScript/Reference/Global_Objects/AsyncFunction
---

{{JSRef}}

Le constructeur **`AsyncFunction`** crée un nouvel objet pour [une fonction asynchrone](/fr/docs/Web/JavaScript/Reference/Statements/async_function). En JavaScript, chaque fonction asynchrone est en fait un objet `AsyncFunction`.

On notera que `AsyncFunction` _n'est pas_ un objet global. On peut l'obtenir grâce au code suivant&nbsp;:

```js
Object.getPrototypeOf(async function () {}).constructor;
```

## Syntaxe

```js
new AsyncFunction(arg0, corpsFonction);
new AsyncFunction(arg0, arg1, corpsFonction);
new AsyncFunction(arg0, arg1, ...argN, corpsFonction);
```

### Paramètres

- `arg1, arg2, ... argN`

  - : Les noms à utiliser comme noms d'arguments formels. Chacun doit être une chaîne de caractères correspondant à un paramètre JavaScript valide (que ce soit [un identifiant](/fr/docs/Glossary/Identifier), [un paramètre du reste](/fr/docs/Web/JavaScript/Reference/Functions/rest_parameters), ou [une affectation par décomposition](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)).

    Les paramètres étant analysés comme les déclarations de fonction, les espaces et commentaires sont acceptés. Par exemple&nbsp;: `"x", "laValeur = 42", "[a, b] /* nombres */"` — ou `"x, laValeur = 42, [a, b] /* nombres */"`. (`"x, laValeur = 42", "[a, b]"` est également correct mais moins lisible.)

- `corpsFonction`
  - : Une chaîne de caractères qui contient les instructions JavaScript définissant la fonction.

## Description

Les objets de [fonction asynchrone](/fr/docs/Web/JavaScript/Reference/Statements/async_function) créés avec le constructeur `AsyncFunction` sont analysés lorsque la fonction est créée. C'est moins efficace que de déclarer une fonction asynchrone avec une [expression de fonction asynchrone](/fr/docs/Web/JavaScript/Reference/Operators/async_function) et de l'appeler depuis le code, car ces fonctions sont analysées avec le reste du code.

Tous les arguments passés à la fonction sont traités comme les noms des identifiants des paramètres de la fonction qui sera créée, dans l'ordre dans lequel ils sont passés.

> **Note :** Les [fonctions asynchrones](/fr/docs/Web/JavaScript/Reference/Statements/async_function) créées avec le constructeur `AsyncFunction` ne créent pas de fermetures avec leurs contextes de création. Elles sont toujours créées dans la portée globale.
>
> Lorsqu'on les exécute, elles ne pourront accéder qu'à leurs variables locales et aux variables globales, pas à celles qui appartiennent à la portée dans laquelle `AsyncFunction` a été appelé.
>
> On aurait donc un comportement différent si on appelait [`eval()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval) avec le code de l'expression de la fonction asynchrone.

Si on appelle `AsyncFunction` comme une fonction (c'est-à-dire sans `new`), cela aura le même effet que s'il est appelé comme un constructeur.

## Exemples

### Créer une fonction asynchrone avec le constructeur `AsyncFunction()`

```js
function resoudreApres2Secondes(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

let AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;

let a = new AsyncFunction(
  "a",
  "b",
  "return await resoudreApres2Secondes(a) + await resoudreApres2Secondes(b);",
);

a(10, 20).then((v) => {
  console.log(v); // affiche 30 dans la console après 4 secondes
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Instruction de fonction asynchrone](/fr/docs/Web/JavaScript/Reference/Statements/async_function)
- [Expression de fonction asynchrone avec les mots-clés `async function`](/fr/docs/Web/JavaScript/Reference/Operators/async_function)
- [`Function`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function)
- [Instruction de fonction](/fr/docs/Web/JavaScript/Reference/Statements/function)
- [Expression de fonction](/fr/docs/Web/JavaScript/Reference/Operators/function)
- [Fonctions et portées de fonction](/fr/docs/Web/JavaScript/Reference/Functions)
