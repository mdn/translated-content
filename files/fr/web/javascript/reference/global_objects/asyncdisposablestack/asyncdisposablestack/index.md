---
title: Constructeur AsyncDisposableStack()
short-title: AsyncDisposableStack()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/AsyncDisposableStack
l10n:
  sourceCommit: 7a5b580a28a0b1a33e42e9fb81c8234994ec0e36
---

Le constructeur **`AsyncDisposableStack()`** crée des objets {{JSxRef("AsyncDisposableStack")}}.

## Syntaxe

```js-nolint
new AsyncDisposableStack()
```

> [!NOTE]
> `AsyncDisposableStack()` ne peut être construit qu'avec [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new). Tenter de l'appeler sans `new` déclenche une exception {{JSxRef("TypeError")}}.

### Paramètres

Aucun.

### Valeur de retour

Un nouvel objet `AsyncDisposableStack`.

## Exemples

### Création d'un `AsyncDisposableStack`

```js
const gestionnaire = new AsyncDisposableStack();
gestionnaire.defer(() => console.log("Libéré !"));
await gestionnaire.disposeAsync();
// Affiche : Libéré !
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Gestion des ressources en JavaScript](/fr/docs/Web/JavaScript/Guide/Resource_management)
