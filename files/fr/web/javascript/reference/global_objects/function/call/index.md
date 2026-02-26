---
title: "Function : méthode call()"
short-title: call()
slug: Web/JavaScript/Reference/Global_Objects/Function/call
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`call()`** des instances de {{JSxRef("Function")}} appelle cette fonction avec une valeur `this` donnée et des arguments fournis individuellement.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Function.prototype.call()")}}

```js interactive-example
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "nourriture";
}

console.log(new Food("fromage", 5).name);
// Résultat attendu : "fromage"
```

## Syntaxe

```js-nolint
call(thisArg)
call(thisArg, arg1)
call(thisArg, arg1, arg2)
call(thisArg, arg1, arg2, /* …, */ argN)
```

### Paramètres

- `thisArg`
  - : La valeur à utiliser comme `this` lors de l'appel de `func`. Si la fonction n'est pas en [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode), {{JSxRef("Operators/null", "null")}} et {{JSxRef("Global_Objects/undefined", "undefined")}} seront remplacées par l'objet global, et les valeurs primitives seront converties en objets.
- `arg1`, …, `argN` {{Optional_Inline}}
  - : Les arguments pour la fonction.

### Valeur de retour

Le résultat de l'appel de la fonction invoquée avec la valeur `this` indiquée et les arguments fournis.

## Description

> [!NOTE]
> Cette fonction est presque identique à {{JSxRef("Function/apply", "apply()")}}, sauf que les arguments de la fonction sont passés à `call()` individuellement sous forme de liste, tandis que pour `apply()` ils sont regroupés dans un seul objet, généralement un tableau — par exemple, `func.call(this, "eat", "bananas")` contre `func.apply(this, ["eat", "bananas"])`.

Normalement, lors de l'appel d'une fonction, la valeur de {{JSxRef("Operators/this", "this")}} à l'intérieur de la fonction est l'objet sur lequel la fonction a été appelée. Avec `call()`, vous pouvez attribuer une valeur arbitraire à `this` lors de l'appel d'une fonction existante, sans d'abord rattacher la fonction à l'objet comme propriété. Cela vous permet d'utiliser les méthodes d'un objet comme fonctions utilitaires génériques.

> [!WARNING]
> N'utilisez pas `call()` pour chaîner des constructeurs (par exemple, pour implémenter l'héritage). Cela invoque la fonction constructeur comme une fonction ordinaire, ce qui signifie que {{JSxRef("Operators/new.target", "new.target")}} vaut `undefined`, et les classes lèvent une erreur car elles ne peuvent pas être appelées sans {{JSxRef("Operators/new", "new")}}. Utilisez plutôt {{JSxRef("Reflect.construct()")}} ou {{JSxRef("Classes/extends", "extends")}}.

## Exemples

### Utiliser `call()` pour invoquer une fonction et définir la valeur de `this`

Dans l'exemple ci-dessous, lorsque nous appelons `meilleur`, la valeur de `this` sera liée à l'objet `obj`, même si `meilleur` n'est pas une méthode de `obj`.

```js
function meilleur() {
  console.log(this.animal, "dorment généralement entre", this.sleepDuration);
}

const obj = {
  animal: "chats",
  sleepDuration: "12 et 16 heures",
};

meilleur.call(obj); // chats dorment généralement entre 12 et 16 heures
```

### Utiliser `call()` pour invoquer une fonction sans indiquer le premier `argument`

Si le premier paramètre `thisArg` est omis, il prend la valeur `undefined` par défaut. En mode non strict, la valeur de `this` est alors remplacée par {{JSxRef("globalThis")}} (qui correspond à l'objet global).

```js
globalThis.globProp = "toto";

function afficher() {
  console.log(`La valeur de globProp est ${this.globProp}`);
}

afficher.call(); // Logs "La valeur de globProp est toto"
```

En mode strict, la valeur de `this` n'est pas remplacée, elle reste donc `undefined`.

```js
"use strict";

globalThis.globProp = "toto";

function afficher() {
  console.log(`La valeur de globProp est ${this.globProp}`);
}

afficher.call(); // throws TypeError: Cannot read the property of 'globProp' of undefined
```

### Transformer des méthodes en fonctions utilitaires

`call()` est presque équivalent à un appel de fonction normal, sauf que `this` est passé comme un paramètre normal au lieu d'être la valeur sur laquelle la fonction a été appelée. Cela ressemble à la façon dont fonctionnent les fonctions utilitaires généralistes&nbsp;: au lieu d'appeler `array.map(callback)`, vous utilisez `map(array, callback)`, ce qui vous permet d'utiliser `map` avec des objets ressemblant à des tableaux qui ne sont pas des tableaux (par exemple, [`arguments`](/fr/docs/Web/JavaScript/Reference/Functions/arguments)) sans modifier `Object.prototype`.

Prenons {{JSxRef("Array.prototype.slice()")}}, par exemple, que vous souhaitez utiliser pour convertir un objet ressemblant à un tableau en un vrai tableau. Vous pourriez créer un raccourci comme ceci&nbsp;:

```js
const slice = Array.prototype.slice;

// …

slice.call(arguments);
```

Notez que vous ne pouvez pas sauvegarder `slice.call` et l'appeler comme une fonction simple, car la méthode `call()` lit également sa valeur `this`, qui est la fonction qu'elle doit appeler. Dans ce cas, vous pouvez utiliser {{JSxRef("Function/bind", "bind()")}} pour lier la valeur de `this` pour `call()`. Dans le code suivant, `slice()` est une version liée de `Function.prototype.call()`, avec la valeur `this` liée à {{JSxRef("Array.prototype.slice()")}}. Cela signifie que les appels supplémentaires à `call()` peuvent être éliminés&nbsp;:

```js
// Identique à "slice" dans l'exemple précédent
const unboundSlice = Array.prototype.slice;
const slice = Function.prototype.call.bind(unboundSlice);

// …

slice(arguments);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Function.prototype.bind()")}}
- La méthode {{JSxRef("Function.prototype.apply()")}}
- La méthode {{JSxRef("Reflect.apply()")}}
- [Syntaxe de décomposition (`...`)](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [Introduction à JavaScript orienté objet](/fr/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects)
