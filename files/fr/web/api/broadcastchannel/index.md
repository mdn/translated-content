---
title: BroadcastChannel
slug: Web/API/BroadcastChannel
page-type: web-api-interface
tags:
  - API
  - Broadcast Channel API
  - Experimental
  - HTML API
  - Interface
  - Reference
browser-compat: api.BroadcastChannel
---
{{APIRef("Broadcast Channel API")}}

L'interface **`BroadcastChannel`** représente un canal nommé auquel peut s'abonner n'importe quel {{glossary("browsing context","contexte de navigation")}} d'une même {{glossary("origin", "origine")}}. Il permet la communication entre différents documents (dans différentes fenêtres, onglets, frames ou iframes) d'une même origine. Les messages sont diffusés via un événement {{domxref("BroadcastChannel/message_event", "message")}} déclenché à tout objet `BroadcastChannel` écoutant le canal, sauf celui qui l'a envoyé.

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## Constructeur

- {{domxref("BroadcastChannel.BroadcastChannel", "BroadcastChannel()")}}
  - : Crée un objet lié au canal nommé.

## Propriétés

_Cette interface hérite aussi des propriétés de ses parents, {{domxref("EventTarget")}}._

- {{domxref("BroadcastChannel.name")}} {{ReadOnlyInline}}
  - : Retourne une chaîne, le nom du canal.

## Méthodes

_Cette interface hérite aussi des méthodes de ses parents, {{domxref("EventTarget")}}._

- {{domxref("BroadcastChannel.postMessage()")}}
  - : Envoie un message de n'importe quel type d'objet à l'objet `BroadcastChannel` écoutant sur le même canal.
- {{domxref("BroadcastChannel.close()")}}
  - : Ferme l'objet canal, indiquant qu'il n'aura plus aucun nouveau message et lui permettant finalement d'être libéré par le ramasse-miètes.

## Événements

- [`message`](/fr/docs/Web/API/BroadcastChannel/message_event)
  - : Déclenché lorsqu'un message arrive sur le canal.
    Également accessible via la propriété `onmessage`.
- [`messageerror`](/fr/docs/Web/API/BroadcastChannel/messageerror_event)
  - : Déclenché lorsqu'un message arrive mais ne peut pas être déserialisé.
    Également accessible via la propriété `onmessageerror`.

## Spécifications

{{Specifications}}

## Compatibilité navigateur

{{Compat}}

## Voir aussi

- Un autre moyen, plus fourni, de communiquer entre contextes navigateur: {{domxref("ServiceWorker")}}.
- [Vue d'ensemble de l'API Broadcast Channel API](/fr/docs/Web/API/Broadcast_Channel_API)
