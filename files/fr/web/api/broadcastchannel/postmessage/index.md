---
title: BroadcastChannel.postMessage()
slug: Web/API/BroadcastChannel/postMessage
page-type: web-api-instance-method
tags:
  - Method
  - Reference
browser-compat: api.BroadcastChannel.postMessage
---
{{APIRef("BroadCastChannel API")}}

La méthode **`BroadcastChannel.postMessage()`** envoie un message 
qui peut être de n'importe quel type {{jsxref("Object")}} à chaque écouteur de n'importe quel {{glossary("browsing context", "contexte de navigation")}} d'une même {{glossary("origin", "origine")}}.
Le message est transmis en tant qu'événement ['message'](/fr/docs/Web/API/BroadcastChannel/message_event) ciblant chaque {{domxref("BroadcastChannel")}} lié au canal.

{{AvailableInWorkers}}

## Syntaxe

```js
canal.postMessage(message);
```

### Paramètres

- `message`
  - : Données à envoyer à la fenêtre. Les données sont  sérialisées en utilisant l'[algorithme de clonage de structure](/fr/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
    Cela signifie que vous pouvez passer un large spectre de type de données de manière sûre à la fenêtre de destination sans avoir à réaliser le traitement de sérialisation par vous-même.

### Valeur de retour

Aucune.

## Spécifications

{{Specifications}}

## Compatibilité navigateur

{{Compat}}

## Voir aussi

- {{domxref("BroadcastChannel")}}, l'interface à laquelle elle se rapporte.
