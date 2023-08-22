---
title: Fondamentaux pour la spatialisation avec Web Audio
slug: Web/API/Web_Audio_API/Web_audio_spatialization_basics
l10n:
  sourceCommit: 06105598d11001e9f12d80ad05087f1df3c0634b
---

{{DefaultAPISidebar("Web Audio API")}}

En plus des nombreuses options de traitement du son, l'API Web Audio contient également des fonctions pour émuler la différence de perception lors du déplacement par rapport à une source sonore, par un exemple un défilement lorsqu'on se déplace autour d'une source sonore dans un jeu vidéo. C'est ce qu'on appelle **la spatialisation**, et cet article couvrira les bases pour implémenter un tel système.

## Les bases de la spatialisation

Avec l'API Web Audio, on peut créer des spatialisations complexes en trois dimensions à l'aide de [`PannerNode`](/fr/docs/Web/API/PannerNode). Cette interface est un outil utilisant des notions mathématiques pour manipuler l'audio dans l'espace. On peut l'utiliser pour créer des effets de choses faisant du son au-dessus, derrière ou se déplaçant devant nous.

C'est un outil pratique pour WebXR et les jeux vidéo.

Dans l'espace en trois dimensions, c'est la seule façon de réaliser des effets audio réalistes. Des bibliothèques tierces comme [three.js](https://threejs.org/) et [A-frame](https://aframe.io/) l'utilisent pour gérer le son. On notera quand même qu'il n'y a pas _forcément_ besoin de déplacer le son dans un espace en trois dimensions, on peut tout à fait utiliser cette interface pour gérer un son dans un espace en deux dimensions.

> **Note :** Il existe également [`StereoPannerNode`](/fr/docs/Web/API/StereoPannerNode) qui permet de gérer des effets simples de défilement à gauche ou à droite. Celle-ci est plus simple à utiliser, mais est moins flexible. Si vous souhaitez un simple effet de panoramique stéréo, voyez [l'exemple `StereoPannerNode`](https://mdn.github.io/webaudio-examples/stereo-panner-node/) ([le code source correspondant](https://github.com/mdn/webaudio-examples/tree/master/stereo-panner-node)), qui devrait vous fournir ce dont vous avez besoin.

## Démo avec le radiocassette en 3D

Pour illustrer la spatialisation en trois dimensions, nous avons créé une version modifiée de la démo radiocassette initiée dans le guide [Utiliser l'API Web Audio](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API). Voir [la démo de spatialisation en 3D](https://mdn.github.io/webaudio-examples/spatialization/) (et [le code source correspondant](https://github.com/mdn/webaudio-examples/tree/master/spatialization)).

![Une interface utilisateur simple avec un radiocassette tourné et incliné, avec des contrôles pour le déplacer dans l'espace et le faire tourner.](web-audio-spatialization.png)

Le radiocassette est placé dans un espace (défini par les bords de la zone d'affichage du navigateur), et dans cette démonstration, on peut le déplacer et le faire pivoter avec les contrôles fournis.

Lorsqu'on déplace le radiocassette, le son produit change de façon correspondante, se décalant de droite à gauche selon le déplacement ou s'atténuant si on l'éloigne dans le fond ou si on le pivote pour que les hauts-parleurs nous tournent le dos. Ces effets sont obtenus en jouant sur les différentes propriétés de l'objet `PannerNode` lors du mouvement, pour émuler cette spatialisation.

> **Note :** Le résultat obtenu sera bien meilleur si vous utilisez un casque ou des écouteurs ou un système stéréo surround.

## Créer un auditeur

Commençons&nbsp;! L'interface [`BaseAudioContext`](/fr/docs/Web/API/BaseAudioContext) (qui est étendue par [`AudioContext`](/fr/docs/Web/API/AudioContext)) possède une propriété [`listener`](/fr/docs/Web/API/BaseAudioContext/listener) qui renvoie un objet [`AudioListener`](/fr/docs/Web/API/AudioListener). Cette propriété représente un auditeur pour la scène audio, il s'agit généralement de modéliser la personne qui utilise l'application. On peut définir l'emplacement et la direction de l'auditeur dans l'espace. Cet auditeur reste alors statique et `PannerNode` peut calculer le son reçu par l'auditeur selon leurs positions respectives.

Créons un contexte, un auditeur puis définissons la position de l'auditeur pour simuler une personne qui regarderait cette pièce virtuelle&nbsp;:

```js
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
const listener = audioCtx.listener;

const posX = window.innerWidth / 2;
const posY = window.innerHeight / 2;
const posZ = 300;

listener.positionX.value = posX;
listener.positionY.value = posY;
listener.positionZ.value = posZ - 5;
```

On pourra déplacer l'auditeur de gauche à droite en utilisant `positionX`, ou de haut en bas avec `positionY`, ou d'avant en arrière grâce à `positionZ`. Ici, on place l'auditeur au milieu de la zone d'affichage et légèrement devant notre radiocassette. On peut aussi définir la direction selon laquelle l'auditeur est orienté. Les valeurs par défaut fonctionnent bien&nbsp;:

```js
listener.forwardX.value = 0;
listener.forwardY.value = 0;
listener.forwardZ.value = -1;
listener.upX.value = 0;
listener.upY.value = 1;
listener.upZ.value = 0;
```

Les propriétés `forward*` représentent les coordonnées 3D de l'auditeur selon la direction dans laquelle il fait face, et les propriétés `up*` représentent les coordonnées 3D du haut de la tête de l'auditeur. En utilisant ces deux ensembles, on définit la direction de l'auditeur.

## Créer un nœud panoramique (<i lang="en">panner node</i>)

Créons notre objet [`PannerNode`](/fr/docs/Web/API/PannerNode). Celui-ci possède plusieurs propriétés. Voyons de quoi il s'agit.

Pour commencer, on peut définir [`panningModel`](/fr/docs/Web/API/PannerNode/panningModel) qui est l'algorithme de spatialisation utilisé pour positionner l'audio dans l'espace en 3D, il peut valoir&nbsp;:

- `equalpower`
  - : La valeur par défaut et générique pour déterminer la gestion du panoramique.
- `HRTF`
  - : L'acronyme pour <i lang="en">Head-related transfer function</i>, qu'on pourrait traduire par «&nbsp;fonction de transfert relative à la tête&nbsp;», et qui tient compte de la tête humaine lorsqu'il s'agit de déterminer l'emplacement du son.

Utilisons ce modèle `HRTF`&nbsp;!

```js
const panningModel = "HRTF";
```

Les propriétés [`coneInnerAngle`](/fr/docs/Web/API/PannerNode/coneInnerAngle) et [`coneOuterAngle`](/fr/docs/Web/API/PannerNode/coneOuterAngle) définissent l'emplacement de l'origine du volume. Par défaut, les deux valent 360°.

Les hauts-parleurs de notre radiocassette auront des cônes plus réduits, que nous allons définir. Le cône intérieur (`coneInnerAngle`) est l'emplacement où le gain (c'est-à-dire le volume) est toujours émulé au maximum et le cône extérieur (`coneOuterAngle`) est l'emplacement où le gain commence à s'atténuer.

Le gain est réduit de la valeur de [`coneOuterGain`](/fr/docs/Web/API/PannerNode/coneOuterGain).

Prenons quelques constantes pour stocker ces valeurs, que nous utiliserons ensuite en paramètres&nbsp;:

```js
const innerCone = 60;
const outerCone = 90;
const outerGain = 0.3;
```

Le prochain paramètre est [`distanceModel`](/fr/docs/Web/API/PannerNode/distanceModel), qui peut valoir `linear`, `inverse`, ou `exponential`. Il s'agit d'algorithmes différents utilisés pour réduire le volume de la source audio lorsqu'elle s'éloigne de l'auditeur. Ici, nous utiliserons `linear` qui a le mérite d'être simple&nbsp;:

```js
const distanceModel = "linear";
```

On peut ensuite définir une distance maximale ([`maxDistance`](/fr/docs/Web/API/PannerNode/maxDistance)) entre la source et l'auditeur. Passé cette distance, le volume ne sera plus réduit si la source s'éloigne encore. Cela peut être utile lorsqu'on veut émuler un effet de distance sans perdre pour autant tout le volume. La valeur par défaut est 10&nbsp;000 (une valeur relative sans unité). Nous gardons cette valeur telle quelle&nbsp;:

```js
const maxDistance = 10000;
```

Il y a également une distance de référence ([`refDistance`](/fr/docs/Web/API/PannerNode/refDistance)) utilisée par les modèles de distance, qui vaut `1` par défaut (valeur que nous allons utiliser ici)&nbsp;:

```js
const refDistance = 1;
```

On a ensuite le facteur de coupure (<i lang="en">roll-off factor</i>) ([`rolloffFactor`](/fr/docs/Web/API/PannerNode/rolloffFactor)) qui indique la rapidité à laquelle le volume est réduit lorsque la source s'éloigne de l'auditeur. La valeur par défaut est 1, prenons-en une plus grande pour exagérer les mouvements.

```js
const rollOff = 10;
```

Maintenant, nous allons définir la position et l'orientation du radiocassette. Cela ressemble fort à ce que nous avons déjà fait pour l'auditeur. Il s'agit également des paramètres qui vont être modifiés lorsqu'on utilise les contrôles de l'interface.

```js
const positionX = posX;
const positionY = posY;
const positionZ = posZ;

const orientationX = 0.0;
const orientationY = 0.0;
const orientationZ = -1.0;
```

On notera la valeur négative pour l'orientation sur l'axe Z, cela permet d'orienter le radiocassette afin qu'il soit face à nous. Une valeur positive aurait tourné le radiocassette dos à nous.

Utilisons le constructeur correspondant pour créer le nœud panoramique et lui passer tous les paramètres définis ci-avant&nbsp;:

```js
const panner = new PannerNode(audioCtx, {
  panningModel,
  distanceModel,
  positionX,
  positionY,
  positionZ,
  orientationX,
  orientationY,
  orientationZ,
  refDistance,
  maxDistance,
  rolloffFactor: rollOff,
  coneInnerAngle: innerCone,
  coneOuterAngle: outerCone,
  coneOuterGain: outerGain,
});
```

## Déplacer le radiocassette

Nous allons maintenant déplacer le radiocassette dans cette «&nbsp;pièce&nbsp;» avec quelques contrôles paramétrés pour ce faire. On peut le déplacer de gauche à droite, de haut en bas, d'avant en arrière. On peut également le tourner.

Le son provient de l'avant des hauts-parleurs du radiocassette et lorsqu'on le tourne, on peut modifier la direction du son (par exemple, diffuser le son vers l'arrière si le radiocassette est tourné de 180° et nous tourne le dos).

Nous devons paramétrer quelques éléments pour l'interface. Pour commencer, nous obtenons des références pour les éléments que nous voulons déplacer, pour les valeurs que nous changerons à l'aide de [transformations CSS](/fr/docs/Web/CSS/CSS_Transforms) pour que le mouvement apparaisse à l'écran. Enfin, nous appliquons des limites pour que le radiocassette ne puisse pas aller trop loin dans n'importe quelle direction&nbsp;:

```js
const moveControls = document
  .querySelector("#move-controls")
  .querySelectorAll("button");
const boombox = document.querySelector(".boombox-body");

// Les valeurs pour les transformations CSS
const transform = {
  xAxis: 0,
  yAxis: 0,
  zAxis: 0.8,
  rotateX: 0,
  rotateY: 0,
};

// Les limites au déplacement
const topBound = -posY;
const bottomBound = posY;
const rightBound = posX;
const leftBound = -posX;
const innerBound = 0.1;
const outerBound = 1.5;
```

Créons une fonction qui prend la direction vers laquelle nous voulons bouger comme paramètre et qui modifie la transformation CSS et qui met à jour de façon correspondante les valeurs de position et d'orientation pour les propriétés du nœud panoramique.

Pour commencer, gérons les déplacements gauche, droite, haut, bas, qui sont plutôt simples. On déplace le radiocassette sur l'axe et on met à jour la position correspondante.

```js
function moveBoombox(direction) {
  switch (direction) {
    case "left":
      if (transform.xAxis > leftBound) {
        transform.xAxis -= 5;
        panner.positionX.value -= 0.1;
      }
      break;
    case "up":
      if (transform.yAxis > topBound) {
        transform.yAxis -= 5;
        panner.positionY.value -= 0.3;
      }
      break;
    case "right":
      if (transform.xAxis < rightBound) {
        transform.xAxis += 5;
        panner.positionX.value += 0.1;
      }
      break;
    case "down":
      if (transform.yAxis < bottomBound) {
        transform.yAxis += 5;
        panner.positionY.value += 0.3;
      }
      break;
  }
}
```

Nous avons quelque chose de semblable pour le rapprochement et l'éloignement&nbsp;:

```js
case 'back':
  if (transform.zAxis > innerBound) {
    transform.zAxis -= 0.01;
    panner.positionZ.value += 40;
  }
  break;
case 'forward':
  if (transform.zAxis < outerBound) {
    transform.zAxis += 0.01;
    panner.positionZ.value -= 40;
  }
  break;
```

La gestion de la rotation demande plus d'effort, car il faut _déplacer le son_. Il faut non seulement mettre à jour les valeurs pour les deux axes (si on tourne un objet sur l'axe X, on doit mettre à jour les coordonnées Y et Z pour l'objet), mais aussi faire un peu de maths pour ça. La rotation suit un cercle et nous avons besoin d'utiliser [`Math.sin()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/sin) et [`Math.cos()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/cos) pour nous aider à tracer ce cercle.

Fixons une vitesse de rotation, que nous convertirons en radians pour les utiliser avec `Math.sin()` et `Math.cos()` lorsque nous aurons besoin de calculer les nouvelles coordonnées lors de la rotation du radiocassette&nbsp;:

```js
// Fixons les constantes de rotation
const rotationRate = 60; // Un nombre plus grand entraînera une rotation plus lente

const q = Math.PI / rotationRate; // Incrément de la rotation en radians
```

On peut aussi utiliser ces valeurs pour déterminer la rotation en degrés, ce qui nous aidera pour les transformations CSS qu'il faudra créer (où nous aurons besoin des valeurs pour l'axe X et Y)&nbsp;:

```js
// On obtient la valeur en degrés pour le CSS
const degreesX = (q * 180) / Math.PI;
const degreesY = (q * 180) / Math.PI;
```

Considérons la rotation vers la gauche par exemple. On doit changer l'orientation sur les axes X et Z du nœud panoramique lors d'une rotation vers la gauche sur l'axe Y&nbsp;:

```js
case 'rotate-left':
  transform.rotateY -= degreesY;

  // 'left' est une rotation sur l'axe Y avec un incrément angulaire négatif
  z = panner.orientationZ.value*Math.cos(q) - panner.orientationX.value*Math.sin(q);
  x = panner.orientationZ.value*Math.sin(q) + panner.orientationX.value*Math.cos(q);
  y = panner.orientationY.value;

  panner.orientationX.value = x;
  panner.orientationY.value = y;
  panner.orientationZ.value = z;
  break;
```

Cela peut sembler déroutant&nbsp;: nous utilisons les fonctions sinus et cosinus pour nous aider à connaître les coordonnées après le déplacement circulaire pour la rotation du radiocassette.

On peut faire de même pour les autres axes, il suffit de choisir les bonnes orientations et d'indiquer si l'incrément est positif ou négatif.

```js
case 'rotate-right':
  transform.rotateY += degreesY;
  // 'right' est une rotation sur l'axe Y avec un incrément angulaire positif
  z = panner.orientationZ.value*Math.cos(-q) - panner.orientationX.value*Math.sin(-q);
  x = panner.orientationZ.value*Math.sin(-q) + panner.orientationX.value*Math.cos(-q);
  y = panner.orientationY.value;
  panner.orientationX.value = x;
  panner.orientationY.value = y;
  panner.orientationZ.value = z;
  break;
case 'rotate-up':
  transform.rotateX += degreesX;
  // 'up' est une rotation sur l'axe X avec un incrément angulaire négatif
  z = panner.orientationZ.value*Math.cos(-q) - panner.orientationY.value*Math.sin(-q);
  y = panner.orientationZ.value*Math.sin(-q) + panner.orientationY.value*Math.cos(-q);
  x = panner.orientationX.value;
  panner.orientationX.value = x;
  panner.orientationY.value = y;
  panner.orientationZ.value = z;
  break;
case 'rotate-down':
  transform.rotateX -= degreesX;
  // 'down' est une rotation sur l'axe X avec un incrément angulaire positif
  z = panner.orientationZ.value*Math.cos(q) - panner.orientationY.value*Math.sin(q);
  y = panner.orientationZ.value*Math.sin(q) + panner.orientationY.value*Math.cos(q);
  x = panner.orientationX.value;
  panner.orientationX.value = x;
  panner.orientationY.value = y;
  panner.orientationZ.value = z;
  break;
```

Et enfin, il nous faut mettre à jour le CSS et avoir une référence du dernier mouvement pour les évènements de la souris. Voici la version finale pour notre fonction `moveBoombox()`.

```js
function moveBoombox(direction, prevMove) {
  switch (direction) {
    case "left":
      if (transform.xAxis > leftBound) {
        transform.xAxis -= 5;
        panner.positionX.value -= 0.1;
      }
      break;
    case "up":
      if (transform.yAxis > topBound) {
        transform.yAxis -= 5;
        panner.positionY.value -= 0.3;
      }
      break;
    case "right":
      if (transform.xAxis < rightBound) {
        transform.xAxis += 5;
        panner.positionX.value += 0.1;
      }
      break;
    case "down":
      if (transform.yAxis < bottomBound) {
        transform.yAxis += 5;
        panner.positionY.value += 0.3;
      }
      break;
    case "back":
      if (transform.zAxis > innerBound) {
        transform.zAxis -= 0.01;
        panner.positionZ.value += 40;
      }
      break;
    case "forward":
      if (transform.zAxis < outerBound) {
        transform.zAxis += 0.01;
        panner.positionZ.value -= 40;
      }
      break;
    case "rotate-left":
      transform.rotateY -= degreesY;

      // 'left' est une rotation sur l'axe Y avec un incrément angulaire négatif
      z =
        panner.orientationZ.value * Math.cos(q) -
        panner.orientationX.value * Math.sin(q);
      x =
        panner.orientationZ.value * Math.sin(q) +
        panner.orientationX.value * Math.cos(q);
      y = panner.orientationY.value;

      panner.orientationX.value = x;
      panner.orientationY.value = y;
      panner.orientationZ.value = z;
      break;
    case "rotate-right":
      transform.rotateY += degreesY;
      // 'right' est une rotation sur l'axe Y avec un incrément angulaire positif
      z =
        panner.orientationZ.value * Math.cos(-q) -
        panner.orientationX.value * Math.sin(-q);
      x =
        panner.orientationZ.value * Math.sin(-q) +
        panner.orientationX.value * Math.cos(-q);
      y = panner.orientationY.value;
      panner.orientationX.value = x;
      panner.orientationY.value = y;
      panner.orientationZ.value = z;
      break;
    case "rotate-up":
      transform.rotateX += degreesX;
      // 'up' est une rotation sur l'axe X avec un incrément angulaire négatif
      z =
        panner.orientationZ.value * Math.cos(-q) -
        panner.orientationY.value * Math.sin(-q);
      y =
        panner.orientationZ.value * Math.sin(-q) +
        panner.orientationY.value * Math.cos(-q);
      x = panner.orientationX.value;
      panner.orientationX.value = x;
      panner.orientationY.value = y;
      panner.orientationZ.value = z;
      break;
    case "rotate-down":
      transform.rotateX -= degreesX;
      // 'down' est une rotation sur l'axe X avec un incrément angulaire positif
      z =
        panner.orientationZ.value * Math.cos(q) -
        panner.orientationY.value * Math.sin(q);
      y =
        panner.orientationZ.value * Math.sin(q) +
        panner.orientationY.value * Math.cos(q);
      x = panner.orientationX.value;
      panner.orientationX.value = x;
      panner.orientationY.value = y;
      panner.orientationZ.value = z;
      break;
  }

  boombox.style.transform =
    `translateX(${transform.xAxis}px) ` +
    `translateY(${transform.yAxis}px) ` +
    `scale(${transform.zAxis}) ` +
    `rotateY(${transform.rotateY}deg) ` +
    `rotateX(${transform.rotateX}deg)`;

  const move = prevMove || {};
  move.frameId = requestAnimationFrame(() => moveBoombox(direction, move));
  return move;
}
```

## Câbler les contrôles

Associer ces actions aux boutons des contrôles est plus simple, on écoute pour un évènement de la souris sur les contrôles et on exécute cette fonction, puis on arrête son exécution lorsque le bouton de la souris est relâché&nbsp;:

```js
// Pour chaque contrôle, on déplace le radiocassette et
// on change les valeurs de position
moveControls.forEach((el) => {
  let moving;
  el.addEventListener(
    "mousedown",
    () => {
      const direction = this.dataset.control;
      if (moving && moving.frameId) {
        cancelAnimationFrame(moving.frameId);
      }
      moving = moveBoombox(direction);
    },
    false,
  );

  window.addEventListener(
    "mouseup",
    () => {
      if (moving && moving.frameId) {
        cancelAnimationFrame(moving.frameId);
      }
    },
    false,
  );
});
```

## Connecter notre graphe

Notre document HTML contient un élément `<audio>` qui doit être manipulé par le nœud panoramique.

```html
<audio src="myCoolTrack.mp3"></audio>
```

Pour cela, il faut récupérer la source de l'élément et la relier à l'API Web Audio à l'aide de [`AudioContext.createMediaElementSource()`](/fr/docs/Web/API/AudioContext/createMediaElementSource).

```js
// Obtenir l'élément audio
const audioElement = document.querySelector("audio");

// Le passer au contexte audio
const track = audioContext.createMediaElementSource(audioElement);
```

Il faut ensuite connecter notre graphe audio. On connecte l'entrée (la piste audio) au nœud de modification (le panoramique), qu'on connecte à notre sortie (ici les hauts-parleurs de l'appareil du navigateur).

```js
track.connect(panner).connect(audioCtx.destination);
```

Créons un bouton pour lire/suspendre l'audio sur lequel on pourra cliquer pour lancer/arrêter le son.

```html
<button data-playing="false" role="switch">Lecture/Pause</button>
```

```js
// On sélectionne le bouton de lecture
const playButton = document.querySelector("button");

playButton.addEventListener(
  "click",
  () => {
    // On vérifie si le contexte est dans un état suspendu
    // (règle pour la lecture automatique)
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    // On lance la lecture ou on met en pause selon l'état
    if (playButton.dataset.playing === "false") {
      audioElement.play();
      playButton.dataset.playing = "true";
    } else if (playButton.dataset.playing === "true") {
      audioElement.pause();
      playButton.dataset.playing = "false";
    }
  },
  false,
);
```

Pour une exploration plus avancée de la lecture et du contrôle audio, ainsi que des graphes audio, voyez le guide [Utiliser l'API Web Audio](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

## Résumé

Nous espérons que cet article vous a permis de mieux comprendre le fonctionnement de la spatialisation avec l'API Web Audio et le rôle des propriétés de [`PannerNode`](/fr/docs/Web/API/PannerNode) (il y en a un certain nombre). La manipulation de ces valeurs peut s'avérer délicate selon le cas d'usage, c'est normal que de passer du temps à les paramétrer.

> **Note :** Il existe quelques différences entre les navigateurs pour ce qui concerne la spatialisation audio. Le nœud panoramique manipule des opérations mathématiques avancées et il existe [plusieurs tests](https://wpt.fyi/results/webaudio/the-audio-api/the-pannernode-interface?label=stable&aligned=true) que vous pouvez consulter pour connaître l'état d'avancement sur ce type de nœud sur les différentes plateformes.

À nouveau, vous pouvez [consulter la version finale de la démo ici](https://mdn.github.io/webaudio-examples/spatialization/), ainsi que [le code source de l'exemple final](https://github.com/mdn/webaudio-examples/tree/master/spatialization). Cette démonstration est [également disponible sur CodePen](https://codepen.io/Rumyra/pen/MqayoK?editors=0100).

Si vous travaillez sur des jeux en 3D et/ou WebXR, mieux vaudra utiliser une bibliothèque 3D tierce pour créer de telles fonctionnalités, plutôt que de tenter de les implémenter à partir de 0.

Nous avons montré dans cet article comment réaliser ces effets en partant de rien, mais vous gagnerez du temps à utiliser les outils existants.
