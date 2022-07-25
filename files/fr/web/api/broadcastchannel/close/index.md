---
title: BroadcastChannel.close()
slug: Web/API/BroadcastChannel/close
page-type: web-api-instance-method
tags:
  - Broadcast Channel API
  - Method
  - Reference
browser-compat: api.BroadcastChannel.close
---
{{APIRef("BroadCastChannel API")}}

La méthode **`BroadcastChannel.close()`** ferme la connexion au canal sous-jacent, permettant à l'objet d'être liberé par le ramasse-miètes.
Cette tâche est obligatoire puisqu'il n'y a aucun autre moyen pour le navigateur de savoir si ce canal est encore nécessaire.

{{AvailableInWorkers}}

## Syntax

```js
canal.close();
```

## Example

```js
// Connexion au canal
var bc = new BroadcastChannel('canal_test');

// Autres opérations (tel que postMessage, …)

// Lorsque les traitements sont terminés, déconnexion du canal
bc.close();
```

## Spécifications

{{Specifications}}

## Compatibilité navigateur

{{Compat}}

## Voir aussi

- {{domxref("BroadcastChannel")}}, l'interface à laquelle elle se rapporte.
