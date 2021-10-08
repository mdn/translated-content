---
title: DeviceMotionEvent
slug: Web/API/DeviceMotionEvent
tags:
  - API
  - Device Orientation
  - Experimental
  - Firefox OS
  - Mobile
  - Motion
  - Orientation
  - TopicStub
translation_of: Web/API/DeviceMotionEvent
---
{{apiref("Device Orientation Events")}}{{SeeCompatTable}}

## Résumé

`DeviceMotionEvent` fournit aux développeurs Web des informations sur la vitesse des changements de position et d'orientation de l'appareil.

> **Attention :** Actuellement, Firefox et Chrome ne gèrent pas les coordonnées de la même manière. Faites attention à cela lorsque vous les utilisez.

## Constructeur

- {{domxref("DeviceMotionEvent.DeviceMotionEvent","DeviceMotionEvent.DeviceMotionEvent()")}}
  - : Crée un nouvel `DeviceMotionEvent`.

## Propriétés

- {{domxref("DeviceMotionEvent.acceleration")}} {{readonlyinline}}
  - : Un objet donnant l'accélération du dispositif sur les trois axes X, Y et Z. L'accélération est exprimée en [m/s<sup>2</sup>](https://en.wikipedia.org/wiki/Meter_per_second_squared).
- {{domxref("DeviceMotionEvent.accelerationIncludingGravity")}} {{readonlyinline}}
  - : Un objet donnant l'accélération de l'appareil sur les trois axes X, Y et Z avec l'effet de la gravité. L'accélération est exprimée en [m/s<sup>2</sup>](https://en.wikipedia.org/wiki/Meter_per_second_squared).
- {{domxref("DeviceMotionEvent.rotationRate")}} {{readonlyinline}}
  - : Un objet donnant le taux de changement d'orientation de l'appareil sur les trois axes d'orientation alpha, bêta et gamma. Le taux de rotation est exprimé en degrés par seconde.
- {{domxref("DeviceMotionEvent.interval")}} {{readonlyinline}}
  - : Nombre représentant l'intervalle de temps, en millisecondes, auquel les données sont obtenues à partir de l'appareil.

## Exemple

```js
window.addEventListener('devicemotion', function(event) {
  console.log(event.acceleration.x + ' m/s2');
});
```

## Spécifications

| Spécification                                | Statut                                   | Commentaire          |
| -------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('Device Orientation')}} | {{Spec2('Device Orientation')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.DeviceMotionEvent")}}

## Voir aussi

- {{ event("deviceorientation") }}
- {{ domxref("DeviceMotionEvent") }}
- {{ event("devicemotion") }}
- [Détection de l'orientation de l'appareil](/fr/docs/WebAPI/Detecting_device_orientation)
- [Explication des données d'orientation et de mouvement](/fr/docs/Web/Guide/Events/Orientation_and_motion_data_explained)
