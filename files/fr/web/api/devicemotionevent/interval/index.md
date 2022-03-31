---
title: DeviceMotionEvent.interval
slug: Web/API/DeviceMotionEvent/interval
tags:
  - API
  - Propriété
  - Reference
translation_of: Web/API/DeviceMotionEvent/interval
---
{{apiref("Device Orientation Events")}}

La propriété **`interval`** renvoie la granularité temporelle, exprimée en millisecondes, avec laquelle les données relatives aux mouvements sont obtenues du matériel.

## Syntaxe

    var interval = instanceOfDeviceMotionEvent.interval;

## Spécifications

| Spécification                                | État                                     | Commentaires |
| -------------------------------------------- | ---------------------------------------- | ------------ |
| {{SpecName('Device Orientation')}} | {{Spec2('Device Orientation')}} |              |

## Compatibilité des navigateurs

{{Compat("api.DeviceMotionEvent.interval")}}

## Voir aussi

- {{ domxref("DeviceMotionEvent") }}
- {{ event("devicemotion") }}
- {{ domxref("window.ondevicemotion") }}
- {{ event("deviceorientation") }}
- {{ domxref("DeviceOrientationEvent") }}
- [Detecting device orientation](/fr/docs/WebAPI/Detecting_device_orientation)
