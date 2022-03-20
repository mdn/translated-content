---
title: BlobEvent.BlobEvent()
slug: Web/API/BlobEvent/BlobEvent
tags:
  - API
  - Blob
  - Constructeur
  - DOM
  - Evènement
translation_of: Web/API/BlobEvent/BlobEvent
---
{{APIRef("Media Capture and Streams")}}{{seeCompatTable}}

Le constructeur **`BlobEvent()`** renvoie un nouvel objet {{domxref("BlobEvent")}} créé avec un {{domxref("Blob")}} associé.

## Syntaxe

    blobEvent = new BlobEvent({data: aSpecificBlob}[, timecode]);

### Arguments

_Le constructeur `BlobEvent()`_ _hérite des arguments de {{domxref("Event.Event", "Event()")}}._

- `data`
  - : est un {{domxref("Blob")}} associé à l'évènement.
- `timecode` {{optional_inline}}
  - : un {{domxref("DOMHighResTimeStamp")}} à utiliser pour initialiser l'événement blob.

## Spécifications

| Spécification                                                                            | Statut                                       | Commentaire          |
| ---------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------- |
| {{SpecName('MediaStream Recording', '#blob-event', 'BlobEvent')}} | {{Spec2('MediaStream Recording')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.BlobEvent.BlobEvent")}}

## Voir aussi

- L'interface {{domxref("BlobEvent")}} à laquelle il appartient.
