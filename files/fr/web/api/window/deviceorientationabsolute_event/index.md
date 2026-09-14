---
title: "Window : évènement deviceorientationabsolute"
short-title: deviceorientationabsolute
slug: Web/API/Window/deviceorientationabsolute_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Device Orientation Events")}}{{SecureContext_Header}}

L'évènement **`deviceorientationabsolute`** de l'interface {{DOMxRef("Window")}} est déclenché lorsque l'orientation absolue de l'appareil change.

Cet évènement n'est pas annulable et ne se propage pas.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("deviceorientationabsolute", (event) => { })

ondeviceorientationabsolute = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("DeviceOrientationEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("DeviceOrientationEvent")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("window.devicemotion_event", "devicemotion")}}
- L'évènement {{DOMxRef("window.deviceorientation_event", "deviceorientation")}}
- [Détecter l'orientation de l'appareil](/fr/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
