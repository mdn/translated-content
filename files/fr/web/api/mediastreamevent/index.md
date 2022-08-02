---
title: MediaStreamEvent
slug: Web/API/MediaStreamEvent
tags:
  - API
  - Expérimentale
  - Expérimentale(2)
  - Interface
  - Reference
  - Référence(2)
  - WebRTC
translation_of: Web/API/MediaStreamEvent
---
{{APIRef("WebRTC")}}{{deprecated_header}}

L'interface **`MediaStreamEvent`** représente les événements qui se produisent en relation avec un {{domxref("MediaStream")}}. Deux événements de ce type peuvent être lancés: {{event("addstream")}} et {{event("removestream")}}.

## Propriétés

_Un {{domxref("MediaStreamEvent")}} étant un {{domxref("Event")}}, cet événement implémente également ces propriétés_.

- {{domxref("MediaStreamEvent.stream")}} {{readOnlyInline}}
  - : Contient le {{domxref("MediaStream")}} contenant le flux associé à l'événement.

## Constructeurs

- {{domxref("MediaStreamEvent.MediaStreamEvent()", "MediaStreamEvent()")}}
  - : Renvoie un nouveau `MediaStreamEvent`. Il prend deux paramètres, le premier étant un {{domxref("DOMString")}} représentant le type de l'événement; le second un dictionnaire contenant le {{domxref("MediaStream")}} auquel il se réfère.

## Méthodes

Un **`MediaStreamEvent`** étant un [`Event`](/fr/docs/Web/API/Event), cet évènement implémente également ces propriétés. Il n'y a pas de méthode **`MediaStreamEvent`** spécifique.

## Exemples

```js
pc.onaddstream = function( ev ) {
  alert("Un stream (id: '" + ev.stream.id + "') a été ajouté à cette connexion.");
};
```

## Compatibilité des navigateurs

{{Compat("api.MediaStreamEvent")}}

## Voir aussi

- [WebRTC](/fr/docs/Web/API/WebRTC_API)
- Sa cible habituelle: {{domxref("RTCPeerConnection")}}.
