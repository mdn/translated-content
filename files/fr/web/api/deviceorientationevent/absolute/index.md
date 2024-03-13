---
title: DeviceOrientationEvent.absolute
slug: Web/API/DeviceOrientationEvent/absolute
---

{{APIRef("Device Orientation Events")}}

Cette propriété indique si l'appareil fournit des données d'orientation dans un repère absolu (utilisant les coordonnées par rapport à la Terre) ou s'il utilise un repère arbitraire propre. Voir [le guide sur les données d'orientation et de déplacement](/fr/docs/Web/Events/Orientation_and_motion_data_explained) pour plus de détails.

## Syntaxe

```js
let absolute = instanceOfDeviceOrientationEvent.absolute;
```

_`absolute`_ vaut `true` si les données d'orientation fournies par l'évènement `instanceOfDeviceOrientationEvent` sont fournies comme la différence entre l'orientation de l'appareil et celle du repère terrestre ou `false` si les données d'orientation sont fournies relativement à un repère arbitraire fixé par l'appareil.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`DeviceOrientationEvent`](/fr/docs/Web/API/DeviceOrientationEvent)
- [Détecter l'orientation d'un appareil](/fr/docs/Web/Events/Detecting_device_orientation)
- [Guide sur les données d'orientation et de déplacement](/fr/docs/Web/Events/Orientation_and_motion_data_explained)
- L'évènement [`window.ondeviceorientation`](/fr/docs/Web/API/Window/ondeviceorientation)
- [`deviceorientation`](/fr/docs/Web/API/Window/deviceorientation_event)
