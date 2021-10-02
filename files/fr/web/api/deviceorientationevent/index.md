---
title: DeviceOrientationEvent
slug: Web/API/DeviceOrientationEvent
tags:
  - B2G
  - Device Orientation
  - Experimental
  - Firefox OS
  - Mobile
  - Orientation
  - WebAPI
  - events
  - évènements
translation_of: Web/API/DeviceOrientationEvent
---
{{ApiRef}}{{SeeCompatTable}}

## Sommaire

L'évènement `DeviceOrientationEvent` met à la disposition du développeur des informations sur l'orientation de l'appareil visitant une page Web

> **Attention :** à l'heure actuelle, Firefox et Chrome ne gèrent pas les cordonnées de la même façon. Tenez-en compte lors de l'utilisation de cette API.

## Propriétés

- {{domxref("DeviceOrientationEvent.absolute")}} {{readonlyinline}}
  - : Un booléen, indiquant si l'appareil partage les informations sur son orientation absolue.
- {{domxref("DeviceOrientationEvent.alpha")}} {{readonlyinline}}
  - : Un nombre, représentant le mouvement de l'appareil sur l'axe « z » exprimé en degrés sur une échelle de 0° à 360°.
- {{domxref("DeviceOrientationEvent.beta")}} {{readonlyinline}}
  - : Un Nombre représentant le déplacement de l'appareil sur l'axe « x », exprimé en degrés sur une échelle de -180° à 180°.
- {{domxref("DeviceOrientationEvent.gamma")}} {{readonlyinline}}
  - : Un nombre représentant le déplacement de l'appareil sur l'axe « y », exprimé en degrés sur une échelle de -90° à 90°.

## Exemple

```js
window.addEventListener('deviceorientation', function(event) {
  console.log("z : " + event.alpha + "\n x : " + event.beta + "\n y : " + event.gamma);
});
```

## Spécifications

| Spécification                                | Statut                                   | Commentaires         |
| -------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('Device Orientation')}} | {{Spec2('Device Orientation')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.DeviceMotionEvent")}}

## Voir aussi

- {{ event("deviceorientation") }}
- {{ domxref("DeviceMotionEvent") }}
- {{ event("devicemotion") }}
- [Detecting device orientation](/en-US/docs/WebAPI/Detecting_device_orientation)
- [Orientation and motion data explained](/en/DOM/Orientation_and_motion_data_explained)
