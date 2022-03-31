---
title: DeviceRotationRate.beta
slug: Web/API/DeviceMotionEventRotationRate/beta
tags:
  - API
  - DOM
  - Orientation
  - Propriétés
  - Vitesse
  - axes
  - rotation
  - x
translation_of: Web/API/DeviceMotionEventRotationRate/beta
translation_of_original: Web/API/DeviceRotationRate/beta
original_slug: Web/API/DeviceRotationRate/beta
---
{{ ApiRef("Device Orientation Events") }}

Cette propriété indique la vitesse de rotation autour de l'axe X -- en degrés par seconde -- dans un objet {{ domxref("DeviceRotationRate") }}.

## Syntaxe

    var beta = deviceRotationRate.beta;

Cette propriété est en lecture seule.

### Valeur retournée

- `beta`
  - : Un `double` indiquant la vitesse de rotation autour de l'axe X, en degrés par seconde. Voir [Détecter l'orientation de l'appareil](/fr/docs/WebAPI/Detecting_device_orientation#Accelerometer_values_explained) pour plus de détails.

## Spécifications

| Spécification                                | Statut                                   | Commentaire          |
| -------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('Device Orientation')}} | {{Spec2('Device Orientation')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.DeviceMotionEventRotationRate.beta")}}
