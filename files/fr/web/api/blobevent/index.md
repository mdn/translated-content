---
title: BlobEvent
slug: Web/API/BlobEvent
tags:
  - API
  - Audio
  - Blob
  - Interface
  - Media
  - MediaStream Recording
  - MediaStream Recording API
  - Reference
  - Video
  - events
translation_of: Web/API/BlobEvent
---
{{APIRef ("Media Capture and Streams")}}

L'interface `BlobEvent` représente les événements associés à un {{domxref ("Blob")}}. Ces blobs sont généralement, mais pas nécessairement, associés au contenu multimédia.

## Constructeur

- {{domxref("BlobEvent.BlobEvent", "BlobEvent()")}}
  - : Crée un événement `BlobEvent` avec les paramètres donnés.

## Propriétés

_Hérite des propriétés de son parent, {{domxref("Event")}}_.

- {{domxref("BlobEvent.data")}} {{readonlyInline}}
  - : Un objet {{domxref("Blob")}} qui représente les données associées à l'évènement. L'évènement a été déclenché sur le {{domxref("EventTarget")}} en raison de quelque chose survenu spécifiquement sur ce {{domxref("Blob")}}.
- {{domxref("BlobEvent.timecode")}} {{readonlyinline}}
  - : {{domxref("DOMHighResTimeStamp")}} indique la différence entre l'horodatage du premier bloc de données et l'horadatage du premier bloc `BlobEvent` produit par cet enregistreur. On notera que le _timecode_ du premier `BlobEvent` produit , n'a pas besoin d'être nul.

## Méthodes

*Pas de méthode spécifique&nbsp;; hérite des méthodes de son parent [`Event`](/fr/docs/Web/API/Event).*

## Spécifications

| Spécification                                                                            | État                                         | Commentaires        |
| ---------------------------------------------------------------------------------------- | -------------------------------------------- | ------------------- |
| {{SpecName('MediaStream Recording', '#blob-event', 'BlobEvent')}} | {{Spec2('MediaStream Recording')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.BlobEvent")}}

## Voir aussi

- L'interface de base {{domxref("Event")}} .
- [L'API <i lang="en">MediaStream Recording</i>](/fr/docs/Web/API/MediaStream_Recording_API)&nbsp;: envoie des objets `BlobEvent` chaque fois qu'un fragment de media est prêt.
- [Utiliser l'API MediaStream Recording](/fr/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
