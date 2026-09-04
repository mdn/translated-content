---
title: "DisposableStack : propriété disposed"
short-title: disposed
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/disposed
l10n:
  sourceCommit: 7a5b580a28a0b1a33e42e9fb81c8234994ec0e36
---

La propriété accesseur **`disposed`** des instances de {{JSxRef("DisposableStack")}} retourne un booléen indiquant si ce `DisposableStack` a été libéré ou déplacé en effectuant l'une des actions suivantes&nbsp;:

- Appeler sa méthode {{JSxRef("DisposableStack/dispose", "dispose()")}}
- Appeler sa méthode {{JSxRef("DisposableStack/move", "move()")}}
- Le déclarer avec {{JSxRef("Statements/using", "using")}} et laisser la variable sortir de la portée, ce qui appelle automatiquement la méthode [`[Symbol.dispose]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose).

## Exemples

### Vérifier si une pile est libérée

```js
const disposer = new DisposableStack();
console.log(disposer.disposed); // false
disposer.dispose();
console.log(disposer.disposed); // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Gestion des ressources JavaScript](/fr/docs/Web/JavaScript/Guide/Resource_management)
