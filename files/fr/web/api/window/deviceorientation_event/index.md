---
title: "Window : l'événement deviceorientation"
slug: Web/API/Window/deviceorientation_event
---

{{APIRef}}

L'événement `deviceorientation` est déclenché lorsque des données sont disponibles, à partir d'un capteur d'orientation, sur l'orientation actuelle de l'appareil par rapport au cadre de coordonnées de la Terre. Ces données sont recueillies à partir d'un magnétomètre à l'intérieur de l'appareil. Voir [Données d'orientation et de mouvement expliquées](/fr/docs/Web/Guide/Events/Orientation_and_motion_data_explained) pour plus de détails.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Propagation</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Annulable</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>
        <a href="/fr/docs/Web/API/DeviceOrientationEvent"
          ><code>DeviceOrientationEvent</code></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Propriété du gestionnaire d'événements</th>
      <td>
        <a href="/fr/docs/Web/API/Window/ondeviceorientation"
          ><code>window.ondeviceorientation</code></a
        >
      </td>
    </tr>
  </tbody>
</table>

## Exemple

```js
if (window.DeviceOrientationEvent) {
  window.addEventListener(
    "deviceorientation",
    function (event) {
      // alpha : rotation autour de l'axe z
      var rotateDegrees = event.alpha;
      // gamma : de gauche à droite
      var leftToRight = event.gamma;
      // bêta : mouvement avant-arrière
      var frontToBack = event.beta;

      handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
    },
    true,
  );
}

var handleOrientationEvent = function (
  frontToBack,
  leftToRight,
  rotateDegrees,
) {
  // faire quelque chose d'étonnant
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'événement [`devicemotion`](/fr/docs/Web/API/Window/devicemotion_event)
- [Détection de l'orientation des appareils.](/fr/docs/Web/API/Detecting_device_orientation)
- [Explication des données d'orientation et de mouvement](/fr/docs/Web/Guide/Events/Orientation_and_motion_data_explained)
- Simulation d'événements d'orientation sur les navigateurs de bureau avec [orientation-devtool](https://louisremi.github.com/orientation-devtool/).
