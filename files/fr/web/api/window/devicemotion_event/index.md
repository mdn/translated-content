---
title: "Window : évènement devicemotion"
short-title: devicemotion
slug: Web/API/Window/devicemotion_event
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
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

## Propriétés de l'évènement

- {{DOMxRef("DeviceMotionEvent.acceleration")}} {{ReadOnlyInline}}
  - : Un objet fournissant l'accélération de l'appareil selon les trois axes&nbsp;: x, y et z. L'accélération est exprimée en [m/s²](https://fr.wikipedia.org/wiki/M%C3%A8tre_par_seconde_carr%C3%A9e).
- {{DOMxRef("DeviceMotionEvent.accelerationIncludingGravity")}} {{ReadOnlyInline}}
  - : Un objet fournissant l'accélération de l'appareil selon les trois axes&nbsp;: x, y et z, en tenant compte de la gravité. L'accélération est exprimée en [m/s²](https://fr.wikipedia.org/wiki/M%C3%A8tre_par_seconde_carr%C3%A9e).
- {{DOMxRef("DeviceMotionEvent.rotationRate")}} {{ReadOnlyInline}}
  - : Un objet fournissant le taux de variation de l'orientation de l'appareil selon les trois axes d'orientation&nbsp;: alpha, beta et gamma. Le taux de rotation est exprimé en degrés par seconde.
- {{DOMxRef("DeviceMotionEvent.interval")}} {{ReadOnlyInline}}
  - : Un nombre représentant l'intervalle de temps, en millisecondes, auquel les données sont obtenues depuis l'appareil.

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
