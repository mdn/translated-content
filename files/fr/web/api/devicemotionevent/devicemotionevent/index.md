---
title: DeviceMotionEvent.DeviceMotionEvent()
slug: Web/API/DeviceMotionEvent/DeviceMotionEvent
tags:
  - API
  - Constructeurs
  - Mobile
  - Mouvement
  - Orientation
  - axes
translation_of: Web/API/DeviceMotionEvent/DeviceMotionEvent
---
{{APIRef("Device Orientation Events")}}{{Non-standard_header}}

Le constructeur **`DeviceMotionEvent`** crée un nouveau {{domxref("DeviceMotionEvent")}}.

## Syntaxe

    var deviceMotionEvent = new DeviceMotionEvent(type[, options])

### Paramètres

- _type_
  - : Doit être `"devicemotion"`.
- _options_ {{optional_inline}}

  - : Les options sont les suivantes :

    - `acceleration` : un objet donnant l'accélération de l'appareil sur les 3 axes X, Y et Z. L'accélération est exprimée en [m/s<sup>2</sup>](https://en.wikipedia.org/wiki/Meter_per_second_squared)

      <sup>2</sup>

      .

    - `accelerationIncludingGravity` : un objet donnant l'accélération de l'appareil sur les 3 axes X, Y et Z avec l'effet de la gravité. L'accélération est exprimée en [m/s<sup>2</sup>](https://en.wikipedia.org/wiki/Meter_per_second_squared)

      <sup>2</sup>

      .

    - `rotationRate` : un objet donnant la vitesse de rotation du changement d'orientation de l'appareil sur les axes alpha, beta et gamma. La vitesse de rotation est exprimée en degrés par seconde.
    - `interval` : Un nombre représentant l'intervalle de temps, en millisecondes, avant d'obtenir des données à partir de l'appareil.

## Spécifications

| Spécification                                | Statut                                   | Commentaire          |
| -------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('Device Orientation')}} | {{Spec2('Device Orientation')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.DeviceMotionEvent.DeviceMotionEvent")}}
