---
title: DeviceOrientationEvent.absolute
slug: Web/API/DeviceOrientationEvent/absolute
translation_of: Web/API/DeviceOrientationEvent/absolute
original_slug: Web/API/DeviceOrientationEvent.absolute
---
{{ ApiRef() }}

Indique si l'appareil partage des données en référentiel absolut c'est à dire sur avec des cordonnées issu du référentiel terrestre, ou si il partage des données utilisant un référentiel arbitraire déterminé par l'appareil. Voir [Orientation et mouvement expliqué](/en/DOM/Orientation_and_motion_data_explained) pour plus de détails.

## Syntaxe

    var absolute = instanceOfDeviceOrientationEvent.absolute;

`DeviceOrientationEvent.absolute` retourne un booléen :

- `true` : si les données d'orientation dans `instanceOfDeviceOrientationEvent` est proposer dans un référentiel terrestre.
- `false` : si les données d'orientation utilisent un référentiel arbitraire.

## Spécifications

| Spécification                                | Statuts                                  | Commentaires           |
| -------------------------------------------- | ---------------------------------------- | ---------------------- |
| {{SpecName('Device Orientation')}} | {{Spec2('Device Orientation')}} | Initial specification. |

## Compatibilité entre les navigateurs

{{ page("/en-US/docs/Web/API/DeviceOrientationEvent","Browser_compatibility") }}

## Voir aussi

- {{ domxref("DeviceOrientationEvent") }}
- [Detecting device orientation](/en/Detecting_device_orientation)
- [Orientation and motion data explained](/en/DOM/Orientation_and_motion_data_explained)
- {{ domxref("window.ondeviceorientation") }}

{{ event("deviceorientation") }}
