---
title: Constructeur DisposableStack()
short-title: DisposableStack()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/DisposableStack
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Le constructeur **`DisposableStack()`** crée des objets {{JSxRef("DisposableStack")}}.

## Syntaxe

```js-nolint
new DisposableStack()
```

> [!NOTE]
> `DisposableStack()` ne peut être construit qu'avec [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new). Tenter de l'appeler sans `new` lève une erreur {{JSxRef("TypeError")}}.

### Paramètres

Aucun.

### Valeur de retour

Un nouvel objet `DisposableStack`.

## Exemples

### Créer un DisposableStack

```js
const disposer = new DisposableStack();
disposer.defer(() => console.log("Libéré !"));
disposer.dispose();
// Affiche : Libéré !
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Gestion des ressources JavaScript](/fr/docs/Web/JavaScript/Guide/Resource_management)
