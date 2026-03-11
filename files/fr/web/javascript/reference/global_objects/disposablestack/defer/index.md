---
title: "DisposableStack : méthode defer()"
short-title: defer()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/defer
l10n:
  sourceCommit: 7a5b580a28a0b1a33e42e9fb81c8234994ec0e36
---

La méthode **`defer()`** des instances de {{JSxRef("DisposableStack")}} prend une fonction de rappel à appeler lors de la libération de la pile.

## Syntaxe

```js-nolint
defer(onDispose)
```

### Paramètres

- `onDispose`
  - : Une fonction qui sera appelée lors de la libération de la pile. La fonction ne reçoit aucun argument.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `onDispose` n'est pas une fonction.
- {{JSxRef("ReferenceError")}}
  - : Levée si la pile est déjà libérée.

## Description

L'objectif principal de `defer()` est d'enregistrer une fonction de rappel de nettoyage qui n'est pas spécifique à la libération d'une ressource particulière. Si la fonction de rappel concerne une ressource, vous devez utiliser {{JSxRef("DisposableStack/use", "use()")}} ou {{JSxRef("DisposableStack/adopt", "adopt()")}} à la place. Vous pouvez aussi utiliser `defer` lorsque la ressource n'est pas gérée dans votre code&nbsp;:

```js
function consumeReader(reader) {
  using disposer = new DisposableStack();
  disposer.defer(() => reader.releaseLock());
  // Effectuer une opération avec reader
}
```

## Exemples

### Utiliser la méthode `defer()`

Cette fonction place un verrou simple pour empêcher plusieurs opérations asynchrones de s'exécuter en même temps. Le verrou est libéré lorsque la fonction se termine.

```js
let isLocked = false;

async function requestWithLock(url, options) {
  if (isLocked) {
    return undefined;
  }
  using disposer = new DisposableStack();
  isLocked = true;
  disposer.defer(() => (isLocked = false));
  const data = await fetch(url, options).then((res) => res.json());
  return data;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Gestion des ressources JavaScript](/fr/docs/Web/JavaScript/Guide/Resource_management)
- L'objet {{JSxRef("DisposableStack")}}
- La méthode {{JSxRef("DisposableStack.prototype.adopt()")}}
- La méthode {{JSxRef("DisposableStack.prototype.use()")}}
