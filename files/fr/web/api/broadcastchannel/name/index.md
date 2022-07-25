---
title: BroadcastChannel.name
slug: Web/API/BroadcastChannel/name
page-type: web-api-instance-property
tags:
  - Broadcast Channel API
  - Property
  - Read-only
  - Reference
browser-compat: api.BroadcastChannel.name
---
{{APIRef("BroadCastChannel API")}}

La propriété en lecture seule **`BroadcastChannel.name`** retourne une chaîne, qui identifie de manière unique par son nom.
Ce nom est passé au constructeur {{domxref("BroadcastChannel.BroadCastChannel",
  "BroadcastChannel()")}} lors de la création et est par conséquent en lecture seule.

{{AvailableInWorkers}}

## Syntaxe

```js
var str = canal.name;
```

## Examples

```js
// Connexion à un canal
var canal = new BroadcastChannel('canal_test');

// D'autres traitements (tel que postMessage, …)

// Affiche la propriété name du canal dans la console
console.log(canal.name); // "canal_test"

// Lorsque les traitements sont terminés, déconnexion
canal.close();
```

## Spécifications

{{Specifications}}

## Compatibilité navigateur

{{Compat}}

## Voir aussi

- {{domxref("BroadcastChannel")}}, l'interface à laquelle elle se rapporte.
