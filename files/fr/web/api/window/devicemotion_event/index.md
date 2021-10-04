---
title: devicemotion
slug: Web/API/Window/devicemotion_event
translation_of: Web/API/Window/devicemotion_event
original_slug: FUEL/Window/devicemotion_event
---
L'événement devicemotion est déclenché à intervalles réguliers et indique la quantité de force physique d'accélération que le périphérique reçoit à ce moment. Il fournit également des informations sur le taux de rotation, si disponible.

## Informations générales

- Spécification
  - : [DeviceOrientation Event](http://www.w3.org/TR/orientation-event/#devicemotion)
- Interface
  - : DeviceMotionEvent
- Propagation
  - : Non
- Annulable
  - : Non
- Cible
  - : DefaultView (`window`)
- Action par défaut
  - : Aucune

## Propriétés

| Property                                     | Type                                                                  | Description                                                                                                                                                                                                                      |
| -------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` Lecture seule                       | [`EventTarget`](/fr/docs/Web/API/EventTarget)                         | The event target (the topmost target in the DOM tree).                                                                                                                                                                           |
| `type` Lecture seule                         | [`DOMString`](/fr/docs/Web/API/DOMString)                             | The type of event.                                                                                                                                                                                                               |
| `bubbles` Lecture seule                      | [`Boolean`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) | Whether the event normally bubbles or not                                                                                                                                                                                        |
| `cancelable` Lecture seule                   | [`Boolean`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) | Whether the event is cancellable or not?                                                                                                                                                                                         |
| `acceleration` Lecture seule                 | [`DeviceAcceleration`](/fr/docs/Web/API/DeviceAcceleration)           | The acceleration of the device. This value has taken into account the effect of gravity and removed it from the figures. This value may not exist if the hardware doesn't know how to remove gravity from the acceleration data. |
| `accelerationIncludingGravity `Lecture seule | [`DeviceAcceleration`](/fr/docs/Web/API/DeviceAcceleration)           | The acceleration of the device. This value includes the effect of gravity, and may be the only value available on devices that don't have a gyroscope to allow them to properly remove gravity from the data.                    |
| `interval` Lecture seule                     | double                                                                | The interval, in milliseconds, at which the DeviceMotionEvent is fired. The next event will be fired in approximately this amount of time.                                                                                       |
| `rotationRate` Lecture seule                 | [`DeviceRotationRate`](/fr/docs/Web/API/DeviceRotationRate)           | The rates of rotation of the device about all three axes.                                                                                                                                                                        |

## Exemple

```js
function handleMotionEvent(event) {

    var x = event.accelerationIncludingGravity.x;
    var y = event.accelerationIncludingGravity.y;
    var z = event.accelerationIncludingGravity.z;

    // Faire quelque chose de génial.
}

window.addEventListener("devicemotion", handleMotionEvent, true);
```

## Evénements liés

- [`deviceorientation`](/fr/docs/Mozilla_event_reference/deviceorientation)
