---
title: BaseAudioContext.createPanner()
slug: Web/API/BaseAudioContext/createPanner
---

{{ APIRef("Web Audio API") }}

La méthode `createPanner()` de l'interface {{ domxref("BaseAudioContext") }} est utilisée pour créer un nouveau {{domxref("PannerNode")}}, qui sert à spatialiser dans un environnement 3D un flux audio entrant.

Le _panner node_ est spatialisé en relation avec l'{{domxref("AudioListener") }} de l'AudioContext (défini par l'attribut {{domxref("AudioContext.listener") }}), qui représente la position et l'orientation de la personne écoutant le flux audio.

## Syntaxe

```js
baseAudioCtx.createPanner();
```

### Retourne

Un {{domxref("PannerNode")}}.

## Exemple

Dans l'exemple suivant, vous pouvez voir comment la méthode `createPanner()`, l'{{domxref("AudioListener")}} et le {{domxref("PannerNode")}} peuvent être utilisés pour contrôler la spatialisation d'un flux audio. Généralement, vous définirez la position dans un espace 3D que votre écouteur et votre _panner_ (source) occupaient initialement, puis ajuster la position de l'un ou des deux au fur et à mesure de l'utilisation. Vous pourriez par exemple vouloir déplacer un personnage dans un monde de jeu vidéo, et vouloir que le rendu audio change de manière réaliste tandis que le personnage s'approche ou s'éloigne d'un diffuseur audio tel qu'une chaîne stéréo. Dans cet exemple, vous pouvez voir ceci contrôlé par les fonctions `moveRight()`, `moveLeft()`, etc., qui définissent de nouvelles valeurs pour la position du _panner_ via la fonction `PositionPanner()`.

Pour voir une implantation complète, visitez notre [exemple de panner-node](https://mdn.github.io/webaudio-examples/panner-node/) ([lisez le code source aussi !](https://github.com/mdn/webaudio-examples/tree/master/panner-node)) – cette démonstration vous transporte dans un environnement 2.5D appelé "Pièce de métal", où vous pouvez jouer un morceau sur une boom box et vous déplacer autour de celle-ci pour entendre comment le son change !

Notez la manière dont nous avons utilisé la détection de fonctionnalité pour soit donner au navigateur les nouvelles valeurs des propriétés (comme {{domxref("AudioListener.forwardX")}}) pour définir la position, etc. s'il le permet, ou d'anciennes méthodes (comme {{domxref("AudioListener.setOrientation()")}}) s'il les permet aussi mais non les nouvelles propriétés.

```js
// set up listener and panner position information
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var xPos = Math.floor(WIDTH / 2);
var yPos = Math.floor(HEIGHT / 2);
var zPos = 295;

// define other variables

var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

var panner = audioCtx.createPanner();
panner.panningModel = "HRTF";
panner.distanceModel = "inverse";
panner.refDistance = 1;
panner.maxDistance = 10000;
panner.rolloffFactor = 1;
panner.coneInnerAngle = 360;
panner.coneOuterAngle = 0;
panner.coneOuterGain = 0;

if (panner.orientationX) {
  panner.orientationX.setValueAtTime(1, audioCtx.currentTime);
  panner.orientationY.setValueAtTime(0, audioCtx.currentTime);
  panner.orientationZ.setValueAtTime(0, audioCtx.currentTime);
} else {
  panner.setOrientation(1, 0, 0);
}

var listener = audioCtx.listener;

if (listener.forwardX) {
  listener.forwardX.setValueAtTime(0, audioCtx.currentTime);
  listener.forwardY.setValueAtTime(0, audioCtx.currentTime);
  listener.forwardZ.setValueAtTime(-1, audioCtx.currentTime);
  listener.upX.setValueAtTime(0, audioCtx.currentTime);
  listener.upY.setValueAtTime(1, audioCtx.currentTime);
  listener.upZ.setValueAtTime(0, audioCtx.currentTime);
} else {
  listener.setOrientation(0, 0, -1, 0, 1, 0);
}

var source;

var play = document.querySelector(".play");
var stop = document.querySelector(".stop");

var boomBox = document.querySelector(".boom-box");

var listenerData = document.querySelector(".listener-data");
var pannerData = document.querySelector(".panner-data");

leftBound = -xPos + 50;
rightBound = xPos - 50;

xIterator = WIDTH / 150;

// listener will always be in the same place for this demo

if (listener.positionX) {
  listener.positionX.setValueAtTime(xPos, audioCtx.currentTime);
  listener.positionY.setValueAtTime(yPos, audioCtx.currentTime);
  listener.positionZ.setValueAtTime(300, audioCtx.currentTime);
} else {
  listener.setPosition(xPos, yPos, 300);
}

listenerData.innerHTML =
  "Listener data: X " + xPos + " Y " + yPos + " Z " + 300;

// panner will move as the boombox graphic moves around on the screen
function positionPanner() {
  if (panner.positionX) {
    panner.positionX.setValueAtTime(xPos, audioCtx.currentTime);
    panner.positionY.setValueAtTime(yPos, audioCtx.currentTime);
    panner.positionZ.setValueAtTime(zPos, audioCtx.currentTime);
  } else {
    panner.setPosition(xPos, yPos, zPos);
  }
  pannerData.innerHTML = "Panner data: X " + xPos + " Y " + yPos + " Z " + zPos;
}
```

> **Note :** In terms of working out what position values to apply to the listener and panner, to make the sound appropriate to what the visuals are doing on screen, there is quite a bit of math involved, but you will soon get used to it with a bit of experimentation.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser l'API Web Audio](/fr/docs/Web_Audio_API/Using_Web_Audio_API)
