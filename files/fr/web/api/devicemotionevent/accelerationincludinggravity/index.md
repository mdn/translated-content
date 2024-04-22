---
title: DeviceMotionEvent.accelerationIncludingGravity
slug: Web/API/DeviceMotionEvent/accelerationIncludingGravity
---

{{ ApiRef("Device Orientation Events") }}

La propriété **`accelerationIncludingGravity`** renvoie la valeur d'accélération enregistrée par l'appareil, en [mètres par seconde au carré (m/s<sup>2</sup>)](https://fr.wikipedia.org/wiki/Mètre_par_seconde_carrée). Contrairement à {{domxref("DeviceMotionEvent.acceleration")}} qui compense pour tenir compte de l'influence de la gravité, sa valeur est la somme de l'accélération de l'appareil induite par l'utilisateur et de celle provoquée par la gravité.

Cette valeur n'est pas aussi utile que {{domxref("DeviceMotionEvent.acceleration")}}, mais elle peut être la seule disponible, par exemple pour un appareil qui ne peut supprimer la gravité des données d'accélération puisqu'il ne l'utilise pas, comme les périphériques sans gyroscope.

## Syntaxe

```js
var acceleration = instanceOfDeviceMotionEvent.accelerationIncludingGravity;
```

## Valeur

La propriété `accelerationIncludingGravity` est un objet fournissant une information sur l'accélération des 3 axes. Pour chacun d'eux, elle est représentée par leur propre propriété :

- `x`
  - : Représente l'accélération sur l'axe x qui est l'axe est-ouest.
- `y`
  - : Représente l'accélération sur l'axe y qui est l'axe nord-sud
- `z`
  - : Représente l'accélération sur l'axe z qui est l'axe haut-bas

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`DeviceMotionEvent.acceleration`](/fr/docs/Web/API/DeviceMotionEvent/acceleration)
- L'évènement [`devicemotion`](/fr/docs/Web/API/Window/devicemotion_event)
- L'évènement [`deviceorientation`](/fr/docs/Web/API/Window/deviceorientation_event)
- [`DeviceOrientationEvent`](/fr/docs/Web/API/DeviceOrientationEvent)
- [`Accelerometer`](/fr/docs/Web/API/Accelerometer)
- [Détection de l'orientation de l'appareil](/fr/docs/Web/Events/Detecting_device_orientation)
- [Explication des données d'orientation et de mouvement](/fr/docs/Web/Events/Orientation_and_motion_data_explained)
