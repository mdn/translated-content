---
title: gamepaddisconnected
slug: Web/API/Window/gamepaddisconnected_event
translation_of: Web/API/Window/gamepaddisconnected_event
---
L'événement `gamepaddisconnected` est déclenché lorsque le navigateur détecte le fait qu'une manette ait été débranchée.

## Informations générales

- Spécification
  - : [Gamepad](http://www.w3.org/TR/gamepad/#the-gamepaddisconnected-event)
- Interface
  - : {{domxref("Event")}}
- Propagation
  - : Non
- Annulable
  - : Non
- Cible
  - : DefaultView (`<window>`)
- Action par défaut
  - : Aucune

## Propriétés

| Property                              | Type                                 | Description                                                                                 |
| ------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree).                                      |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}     | The type of event.                                                                          |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}         | Whether the event normally bubbles or not.                                                  |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}         | Whether the event is cancellable or not.                                                    |
| `gamepad` {{readonlyInline}}    | {{domxref("Gamepad")}}         | The single gamepad attribute provides access to the associated gamepad data for this event. |

## Evénements liés

- [gamepadconnected](/fr/docs/Web/Reference/Events/gamepadconnected)

## Voir aussi

- [Utilisation de l'API Gamepad](/fr/docs/API/Gamepad/Using_Gamepad_API)
