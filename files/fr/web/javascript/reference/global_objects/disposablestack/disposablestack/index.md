---
title: Constructeur DisposableStack()
short-title: DisposableStack()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/DisposableStack
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
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

### Créer un `DisposableStack`

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

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `DisposableStack` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/explicit-resource-management)
- [Gestion des ressources JavaScript](/fr/docs/Web/JavaScript/Guide/Resource_management)
