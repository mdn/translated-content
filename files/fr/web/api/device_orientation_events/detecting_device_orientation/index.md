---
title: Détecter l'orientation de l'appareil
slug: Web/API/Device_orientation_events/Detecting_device_orientation
l10n:
  sourceCommit: c382856e4c804eafa789f8046b01b92fef5c0df2
---

{{DefaultAPISidebar("Device Orientation Events")}} {{securecontext_header}}

Grâce à leurs capteurs, une bonne partie des appareils permettant de naviguer sur le Web peuvent déterminer leur **orientation**. Autrement dit, ils sont en mesure de fournir des données indiquant des changements relatifs à leur orientation par rapport à la pesanteur. Les appareils mobiles, notamment, utilisent ces informations pour tourner l'affichage afin qu'il reste dans le sens d'utilisation de l'appareil (en présentant par exemple une vue en paysage lorsque l'écran de l'appareil est tourné tel que sa largeur est supérieure à sa hauteur pour la personne qui le regarde).

Deux évènements JavaScript permettent de gérer ces informations relatives à l'orientation.

Le premier, [`DeviceOrientationEvent`](/fr/docs/Web/API/DeviceOrientationEvent), est émis lorsque l'accéléromètre détecte un changement d'orientation de l'appareil. En interceptant et en traitant ces évènements, le site ou l'application peut répondre de façon interactive aux rotations et déplacements de l'appareil.

Le deuxième évènement, [`DeviceMotionEvent`](/fr/docs/Web/API/DeviceMotionEvent), est émis lorsque l'appareil détecte un changement d'accélération. Il diffère de [`DeviceOrientationEvent`](/fr/docs/Web/API/DeviceOrientationEvent), car il correspond aux changements d'accélération et non d'orientation. Les capteurs permettant de collecter des données pour [`DeviceMotionEvent`](/fr/docs/Web/API/DeviceMotionEvent) se trouvent généralement dans les ordinateurs portables. Les capteurs permettant d'avoir des informations pour les évènements [`DeviceOrientationEvent`](/fr/docs/Web/API/DeviceOrientationEvent) sont plus communément trouvés dans les appareils mobiles.

## Traiter les évènements d'orientation

Pour recevoir les informations de changement d'orientation, il faut écouter l'évènement [`deviceorientation`](/fr/docs/Web/API/Window/deviceorientation_event)&nbsp;:

```js
window.addEventListener("deviceorientation", handleOrientation, true);
```

Après avoir enregistré un gestionnaire d'évènement (ici la fonction `handleOrientation()`), le gestionnaire d'évènement sera appelé périodiquement avec les données d'orientation à jour.

L'évènement relatif à l'orientation portera quatre valeurs&nbsp;:

- [`DeviceOrientationEvent.absolute`](/fr/docs/Web/API/DeviceOrientationEvent/absolute)
- [`DeviceOrientationEvent.alpha`](/fr/docs/Web/API/DeviceOrientationEvent/alpha)
- [`DeviceOrientationEvent.beta`](/fr/docs/Web/API/DeviceOrientationEvent/beta)
- [`DeviceOrientationEvent.gamma`](/fr/docs/Web/API/DeviceOrientationEvent/gamma)

Le gestionnaire d'évènement `handleOrientation()` pourrait ressembler à ceci&nbsp;:

```js
function handleOrientation(event) {
  const absolute = event.absolute;
  const alpha = event.alpha;
  const beta = event.beta;
  const gamma = event.gamma;

  // Faire quelque chose avec les nouvelles
  // données d'orientation
}
```

> [!NOTE]
> La bibliothèque tierce [parallax.js](https://github.com/wagerfield/parallax) est une prothèse d'émulation (<i lang="en">polyfill</i>) pour normaliser les données de l'accéléromètre et du gyroscope pour les appareils mobiles. Elle peut s'avérer utile pour gommer certaines différences de prise en charge des appareils.

### Explication des valeurs relatives à l'orientation

La valeur fournie pour chaque axe indique la rotation autour d'un axe donné dans le système de coordonnées de l'appareil. Bien que ces notions soient abordées plus en détails dans l'article [Explication des données d'orientation et de mouvement](/fr/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained), voyons un rapide résumé ici.

- [`DeviceOrientationEvent.alpha`](/fr/docs/Web/API/DeviceOrientationEvent/alpha) représente le déplacement de l'appareil autour de l'axe z, exprimé en degrés (de 0, inclus, à 360, exclus). Cela correspond à la rotation de l'appareil sur son plan (comme une toupie qu'on ferait tourner son axe).
- [`DeviceOrientationEvent.beta`](/fr/docs/Web/API/DeviceOrientationEvent/beta) représente le déplacement de l'appareil autour de l'axe x, exprimé en degrés (de 0, inclus, à 360, exclus). Cela correspond à l'inclinaison de l'appareil d'avant en arrière.
- [`DeviceOrientationEvent.gamma`](/fr/docs/Web/API/DeviceOrientationEvent/gamma) représente le déplacement de l'appareil autour de l'axe y, exprimé en degrés (de 0, inclus, à 360, exclus). Cela correspond à l'inclinaison de l'appareil de droite à gauche.

### Exemple

Cet exemple fonctionnera pour les navigateurs qui prennent en charge l'évènement [`deviceorientation`](/fr/docs/Web/API/Window/deviceorientation_event) et pour les appareils capables de détecteur leur orientation.

Prenons une balle dans un jardin&nbsp;:

```html
<div class="garden">
  <div class="ball"></div>
</div>
Tenez l'appareil parallèle au sol. Tournez-le sur les axes x et y pour voir la
balle bouger de haut en bas et de gauche à droite.
<pre class="output"></pre>
```

Soit un jardin large de 200 pixels, avec la balle en son centre&nbsp;:

```css
.garden {
  position: relative;
  width: 200px;
  height: 200px;
  border: 5px solid #ccc;
  border-radius: 10px;
}

.ball {
  position: absolute;
  top: 90px;
  left: 90px;
  width: 20px;
  height: 20px;
  background: green;
  border-radius: 100%;
}
```

Si on déplace notre appareil, la balle se déplacera avec le mouvement correspondant&nbsp;:

```js
const ball = document.querySelector(".ball");
const garden = document.querySelector(".garden");
const output = document.querySelector(".output");

const maxX = garden.clientWidth - ball.clientWidth;
const maxY = garden.clientHeight - ball.clientHeight;

function handleOrientation(event) {
  let x = event.beta; // Une valeur en degrés dans l'intervalle [-180,180[
  let y = event.gamma; // Une valeur en degrés dans l'intervalle [-90,90[

  output.textContent = `beta : ${x}\n`;
  output.textContent += `gamma : ${y}\n`;

  // On ne veut pas que l'appareil soit complètement tête en bas
  // donc on contraint la valeur de x sur l'intervalle [-90,90]
  if (x > 90) {
    x = 90;
  }
  if (x < -90) {
    x = -90;
  }

  // Pour faciliter les calculs, on décale x et y sur
  // l'intervalle [0,180]
  x += 90;
  y += 90;

  // 10 correspond à la moitié de la taille de la balle
  // cela permet de centrer le point de positionnement
  // au centre de la balle
  ball.style.left = `${(maxY * y) / 180 - 10}px`; // tourner l'appareil autour de l'axe y déplacera la balle horizontalement
  ball.style.top = `${(maxX * x) / 180 - 10}px`; // tourner l'appareil autour de l'axe x déplacera la balle verticalement
}

window.addEventListener("deviceorientation", handleOrientation);
```

{{LiveSampleLink("Exemple", "Cliquez ici")}} pour ouvrir cet exemple dans une nouvelle fenêtre (en effet, [`deviceorientation`](/fr/docs/Web/API/Window/deviceorientation_event) ne fonctionne pas pour tous les navigateurs au sein d'une [`<iframe>`](/fr/docs/Web/HTML/Reference/Elements/iframe) embarquant du contenu d'une autre origine).

{{EmbedLiveSample('', '230', '260')}}

## Traiter les évènements de mouvement

Les évènements de mouvement se gèrent de façon analogue aux évènements d'orientation, bien entendu avec un nom différent&nbsp;: [`devicemotion`](/fr/docs/Web/API/Window/devicemotion_event)

```js
window.addEventListener("devicemotion", handleMotion, true);
```

De même, les informations contenues dans l'objet [`DeviceMotionEvent`](/fr/docs/Web/API/DeviceMotionEvent) passé au gestionnaire d'évènement est différent. Un évènement de mouvement contiendra quatre propriétés&nbsp;:

- [`DeviceMotionEvent.acceleration`](/fr/docs/Web/API/DeviceMotionEvent/acceleration)
- [`DeviceMotionEvent.accelerationIncludingGravity`](/fr/docs/Web/API/DeviceMotionEvent/accelerationIncludingGravity)
- [`DeviceMotionEvent.rotationRate`](/fr/docs/Web/API/DeviceMotionEvent/rotationRate)
- [`DeviceMotionEvent.interval`](/fr/docs/Web/API/DeviceMotionEvent/interval)

### Explication des valeurs relatives au mouvement

Les objets [`DeviceMotionEvent`](/fr/docs/Web/API/DeviceMotionEvent) fournissent des informations sur la vitesse de changement de position et d'orientation de l'appareil. Les changements sont fournis sur les trois axes (voir l'article [Explication des données d'orientation et de mouvement](/fr/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained) pour plus de détails).

Pour [`DeviceMotionEvent.acceleration`](/fr/docs/Web/API/DeviceMotionEvent/acceleration) et [`DeviceMotionEvent.accelerationIncludingGravity`](/fr/docs/Web/API/DeviceMotionEvent/accelerationIncludingGravity), ces axes se décrivent ainsi&nbsp;:

- `x`
  - : Représente l'axe allant d'ouest en est.
- `y`
  - : Représente l'axe allant du sud au nord.
- `z`
  - : Représente l'axe perpendiculaire au sol.

Pour [`DeviceMotionEvent.rotationRate`](/fr/docs/Web/API/DeviceMotionEvent/rotationRate), ce sont des angles plutôt que des axes qui sont utilisés&nbsp;:

- `alpha`
  - : Représente une vitesse de rotation autour de l'axe perpendiculaire à l'écran (ou au clavier pour les appareils de bureau).
- `beta`
  - : Représente une vitesse de rotation autour de l'axe allant de gauche à droite de l'écran (ou du clavier pour les appareils de bureau).
- `gamma`
  - : Représente une vitesse de rotation autour de l'axe allant du bas vers le haut de l'écran (ou du clavier pour les appareils de bureau).

Enfin, [`DeviceMotionEvent.interval`](/fr/docs/Web/API/DeviceMotionEvent/interval) représente l'intervalle de temps, exprimé en millisecondes, utilisé pour fournir les données de l'appareil.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`DeviceOrientationEvent`](/fr/docs/Web/API/DeviceOrientationEvent)
- [`DeviceMotionEvent`](/fr/docs/Web/API/DeviceMotionEvent)
- [Explication des données d'orientation et de mouvement](/fr/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
- [Utiliser l'orientation de l'appareil pour les transformations 3D](/fr/docs/Web/API/Device_orientation_events/Using_device_orientation_with_3D_transforms)
- [Cyber Orb&nbsp;: un jeu de labyrinthe 2D utilisant l'orientation de l'appareil](/fr/docs/Games/Tutorials/HTML5_Gamedev_Phaser_Device_Orientation)
