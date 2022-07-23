---
title: BroadcastChannel()
slug: Web/API/BroadcastChannel/BroadcastChannel
page-type: web-api-constructor
tags:
  - API
  - Broadcast Channel API
  - BroadcastChannel
  - Constructor
  - HTML API
  - Reference
browser-compat: api.BroadcastChannel.BroadcastChannel
---
{{APIRef("BroadCastChannel API")}}

Le constructeur **`BroadcastChannel()`** crée un nouveau
{{domxref("BroadcastChannel")}} et le connecte au canal sous-jacent.

{{AvailableInWorkers}}

## Syntaxe

```js
new BroadcastChannel(channelName)
```

### Paramètres

- `channelName`
  - : Une chaîne représentant le nom du canal; il n'y a qu'un canal portant ce nom pour tous les {{glossary("browsing context", "contextes navigateurs")}} de la même {{glossary("origin", "origine")}}.

## Exemples

```js
// crée un nouveau canal écoutant sur le canal "notification_interne".

var bc = new BroadcastChannel('notification_interne');
bc.postMessage('Nouvelle écoute connectée!');
```

## Spécifications

{{Specifications}}

## Compatibilité navigateur

{{Compat}}

## Voir aussi

- {{domxref("BroadcastChannel")}}, l'interface à laquelle elle se rapporte.
