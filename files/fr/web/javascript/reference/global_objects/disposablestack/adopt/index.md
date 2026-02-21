---
title: "DisposableStack : méthode adopt()"
short-title: adopt()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/adopt
l10n:
  sourceCommit: 7a5b580a28a0b1a33e42e9fb81c8234994ec0e36
---

La méthode **`adopt()`** des instances de {{JSxRef("DisposableStack")}} enregistre une valeur qui n'implémente pas le protocole de libération dans la pile en fournissant une fonction de libération personnalisée.

## Syntaxe

```js-nolint
adopt(value, onDispose)
```

### Paramètres

- `value`
  - : Toute valeur à enregistrer dans la pile.
- `onDispose`
  - : Une fonction qui sera appelée lors de la libération de la pile. La fonction reçoit `value` comme seul argument.

### Valeur de retour

La même valeur `value` qui a été passée en argument.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `onDispose` n'est pas une fonction.
- {{JSxRef("ReferenceError")}}
  - : Levée si la pile est déjà libérée.

## Description

L'objectif principal de `adopt()` est d'enregistrer une valeur qui n'implémente pas le protocole de libération dans la pile. Si la valeur est déjà libérable, vous pouvez utiliser {{JSxRef("DisposableStack/use", "use()")}} à la place, ce qui utilise automatiquement la méthode `[Symbol.dispose]()` de la valeur comme fonction de libération.

`adopt(value, onDispose)` est presque identique à `defer(() => onDispose(value))`, mais elle permet de déclarer la ressource et de l'enregistrer sur la même ligne. Ainsi, il y a peu de chances qu'une erreur survienne entre la création et l'enregistrement de la ressource, ce qui pourrait entraîner une fuite de la ressource.

```js example-good
using disposer = new DisposableStack();
const reader = disposer.adopt(stream.getReader(), (reader) =>
  reader.releaseLock(),
);
```

```js example-bad
using disposer = new DisposableStack();
const reader = stream.getReader();
// Si quelqu'un ajoute du code entre ces lignes et qu'une erreur
// survient, le flux restera verrouillé indéfiniment.
disposer.defer(() => reader.close());
```

Dans le même esprit de «&nbsp;déclarer et enregistrer la ressource dès sa création&nbsp;», vous devez toujours envelopper l'expression d'acquisition de la ressource dans `adopt()`, au lieu de l'extraire dans une instruction séparée.

```js example-bad
using disposer = new DisposableStack();
const reader = stream.getReader();
disposer.adopt(reader, (reader) => reader.close());
```

## Exemples

### Utiliser la méthode `adopt()`

Ce code consomme un {{DOMxRef("ReadableStream")}} via un {{DOMxRef("ReadableStreamDefaultReader")}}. Le lecteur n'implémente pas le protocole de libération, donc nous utilisons `adopt()` pour l'enregistrer dans la pile.

```js
{
  using disposer = new DisposableStack();
  const reader = disposer.adopt(stream.getReader(), (reader) =>
    reader.releaseLock(),
  );
  const { value, done } = reader.read();
  if (!done) {
    // Traiter la valeur
  }
  // La méthode reader.releaseLock() est appelée ici avant de sortir
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Gestion des ressources JavaScript](/fr/docs/Web/JavaScript/Guide/Resource_management)
- L'objet {{JSxRef("DisposableStack")}}
- La méthode {{JSxRef("DisposableStack.prototype.defer()")}}
- La méthode {{JSxRef("DisposableStack.prototype.use()")}}
