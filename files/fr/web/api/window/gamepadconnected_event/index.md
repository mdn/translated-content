---
title: gamepadconnected
slug: Web/API/Window/gamepadconnected_event
translation_of: Web/API/Window/gamepadconnected_event
---
L'événement gamepadconnected est déclenché lorsque le navigateur détecte quand une manette a été connecté ou qu'un button/axe de la manette a été utilisé pour la première fois.



## Informations générales

- Spécification
  - : [Gamepad](http://www.w3.org/TR/gamepad/#the-gamepadconnected-event)
- Interface
  - : Event
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

## Exemple

```js
// Noter que l'API a toujours des préfixes vendeur dans les navigateurs l'implémentant
window.addEventListener("gamepadconnected", function( event ) {

    // Toutes la valeurs d'axes et les buttons sont accessibles à travers:
    event.gamepad;

});
```

## Evénements liés

- [gamepaddisconnected](/en-US/docs/Web/Reference/Events/gamepaddisconnected)

## Voir aussi

- [Utilisation de l'API Gamepad](/fr/docs/API/Gamepad/Using_Gamepad_API)
