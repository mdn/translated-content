---
title: Utiliser l'orientation de l'appareil avec les transformations 3D
slug: Web/API/Device_orientation_events/Using_device_orientation_with_3D_transforms
l10n:
  sourceCommit: c382856e4c804eafa789f8046b01b92fef5c0df2
---

{{DefaultAPISidebar("Device Orientation Events")}}

Cet article fournit des conseils sur l'utilisation des informations d'orientation d'un appareil avec les transformations 3D CSS.

## Utiliser l'orientation pour tourner un élément

La façon la plus directe de passer [des données d'orientation](/fr/docs/Web/API/Window/deviceorientation_event) à [une transformation 3D](/fr/docs/Web/CSS/Reference/Properties/transform) consiste à utiliser respectivement les valeurs `alpha`, `gamma`, et `beta` pour `rotateZ`, `rotateX` et `rotateY`.

Il faut toutefois garder à l'esprit que [le système de coordonnées pour les informations d'orientation de l'appareil](/fr/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained) est différent du [système de coordonnées CSS](/fr/docs/Web/API/CSSOM_view_API/Coordinate_systems). Le premier système suit [la règle de la main droite](https://fr.wikipedia.org/wiki/R%C3%A8gle_de_la_main_droite) et l'axe Y va croissant vers le haut, alors que le second système suit [la règle de la main gauche](https://fr.wikipedia.org/wiki/R%C3%A8gle_de_la_main_gauche) et l'axe Y va croissant vers le bas. De plus, les rotations d'orientation de l'appareil devraient toujours être appliquées selon l'ordre Z - X' - Y''. Cet ordre ne correspond pas à certaines [transformations CSS](/fr/docs/Web/CSS/Guides/Transforms). Ces différences ont des conséquences pratiques&nbsp;:

- L'ordre des rotations importe&nbsp;: il faut s'assurer que les rotations alpha, beta et gamma sont appliquées dans cet ordre.
- La transformation CSS [`rotate3d()`](/fr/docs/Web/CSS/Reference/Values/transform-function/rotate3d) et les fonctions [DOMMatrixReadOnly.rotate()](/fr/docs/Web/API/DOMMatrixReadOnly/rotate) et [DOMMatrix.rotateSelf()](/fr/docs/Web/API/DOMMatrix/rotateSelf) appliquent les rotations dans l'ordre Z - Y' - X'' (et non Z - X' - Y''). Il n'est donc pas possible d'appliquer les rotations alpha, beta et gamma dans le bon ordre en utilisant un seul appel. Il faut appliquer chaque rotation individuellement, dans le bon ordre.
- Étant donné les différences de systèmes de coordonnées mentionnées avant, les rotations alpha et beta doivent être inversées (celles autour des axes Z et X), car elles pointent dans des directions opposées, et il faut garder l'angle gamma (celui autour de l'axe Y) tel quel.

  Voici un fragment de code qui résume cela&nbsp;:

  ```js
  const elem = document.getElementById("view3d");

  window.addEventListener("deviceorientation", (e) => {
    elem.style.transform = `rotateZ(${-e.alpha}deg) rotateX(${-e.beta}deg) rotateY(${
      e.gamma
    }deg)`;
  });
  ```

## Passer d'angles pour `rotate3d()` à ceux pour `deviceorientation`

Si vous avez besoin de convertir des angles selon les axes utilisés par `rotate3d()` en [angles d'Euler](https://fr.wikipedia.org/wiki/Angles_d%27Euler), utilisés par `deviceorientation`, vous pouvez utiliser la fonction suivante&nbsp;:

```js
// On convertit un angle rotate3d() en angle deviceorientation
function orient(aa) {
  const x = aa.x,
    y = aa.y,
    z = aa.z,
    a = aa.a,
    c = Math.cos(aa.a),
    s = Math.sin(aa.a),
    t = 1 - c,
    // Matrice de rotation axes-angles
    rm00 = c + x * x * t,
    rm10 = z * s + y * x * t,
    rm20 = -y * s + z * x * t,
    rm01 = -z * s + x * y * t,
    rm11 = c + y * y * t,
    rm21 = x * s + z * y * t,
    rm02 = y * s + x * z * t,
    rm12 = -x * s + y * z * t,
    rm22 = c + z * z * t,
    TO_DEG = 180 / Math.PI,
    ea = [],
    n = Math.hypot(rm22, rm20);

  // Matrice de rotation vers les angles d'Euler
  ea[1] = Math.atan2(-rm21, n);

  if (n > 0.001) {
    ea[0] = Math.atan2(rm01, rm11);
    ea[2] = Math.atan2(rm20, rm22);
  } else {
    ea[0] = 0;
    ea[2] = (rm21 > 0 ? 1 : -1) * Math.atan2(-rm10, rm00);
  }

  return {
    alpha: -ea[0] * TO_DEG - 180,
    beta: -ea[1] * TO_DEG,
    gamma: ea[2] * TO_DEG,
  };
}
```

## Voir aussi

- [Utiliser les transformations CSS](/fr/docs/Web/CSS/Guides/Transforms/Using)
- [Détecter l'orientation de l'appareil](/fr/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
