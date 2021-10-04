---
title: DeviceRotationRate.alpha
slug: Web/API/DeviceMotionEventRotationRate/alpha
tags:
  - API
  - DOM
  - Mobile
  - Propriétés
  - Vitesse
  - axes
  - rotation
  - z
translation_of: Web/API/DeviceMotionEventRotationRate/alpha
translation_of_original: Web/API/DeviceRotationRate/alpha
original_slug: Web/API/DeviceRotationRate/alpha
---
{{ ApiRef("Device Orientation Events") }}

Cette propriété indique la vitesse de rotation autour de l'axe Z -- en degrés par seconde -- dans un objet {{ domxref("DeviceRotationRate") }}.

## Syntaxe

    var alpha = deviceRotationRate.alpha;

Cette propriété est en lecture seule.

### Valeur retournée

- `alpha`
  - : Un `double` indiquant la vitesse de rotation autour de l'axe Z, en degrés par seconde. Voir [Détecter l'orientation de l'appareil](/fr/docs/WebAPI/Detecting_device_orientation#Accelerometer_values_explained) pour plus de détails.

## Spécifications

| Spécification                                | Statut                                   | Commentaire          |
| -------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('Device Orientation')}} | {{Spec2('Device Orientation')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.DeviceMotionEventRotationRate.alpha")}}
