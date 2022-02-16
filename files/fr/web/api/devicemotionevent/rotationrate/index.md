---
title: DeviceMotionEvent.rotationRate
slug: Web/API/DeviceMotionEvent/rotationRate
tags:
  - API
  - DOM
  - Mobile
  - Orientation
  - Propriété
  - Vitesse
translation_of: Web/API/DeviceMotionEvent/rotationRate
---
{{ ApiRef("Device Orientation Events") }}

La propriété **`rotationRate`** renvoie la vitesse de rotation de l'appareil autour de chacun de ses axes en degrés par seconde.

> **Note :** Si le matériel n'est pas capable de fournir cette information, la propriété renvoie `null`.

## Syntaxe

    var rates = instanceOfDeviceMotionEvent.rotationRate;

## Valeurs

La propriété `rotationRates` est un objet en lecture seule décrivant la vitesse de rotation d'un appareil autour de chacun de ses axes :

- `alpha`
  - : La vitesse de rotation de l'appareil sur son axe Z ; c'est-à-dire déplacé autour d'une ligne perpendiculaire à l'écran.
- `beta`
  - : La vitesse de rotation de l'appareil sur son axe X ; c'est-à-dire de l'avant vers l'arrière.
- `gamma`
  - : La vitesse de rotation de l'appareil sur son axe Y ; c'est-à-dire d'un côté à l'autre.

## Spécifications

| Spécification                                | État                                     | Commentaires         |
| -------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('Device Orientation')}} | {{Spec2('Device Orientation')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.DeviceMotionEvent.rotationRate")}}

## Voir aussi

- {{ domxref("DeviceMotionEvent") }}
- {{ event("devicemotion") }}
- {{ domxref("window.ondevicemotion") }}
- {{ event("deviceorientation") }}
- {{ domxref("DeviceOrientationEvent") }}
- [Détecter l'orientation de l'appareil](/fr/docs/WebAPI/Detecting_device_orientation)
- [Les données d'orientation et de mouvement expliquées](/fr/docs/Web/Guide/DOM/Events/Les_donn%C3%A9es_d_orientation_et_de_mouvement_expliqu%C3%A9es)
