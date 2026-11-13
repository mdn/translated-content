---
title: "Window : évènement devicemotion"
short-title: devicemotion
slug: Web/API/Window/devicemotion_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Device Orientation Events")}}{{SecureContext_Header}}

L'évènement **`devicemotion`** de l'interface {{DOMxRef("Window")}} est déclenché à intervalles réguliers et indique le taux d'accélération de l'appareil, avec ou sans la contribution de la force de gravité à ce moment. Il fournit également des informations sur le taux de rotation, si elles sont disponibles.

Cet évènement n'est pas annulable et ne se propage pas.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("devicemotion", (event) => { })

ondevicemotion = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("DeviceMotionEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("DeviceMotionEvent")}}

## Exemples

```js
function gererEventRotation(event) {
  const x = event.accelerationIncludingGravity.x;
  const y = event.accelerationIncludingGravity.y;
  const z = event.accelerationIncludingGravity.z;

  // Faire quelque chose de génial.
}

window.addEventListener("devicemotion", gererEventRotation);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("Window.deviceorientation_event", "deviceorientation")}}
