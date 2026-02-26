---
title: "Generator : méthode throw()"
short-title: throw()
slug: Web/JavaScript/Reference/Global_Objects/Generator/throw
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`throw()`** des instances de {{JSxRef("Generator")}} agit comme si une instruction `throw` était insérée dans le corps du générateur à la position actuelle de suspension, ce qui informe le générateur d'une condition d'erreur et permet au générateur de gérer l'erreur, ou d'effectuer un nettoyage et de se fermer.

## Syntaxe

```js-nolint
generatorInstance.throw(exception)
```

### Paramètres

- `exception`
  - : L'exception à lever. Pour le débogage, il est utile d'en faire une instance de {{JSxRef("Error")}}.

### Valeur de retour

Si l'exception levée est interceptée par un bloc [`try...catch`](/fr/docs/Web/JavaScript/Reference/Statements/try...catch) et que le générateur reprend pour produire d'autres valeurs, il retourne un {{JSxRef("Object")}} avec deux propriétés&nbsp;:

- `done`
  - : Une valeur booléenne&nbsp;:
    - `true` si le flot d'exécution de la fonction génératrice a atteint la fin.
    - `false` si la fonction génératrice peut encore produire des valeurs.
- `value`
  - : La valeur produite par la prochaine expression `yield`.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si le générateur est déjà en cours d'exécution.

Si l'`exception` n'est pas interceptée par un bloc `try...catch` à l'intérieur de la fonction génératrice, elle est également levée vers l'appelant de `throw()`.

## Description

La méthode `throw()`, lorsqu'elle est appelée, agit comme si une instruction `throw exception;` était insérée dans le corps du générateur à la position de suspension actuelle, où `exception` est l'exception passée à la méthode `throw()`. Ainsi, dans un flot typique, appeler `throw(exception)` fait lever une exception par le générateur. Cependant, si l'expression `yield` est enveloppée dans un bloc `try...catch`, l'erreur peut être interceptée et le flot d'exécution peut soit reprendre après la gestion de l'erreur, soit se terminer proprement.

## Exemples

### Utiliser la méthode `throw()`

Dans l'exemple suivant, on utilise un générateur simple et on génère une exception grâce à la méthode `throw`. Une exception peut être interceptée avec un bloc {{JSxRef("Statements/try...catch", "try...catch")}} usuel.

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

const g = gen();
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

- La déclaration {{JSxRef("Statements/function*", "function*")}}
