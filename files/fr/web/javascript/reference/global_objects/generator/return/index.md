---
title: Generator.prototype.return()
slug: Web/JavaScript/Reference/Global_Objects/Generator/return
---

{{JSRef}}

La méthode **`return()`** renvoie la valeur fournie et termine le générateur.

## Syntaxe

```js
gen.return(valeur);
```

### Paramètres

- `valeur`
  - : La valeur à renvoyer

### Valeur de retour

La valeur fournie comme argument.

## Exemples

### Utiliser `return()`

L'exemple suivant illustre une utilisation simple d'un générateur et de la méthode `return()`.

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen();

g.next(); // { value: 1, done: false }
g.return("toto"); // { value: "toto", done: true }
g.next(); // { value: undefined, done: true }
```

> **Note :** Si `done` vaut `true`, `return(valeur)` renverra la même chose que `next()` : `undefined`. Si aucun argument n'est fourni, la propriété `value` de l'objet renvoyé sera la même qu'avec un appel à `.next()`. Si un argument est fourni, c'est lui qui sera utilisé comme valeur pour l'attribut `value` du résultat.
>
> ```js
> function* gen() {
>   yield 1;
>   yield 2;
>   yield 3;
> }
> var g = gen();
> console.log(g.next()); // { value: 1; done: false}
> console.log(g.next()); // { value: 2; done: false}
> console.log(g.next()); // { value: 3; done: false}
> console.log(g.next()); // { value: undefined; done: true}
> console.log(g.return()); // { value: undefined; done: true}
> console.log(g.return(1)); // { value: 1; done: true}
> ```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`function*`](/fr/docs/Web/JavaScript/Reference/Instructions/function*)
