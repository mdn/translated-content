---
title: DeviceRotationRate.gamma
slug: Web/API/DeviceMotionEventRotationRate/gamma
tags:
  - API
  - DOM
  - Mobile
  - Orientation
  - Propriétés
  - axes
  - rotation
  - 'y'
translation_of: Web/API/DeviceMotionEventRotationRate/gamma
translation_of_original: Web/API/DeviceRotationRate/gamma
original_slug: Web/API/DeviceRotationRate/gamma
---
{{ ApiRef("Device Orientation Events") }}

Cette propriété indique la vitesse de rotation autour de l'axe Y -- en degrés par seconde -- dans un objet {{ domxref("DeviceRotationRate") }}.

## Syntaxe

    var gamma = deviceRotationRate.gamma;

Cette propriété est en lecture seule.

### Valeur retournée

- `gamma`
  - : Un `double` indiquant la vitesse de rotation autour de l'axe Y, en degrés par seconde. Voir [Détecter l'orientation d'un appareil](/fr/docs/WebAPI/Detecting_device_orientation#Accelerometer_values_explained) pour plus de détails.

## Spécifications

| Spécification                                | Statut                                   | Commentaire          |
| -------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('Device Orientation')}} | {{Spec2('Device Orientation')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.DeviceMotionEventRotationRate.gamma")}}
