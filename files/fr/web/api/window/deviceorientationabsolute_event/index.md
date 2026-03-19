---
title: "Window : évènement deviceorientationabsolute"
short-title: deviceorientationabsolute
slug: Web/API/Window/deviceorientationabsolute_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
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

## Propriétés de l'évènement

- {{DOMxRef("DeviceOrientationEvent.absolute")}} {{ReadOnlyInline}}
  - : Un booléen indiquant si l'appareil fournit des données d'orientation de façon absolue.
- {{DOMxRef("DeviceOrientationEvent.alpha")}} {{ReadOnlyInline}}
  - : Un nombre représentant le mouvement de l'appareil autour de l'axe z, exprimé en degrés, avec des valeurs allant de 0 (inclus) à 360 (exclus).
- {{DOMxRef("DeviceOrientationEvent.beta")}} {{ReadOnlyInline}}
  - : Un nombre représentant le mouvement de l'appareil autour de l'axe x, exprimé en degrés, avec des valeurs allant de -180 (inclus) à 180 (exclus). Cela représente le mouvement avant-arrière de l'appareil.
- {{DOMxRef("DeviceOrientationEvent.gamma")}} {{ReadOnlyInline}}
  - : Un nombre représentant le mouvement de l'appareil autour de l'axe y, exprimé en degrés, avec des valeurs allant de -90 (inclus) à 90 (exclus). Cela représente le mouvement de gauche à droite de l'appareil.
- `DeviceOrientationEvent.webkitCompassHeading` {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Un nombre représentant la différence entre le mouvement de l'appareil autour de l'axe z du repère terrestre et la direction du nord, exprimé en degrés, avec des valeurs allant de 0 à 360.
- `DeviceOrientationEvent.webkitCompassAccuracy` {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : La précision de la boussole exprimée comme une déviation positive ou négative. Elle est généralement de 10.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("window.devicemotion_event", "devicemotion")}}
- L'évènement {{DOMxRef("window.deviceorientation_event", "deviceorientation")}}
- [Détecter l'orientation de l'appareil](/fr/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
