---
title: "AsyncDisposableStack : propriété disposed"
short-title: disposed
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/disposed
l10n:
  sourceCommit: 7a5b580a28a0b1a33e42e9fb81c8234994ec0e36
---

La propriété d'accesseur **`disposed`** des instances de {{JSxRef("AsyncDisposableStack")}} retourne un booléen indiquant si cette pile `AsyncDisposableStack` a été libérée ou déplacée par l'une des actions suivantes&nbsp;:

- Appel de sa méthode {{JSxRef("AsyncDisposableStack/disposeAsync", "disposeAsync()")}}
- Appel de sa méthode {{JSxRef("AsyncDisposableStack/move", "move()")}}
- Déclaration avec {{JSxRef("Statements/await_using", "await using")}} et sortie de portée de la variable, ce qui appelle automatiquement la méthode [`[Symbol.asyncDispose]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose).

## Exemples

### Vérifier si une pile est libérée

```js
const gestionnaire = new AsyncDisposableStack();
console.log(gestionnaire.disposed); // false
await gestionnaire.disposeAsync();
console.log(gestionnaire.disposed); // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Gestion des ressources en JavaScript](/fr/docs/Web/JavaScript/Guide/Resource_management)
