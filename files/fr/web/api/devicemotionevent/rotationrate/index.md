---
title: DeviceMotionEvent.rotationRate
slug: Web/API/DeviceMotionEvent/rotationRate
---

{{ ApiRef("Device Orientation Events") }}

La propriété **`rotationRate`** renvoie la vitesse de rotation de l'appareil autour de chacun de ses axes en degrés par seconde.

> **Note :** Si le matériel n'est pas capable de fournir cette information, la propriété renvoie `null`.

## Syntaxe

```js
var rates = instanceOfDeviceMotionEvent.rotationRate;
```

## Valeurs

La propriété `rotationRates` est un objet en lecture seule décrivant la vitesse de rotation d'un appareil autour de chacun de ses axes :

- `alpha`
  - : La vitesse de rotation de l'appareil sur son axe Z ; c'est-à-dire déplacé autour d'une ligne perpendiculaire à l'écran.
- `beta`
  - : La vitesse de rotation de l'appareil sur son axe X ; c'est-à-dire de l'avant vers l'arrière.
- `gamma`
  - : La vitesse de rotation de l'appareil sur son axe Y ; c'est-à-dire d'un côté à l'autre.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`DeviceMotionEvent`](/fr/docs/Web/API/DeviceMotionEvent)
- L'évènement [`devicemotion`](/fr/docs/Web/API/Window/devicemotion_event)
- L'évènement [`deviceorientation`](/fr/docs/Web/API/Window/deviceorientation_event)
- [`DeviceOrientationEvent`](/fr/docs/Web/API/DeviceOrientationEvent)
- [Détection de l'orientation de l'appareil](/fr/docs/Web/Events/Detecting_device_orientation)
- [Explication des données d'orientation et de mouvement](/fr/docs/Web/Events/Orientation_and_motion_data_explained)
