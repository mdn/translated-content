---
title: DeviceOrientationEvent
slug: Web/API/DeviceOrientationEvent
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
window.addEventListener("deviceorientation", function (event) {
  console.log(
    "z : " + event.alpha + "\n x : " + event.beta + "\n y : " + event.gamma,
  );
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement [`deviceorientation`](/fr/docs/Web/API/Window/deviceorientation_event)
- [`DeviceMotionEvent`](/fr/docs/Web/API/DeviceMotionEvent)
- L'évènement [`devicemotion`](/fr/docs/Web/API/Window/devicemotion_event)
- [Détection de l'orientation de l'appareil](/fr/docs/Web/Events/Detecting_device_orientation)
- [Explication des données d'orientation et de mouvement](/fr/docs/Web/Events/Orientation_and_motion_data_explained)
