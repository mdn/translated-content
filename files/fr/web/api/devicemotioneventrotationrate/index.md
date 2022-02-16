---
title: DeviceRotationRate
slug: Web/API/DeviceMotionEventRotationRate
tags:
  - API
  - Coordonnées
  - DOM
  - Mobile
  - Vitesse
  - rotation
translation_of: Web/API/DeviceMotionEventRotationRate
translation_of_original: Web/API/DeviceRotationRate
original_slug: Web/API/DeviceRotationRate
---
{{ ApiRef("Device Orientation Events") }} {{SeeCompatTable}}

Un objet `DeviceRotationRate` fournit une information sur la vitesse avec laquelle un appareil est en rotation autour des 3 axes.

## Propriétés

- {{ domxref("DeviceRotationRate.alpha") }} {{readonlyInline}}
  - : La vitesse de rotation autour de l'axe Z, en degrés par seconde.
- {{ domxref("DeviceRotationRate.beta") }} {{readonlyInline}}
  - : La vitesse de rotation autour de l'axe X, en degrés par seconde.
- {{ domxref("DeviceRotationRate.gamma") }} {{readonlyInline}}
  - : La vitesse de rotation autour de l'axe Y, en degrés par seconde.

## Spécifications

| Spécification                                | Statut                                   | Commentaire          |
| -------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('Device Orientation')}} | {{Spec2('Device Orientation')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.DeviceMotionEventRotationRate")}}
