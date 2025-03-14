---
title: Generator.prototype.throw()
slug: Web/JavaScript/Reference/Global_Objects/Generator/throw
---

{{JSRef}}

La méthode **`throw()`** lève une erreur dans un générateur.

## Syntaxe

```js
gen.throw(exception);
```

### Paramètres

- `exception`
  - : L'exception à lever. On préfèrera généralement utiliser un objet qui est une instance d'{{jsxref("Error")}}.

### Valeur de retour

Un {{jsxref("Object")}} avec deux propriétés :

- `done` (un booléen)

  - Qui vaut `true` lorsque l'itérateur a fini de parcourir la suite. Dans ce cas, `value` correspondra éventuellement à la valeur de retour de l'itérateur.
  - Qui vaut `false` si l'itérateur a pu produire la prochaine valeur de la série.

- `value` : une valeur renvoyée par l'itérateur. Lorsque `done` vaut `true`, cette valeur peut être absente ou valoir `undefined`.

## Exemples

### Utiliser `throw()`

Dans l'exemple suivant, on utilise un générateur simple et on génère une exception grâce à la méthode `throw()`. Une exception peut être interceptée avec un bloc {{jsxref("Instructions/try...catch","try...catch")}} usuel.

```js
function* gen() {
  while (true) {
    try {
      yield 42;
    } catch (e) {
      console.log("Erreur interceptée !");
    }
  }
}

var g = gen();
g.next();
// { value: 42, done: false }
g.throw(new Error("Quelque chose s'est mal passé"));
// "Erreur interceptée !"
// { value: 42, done: false }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Instructions/function*","function*")}}
