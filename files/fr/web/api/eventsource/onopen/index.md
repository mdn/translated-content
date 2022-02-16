---
title: EventSource.onopen
slug: Web/API/EventSource/onopen
tags:
  - API
  - Event Handler
  - EventSource
  - Propriété
  - Reference
translation_of: Web/API/EventSource/onopen
---
{{APIRef('Server Sent Events')}}

La propriété **`onopen`** de l'interface {{domxref("EventSource")}} est un {{event("Event_handlers", "event handler")}} qui est appelé lorsqu'un est évènement {{event("open")}} est reçu, indiquant que la connexion vient d'être établie.

## Syntaxe

    eventSource.onopen = function

## Exemples

```js
evtSource.onopen = function() {
  console.log("Connexion au serveur établie.");
};
```

> **Note :** Vous pouvez trouver un exemple complet sur GitHub — voir [Simple SSE demo using PHP.](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

## Spécifications

| Spécification                                                                                            | Statut                           | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('HTML WHATWG', "comms.html#handler-eventsource-onopen", "onopen")}} | {{Spec2('HTML WHATWG')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.EventSource.onopen")}}

## Voir aussi

- {{domxref("EventSource")}}
