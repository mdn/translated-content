---
title: error
slug: Web/API/Element/error_event
tags:
  - DOM
  - Erreurs
  - Gestionnaire d'erreurs
  - Interface
  - évènements
translation_of: Web/API/Element/error_event
original_slug: Web/Events/error
---
L'événement **error** _(erreur)_ est déclenché lorsqu'une ressource n'a pas pu être chargée ; les circonstances exactes varient, ce nom étant utilisé par une grande variété d'API.

## Informations générales

- Spécification
  - : [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-error)
- Interface
  - : {{domxref("UIEvent")}} si généré depuis l'interface utilisateur, {{domxref("MediaRecorderErrorEvent")}} si généré par [MediaStream Recording API](/en-US/docs/Web/API/MediaStream_Recording_API)  et sinon {{domxref("Event")}}.
- Propagation
  - : Non
- Annulable
  - : Non
- Cible
  - : {{domxref("Element")}}
- Action par défaut
  - : Aucune

## Propriétés

| Property                              | Type                                             | Description                                                                                   |
| ------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}     | [`EventTarget`](/en-US/docs/Web/API/EventTarget) | The event target (the topmost target in the DOM tree).                                        |
| `type` {{readonlyInline}}       | [`DOMString`](/en-US/docs/Web/API/DOMString)     | The type of event.                                                                            |
| `bubbles` {{readonlyInline}}    | [`Boolean`](/en-US/docs/Web/API/Boolean)         | Whether the event normally bubbles or not.                                                    |
| `cancelable` {{readonlyInline}} | [`Boolean`](/en-US/docs/Web/API/Boolean)         | Whether the event is cancellable or not.                                                      |
| `view` {{readonlyInline}}       | [`WindowProxy`](/en-US/docs/Web/API/WindowProxy) | [`document.defaultView`](/en-US/docs/Web/API/Document/defaultView) (`window` of the document) |
| `detail` {{readonlyInline}}     | `long` (`float`)                                 | 0.                                                                                            |

### Pour des évènements MediaStream Recording

Ces évènements sont d'un type {{domxref("MediaRecorderErrorEvent")}}.

{{page("/en-US/docs/Web/API/MediaRecorderErrorEvent", "Properties")}}

## Voir aussi

- {{domxref("GlobalEventHandlers.onerror")}}
  - : Évènements envoyés à {{domxref("Window.onerror")}} et à {{domxref("Element.onerror")}}
- {{domxref("HTMLMediaElement.onerror")}}
  - : Évènements envoyés à {{domxref("HTMLMediaElement")}} incluant {{HTMLElement("audio")}}   et {{HTMLElement("video")}} .
- {{domxref("MediaRecorder.onerror")}}
  - : Évènements envoyés à {{domxref("MediaRecorder.onerror")}} , d'un type {{domxref("MediaRecorderErrorEvent")}}
