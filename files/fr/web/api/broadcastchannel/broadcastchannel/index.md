---
title: BroadcastChannel()
slug: Web/API/BroadcastChannel/BroadcastChannel
l10n:
  sourceCommit: c80b15ae2fe8b65c1a68264df72323986b2750b2
---

{{APIRef("BroadCastChannel API")}}

Le constructeur **`BroadcastChannel()`** crée un nouvel objet [`BroadcastChannel`](/fr/docs/Web/API/BroadcastChannel) et le connecte au canal sous-jacent.

{{AvailableInWorkers}}

## Syntaxe

```js
new BroadcastChannel(channelName);
```

### Paramètres

- `channelName`
  - : Une chaîne représentant le nom du canal&nbsp;; il n'y a qu'un canal portant ce nom pour tous les [contextes de navigation](/fr/docs/Glossary/Browsing_context) de la même [origine](/fr/docs/Glossary/Origin).

## Exemples

```js
// crée un nouveau canal écoutant sur le canal "notification_interne".

const bc = new BroadcastChannel("notification_interne");
bc.postMessage("Nouvelle écoute connectée !");
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`BroadcastChannel`](/fr/docs/Web/API/BroadcastChannel), l'interface à laquelle elle se rapporte.
