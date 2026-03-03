---
title: "DisposableStack : méthode use()"
short-title: use()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/use
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

La méthode **`use()`** des instances de {{JSxRef("DisposableStack")}} enregistre une valeur qui implémente le [protocole de libération](/fr/docs/Web/JavaScript/Guide/Resource_management) dans la pile.

## Syntaxe

```js-nolint
use(value)
```

### Paramètres

- `value`
  - : La valeur à enregistrer dans la pile. Elle doit soit contenir une méthode `[Symbol.dispose]()`, soit être `null` ou `undefined`.

### Valeur de retour

La même valeur `value` qui a été passée en argument.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `value` n'est pas `null` ou `undefined`, et ne contient pas de méthode `[Symbol.dispose]()`.
- {{JSxRef("ReferenceError")}}
  - : Levée si la pile est déjà libérée.

## Description

L'objectif principal de `use()` est d'enregistrer une valeur qui implémente le protocole de libération dans la pile, comme l'équivalent de la déclaration {{JSxRef("Statements/using", "using")}}. Si la valeur n'implémente pas le protocole de libération (elle ne possède pas la méthode `[Symbol.dispose]()`), utilisez {{JSxRef("DisposableStack/adopt", "adopt()")}} à la place, en passant une fonction de rappel qui appelle la méthode de nettoyage de la ressource.

Vous devez enregistrer votre ressource dès sa déclaration. Cela signifie que vous devez toujours envelopper l'expression d'acquisition de la ressource dans `use()`, au lieu de l'extraire dans une instruction séparée.

```js example-bad
using disposer = new DisposableStack();
const reader = stream.getReader();
disposer.use(reader);
```

## Exemples

### Utiliser la méthode `use()`

Ce code consomme un {{DOMxRef("ReadableStream")}} via un {{DOMxRef("ReadableStreamDefaultReader")}}. Le lecteur est automatiquement fermé lorsque la fonction se termine, en supposant qu'il implémente une méthode `[Symbol.dispose]()` qui libère le verrou sur le flux de façon synchrone.

```js
{
  using disposer = new DisposableStack();
  const reader = disposer.use(stream.getReader());
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
- La méthode {{JSxRef("DisposableStack.prototype.adopt()")}}
- La méthode {{JSxRef("DisposableStack.prototype.defer()")}}
