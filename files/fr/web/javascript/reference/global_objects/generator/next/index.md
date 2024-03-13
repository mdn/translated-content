---
title: Generator.prototype.next()
slug: Web/JavaScript/Reference/Global_Objects/Generator/next
---

{{JSRef}}

La méthode **`next()`** renvoie un objet possédant deux propriétés `done` et `value`. Cette méthode peut également recevoir un paramètre pour envoyer une valeur au générateur.

## Syntaxe

```js
gen.next(valeur);
```

### Paramètres

- `valeur`
  - : La valeur à envoyer au générateur. La valeur sera affectée comme résultat d'une expression `yield`. Autrement dit, lorsque le générateur contient une expression de la forme `variable = yield expression`, c'est l'argument `valeur` qui sera affecté à `variable`_._

### Valeur de retour

Un {{jsxref("Object")}} possédant deux propriétés :

- `done` (un booléen)

  - vaut `true` si l'itérateur a atteint la fin de la série sur laquelle il itère. Dans ce cas, la propriété `value` définit la valeur de retour pour l'itérateur.
  - vaut `false` si l'itérateur a pu fournir la prochaine valeur de la série. C'est la valeur par défaut si la propriété `done` n'est pas définie.

- `value` - n'importe quelle valeur JavaScript renvoyée par l'itérateur. Cette propriété peut être absente lorsque `done` vaut `true`.

## Exemples

### Utiliser `next()`

L'exemple suivant illustre comment utiliser un générateur simple et les objets renvoyés par la méthode `next` :

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen(); // "Generator { }"
g.next(); // "Object { value: 1, done: false }"
g.next(); // "Object { value: 2, done: false }"
g.next(); // "Object { value: 3, done: false }"
g.next(); // "Object { value: undefined, done: true }"
```

### Envoyer des valeurs à un générateur

Ici, `next` est appelé avec une valeur. On notera ici que le premier appel n'affiche rien car le générateur n'a encore rien généré.

```js
function* gen() {
  while (true) {
    var value = yield null;
    console.log(value);
  }
}

var g = gen();
g.next(1);
// "{ value: null, done: false }"
g.next(2);
// 2
// "{ value: null, done: false }"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Instructions/function*","function*")}}
- [Les itérateurs et générateurs](/fr/docs/Web/JavaScript/Guide/iterateurs_et_generateurs)
