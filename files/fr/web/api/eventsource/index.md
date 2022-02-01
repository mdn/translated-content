---
title: EventSource
slug: Web/API/EventSource
tags:
  - API
  - Interface
  - Reference
translation_of: Web/API/EventSource
---
{{APIRef("Websockets API")}}

L'interface **`EventSource`** est utilisée afin de recevoir des évènements envoyés par le serveur. Elle se connecte à un serveur via HTTP et reçoit des évènements au format `text/event-stream` avant de clôturer la connexion.

## Constructeur

- {{domxref("EventSource.EventSource", "EventSource()")}}
  - : Cette méthode crée un nouvel objet `EventSource` à partir de l'objet {{domxref("USVString")}} fourni.

## Propriétés

_Cette interface hérite également des propriétés fournies par l'objet parent : {{domxref("EventTarget")}}._

- {{domxref("EventSource.readyState")}} {{readonlyinline}}
  - : Un nombre qui représente l'état de la connexion. Les valeurs possibles sont `CONNECTING` (`0`) (connexion en cours), `OPEN` (`1`) (connexion ouverte), ou `CLOSED` (`2`) (connexion fermée).
- {{domxref("EventSource.url")}} {{readonlyinline}}
  - : Un objet {{domxref("DOMString")}} qui représente l'URL de la source.
- {{domxref("EventSource.withCredentials")}} {{readonlyinline}}
  - : Un booléen qui indique si l'objet `EventSource` a été instancié avec les paramètres d'authentification CORS (`true`) ou non (`false`, la valeur par défaut).

### Gestionnaires d'évènement

- {{domxref("EventSource.onerror")}}
  - : Un objet {{event("Event_handlers", "event handler")}} qui est appelé lorsqu'une erreur se produit et que l'évènement {{event("error")}} est envoyé à l'objet `EventSource`.
- {{domxref("EventSource.onmessage")}}
  - : Un objet {{event("Event_handlers", "event handler")}} qui est appelé lorsqu'un évènement {{event("message")}} est reçu (ce qui signifie qu'on a reçu un message de la source).
- {{domxref("EventSource.onopen")}}
  - : Un objet {{event("Event_handlers", "event handler")}} qui est appelé lorsqu'un évènement {{event("open")}} est reçu, ce qui indique que la connexion vient d'être ouverte.

## Méthodes

_Cette interface hérite également de méthodes grâce à son objet parent : {{domxref("EventTarget")}}._

- {{domxref("EventSource.close()")}}
  - : Cette méthode ferme la connexion s'il y en a une en cours et change la valeur de l'attribut `readyState` en `CLOSED`. Si la connexion est déjà fermée, la méthode ne fait rien.

## Exemples

```js
var evtSource = new EventSource('sse.php');
var eventList = document.querySelector('ul');

evtSource.onmessage = function(e) {
  var newElement = document.createElement("li");

  newElement.textContent = "message: " + e.data;
  eventList.appendChild(newElement);
}
```

> **Note :** Un exemple complet est disponible sur GitHub, [voir la démonstration SSE avec PHP](https://github.com/mdn/dom-examples/tree/master/server-sent-events).

## Spécifications

| Spécification                                                                                                | État                             | Commentaires |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', "comms.html#the-eventsource-interface", "EventSource")}} | {{Spec2('HTML WHATWG')}} |              |

## Compatibilité des navigateurs

{{Compat("api.EventSource")}}

## Voir aussi

- [Utiliser les évènements générés par le serveur](/fr/docs/Server-sent_events/Using_server-sent_events)
