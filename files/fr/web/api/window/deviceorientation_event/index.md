---
title: "Window : évènement deviceorientation"
short-title: deviceorientation
slug: Web/API/Window/deviceorientation_event
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{APIRef("Device Orientation Events")}}{{SecureContext_Header}}

L'évènement **`deviceorientation`** de l'interface {{DOMxRef("Window")}} est déclenché lorsque des données récentes sont disponibles depuis un capteur d'orientation concernant l'orientation actuelle de l'appareil par rapport au repère terrestre. Ces données sont recueillies à partir d'un magnétomètre intégré à l'appareil.

Voir [Explication des données d'orientation et de mouvement](/fr/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained) pour plus de détails.

Cet évènement n'est pas annulable et ne se propage pas.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("deviceorientation", (event) => { })

ondeviceorientation = (event) => { }
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

## Exemples

```js
if (window.DeviceOrientationEvent) {
  window.addEventListener(
    "deviceorientation",
    (event) => {
      const rotationsDegres = event.alpha; // alpha : rotation autour de l'axe z
      const gaucheDroite = event.gamma; // gamma: de gauche à droite
      const avantArriere = event.beta; // beta: mouvement avant-arrière

      gererEventRotation(avantArriere, gaucheDroite, rotationsDegres);
    },
    true,
  );
}

function gererEventRotation(avantArriere, gaucheDroite, rotationsDegres) {
  // faire quelque chose d'étonnant
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("Window.devicemotion_event", "devicemotion")}}
- [Détection de l'orientation des appareils.](/fr/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [Explication des données d'orientation et de mouvement](/fr/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
