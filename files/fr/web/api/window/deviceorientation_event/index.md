---
title: "Window : évènement deviceorientation"
short-title: deviceorientation
slug: Web/API/Window/deviceorientation_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
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
