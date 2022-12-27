---
title: EventSource.onopen
slug: Web/API/EventSource/open_event
tags:
  - API
  - Event Handler
  - EventSource
  - Propriété
  - Reference
translation_of: Web/API/EventSource/onopen
original_slug: Web/API/EventSource/onopen
---

{{APIRef('Server Sent Events')}}

La propriété **`onopen`** de l'interface {{domxref("EventSource")}} est un gestionnaire d'évènement qui est appelé lorsqu'un est évènement {{event("open")}} est reçu, indiquant que la connexion vient d'être établie.

## Syntaxe

```js
eventSource.onopen = function
```

## Exemples

```js
evtSource.onopen = function() {
  console.log("Connexion au serveur établie.");
};
```

> **Note :** Vous pouvez trouver un exemple complet sur GitHub — voir [Simple SSE demo using PHP.](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("EventSource")}}
