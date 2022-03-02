---
title: Web audio spatialization basics
slug: Web/API/Web_Audio_API/Web_audio_spatialization_basics
translation_of: Web/API/Web_Audio_API/Web_audio_spatialization_basics
---
En plus de sa grande variété de fonctionnalités et d'options, la Web Audio API permet aussi d'émuler la différence dans l'écoute d'un son lorsqu'un auditeur se déplace par rapport à une source, par exemple un panoramique lorsqu'il se déplace de gauche à droite de la source. On parle alors de spatialisation. Cet article expose les notions de base pour implémenter ce type de système.

Le cas d'utilisation le plus simple est la simulation des altérations d'un son de façon réaliste pour imaginer comment une source se comportera pour un personnage qui se déplace dans un environnement 3D.

## Concepts de base

Créer une spatialisation audio comporte deux principaux aspects :

1.  L'objet {{ domxref("AudioListener") }} représente la position dans l'espace 3D d'une personne qui écoute la source audio; on y accède avec la propriété {{ domxref("AudioContext.listener") }}. On peut paramétrer la position et l'orientation de l'auditeur, entre autres.
2.  L'objet {{ domxref("PannerNode") }} représente la position dans l'espace 3D d'une source audio; on le crée avec la méthode {{ domxref("AudioContext.createPanner()") }}. On peut paramétrer un certain nombre d'options comme la position, l'orientation, la vitesse, et l'angle s'un cône qui indique dans quelle direction le son peut être entendu (s'il n'est pas omnidirectionnel).

Dans cet article nous allons nous concentrer sur la position de l'auditeur et du panoramique, tous deux paramétrés à l'aide de la méthode `setPosition()`. Celle-ci accepte trois valeurs qui correspondent à X, Y, et Z dans un système de coordonnées cartésien.

> **Note :** Trouver les bonnes valeurs pour que le cas d'utilisation fonctionne bien et semble réaliste n'est pas toujours évident et peur prendre du temps, et il faut souvent continuer à modifier les valeurs par la suite. Nous discuterons ceci plus en détail en parcourant le code qui suit.

Les autres options  disponibles, que nous ne traiterons pas ici, sont :

- `setOrientation()`: disponible à la fois pour l'auditeur et le panoramique for both the listener and panner, cette méthode paramètre l'orientation. Elle prend six valeurs: les trois premières représentent un vecteur frontal dans l'espace 3D  (imaginez une personne et la direction dans laquelle pointe son nez) and les trois autre un vecteur de direction verticale  dans l'espace 3D space (imaginez la même personne et la direction vers laquelle pointe le haut de sa tête)
- `setVelocity()`: disponible uniquement pour le panoramique; permet de paramétrer la vitesse à laquelle une source audio se déplace, à l'aide d'un vecteur de vitesse dans l'espace 3D (valeurs X, Y, et Z). When set, the browser will apply a doppler shift effect.
- `coneInnerAngle`, `coneOuterAngle`, and `coneOuterGain`: Available for the panner only, these allow you to set an angle inside/outside of which the volume will be reduced by the specified gain value. This is done to specify directional audio sources, but the default is 360/360/0, respectively, meaning that by default you get an omnidirectional sound source.

## A simple demo: Room of metal

In our demo, you can move left and right past a 2.5D stereo that can be made to play a groovy tune, and you can also move towards the stereo. As you move left and right, the tune will pan to emulate how the tune will sound as you change your position proportional to the sound source. When you zoom in and out, the sound will get louder and quieter to suit.

> **Note :** You can see this example [running live](https://mdn.github.io/webaudio-examples/panner-node/), and [view the source code](https://github.com/mdn/panner-node).

Let's walk through the code and see how this was actually done.

### Defining basic variables

First we define a new audio context, panner, listener, and source:

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

var panner = audioCtx.createPanner();
var listener = audioCtx.listener;
var source;
```

Next we grab the objects on the page we are using for our demo. First the `play` and `stop` buttons to control the audio, then the `boomBox`, which is just the graphic of the stereo that we are moving around. After that, we grab a reference to two paragraphs that are used to output the position of the `listener` and `panner`, for debugging purposes.

```js
var play = document.querySelector('.play');
var stop = document.querySelector('.stop');

var boomBox = document.querySelector('.boom-box');

var listenerData = document.querySelector('.listener-data');
var pannerData = document.querySelector('.panner-data');
```

### Working out listener and panner positions

Next comes a little bit of slightly fiddly maths. We want to make the `boomBox`, `listener`, and `panner` appear in the center of the screen initially, so we work out the width and height of the viewport, and divide both by two to get our X and Y values for those things. The `zPos` is only used on the panner, and is updated as the zoom controls are used (see later on); the initial value of 295 was decided on fairly arbitrarily — it sounded good. As long as you set the position of the panner appropriately in relation to the listener position, you will be ok.

Next for this section, we set a `leftBound` and `rightBound`, which is the furthest we want our stereo graph to travel left and right. For the layout, we are using [Flexbox](/en-US/docs/Web/Guide/CSS/Flexible_boxes) to initially place the `boomBox` right in the center of the viewport, after which we then use iterative transforms and {{domxref("window.requestAnimationFrame()")}} to apply the `boomBox` movement. Therefore the "0" position is in the center of the viewport so the rightmost position is that position plus half the viewport, but minus 50 (pixels) so the `boomBox` can't shoot all the way off the right of the screen, and the leftmost position is that position minus half the viewport, but plus 50 (pixels), so the `boomBox` can't shoot all the way off the left of the screen.

The last part of this code is the `xIterator` — we set this to a 150th of the screen width, and then move the `boomBox` left and right by this amount when the left and right controls are pressed. We use this rather than a constant so that the app is a little more responsive.

```js
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var xPos = WIDTH/2;
var yPos = HEIGHT/2;
var zPos = 295;

leftBound = (-xPos) + 50;
rightBound = xPos - 50;

xIterator = WIDTH/150;
```

Next we set the position of the `listener` and output the coordinates to the `listenerData` paragraph. It is always going to be in the same place, in a good position relative to the panner.

```js
listener.setPosition(xPos,yPos,300);
listenerData.innerHTML = 'Listener data: X ' + xPos + ' Y ' + yPos + ' Z ' + 300;
```

In the `positionPanner()` function, we set the position of the panner, and output the coordinates to the `pannerData` paragraph. This function is called with each animation frame as the `boomBox` is moved, so the panner position updates accordingly:

```js
function positionPanner() {
  panner.setPosition(xPos,yPos,zPos);
  pannerData.innerHTML = 'Panner data: X ' + xPos + ' Y ' + yPos + ' Z ' + zPos;
}
```

### Loading and playing our music

Next we use XHR to load an audio track, and `decodeAudioData()` to decode it and stick it in a buffer. Then we put the buffer into an {{domxref("AudioBufferSourceNode") }}:

```js
function getData() {
  source = audioCtx.createBufferSource();
  request = new XMLHttpRequest();

  request.open('GET', 'viper.ogg', true);

  request.responseType = 'arraybuffer';


  request.onload = function() {
    var audioData = request.response;

    audioCtx.decodeAudioData(audioData, function(buffer) {
        myBuffer = buffer;
        source.buffer = myBuffer;

        source.connect(panner);
        panner.connect(audioCtx.destination);
        positionPanner();
        source.loop = true;
      },

      function(e){"Error with decoding audio data" + e.err});

  }

  request.send();
}
```

The next stage is to wire up the buttons to stop and play the audio. The pulse wrapper is an extra wrapper {{ htmlelement("div") }} wrapped around the `boomBox`. We apply the pulsating (`scaleY`) animation to this element when the play button is clicked, not the `boomBox` itself, because the `boomBox` already has animations applied to it throughout the course of the app's running.

```js
var pulseWrapper = document.querySelector('.pulse-wrapper');

play.onclick = function() {
  getData();
  source.start(0);
  play.setAttribute('disabled', 'disabled');
  pulseWrapper.classList.add('pulsate');
}

stop.onclick = function() {
  source.stop(0);
  play.removeAttribute('disabled');
  pulseWrapper.classList.remove('pulsate');
}
```

### Moving the boom box and the panner

The next section of code grabs references to the left, right, zoom in, and zoom out buttons, and defines initial X, Y, and scale amounts for the `boomBox` to be positioned by when the transforms first start to be applied.

```js
var leftButton = document.querySelector('.left');
var rightButton = document.querySelector('.right');
var zoomInButton = document.querySelector('.zoom-in');
var zoomOutButton = document.querySelector('.zoom-out');

var boomX = 0;
var boomY = 0;
var boomZoom = 0.25;
```

Now we get to the four functions that control the left, right, zoom in, and zoom out functionality: `moveRight()`, `moveLeft()`, `zoomIn()`, and `zoomOut()`. Each is a little different, but works in a similar way:

1.  The `boomX` or `boomZoom` variables are updated in order to change the `boomBox`'s position on the screen.
2.  The `xPos` or `zPos` variables are updated in order to change the {{domxref("PannerNode") }}'s position in 3D space. The changes are quite small, but these are the values we found to work.
3.  A check is done to see if the upper bounds of movement have been reached (a `boomX` equal or less than `leftBound` or greater than `rightBound`, or a `boomZoom` greater than 4 or equal or less than 0.25.) If so, the values are updated to force the `boomBox` to stay in certain constraints, and to force the `xPos` and `zPos` variables to also stay within certain constrants. These are, respectively, 5 greater or less than `WIDTH/2`, and a `zPos` between 295 and 299.9. These are the values we found produced a relatively realistic sounding panning and volume adjustment as the `boomBox` was moved around.
4.  `boomBox` is transformed (translated and scaled) by the new values of `boomX`, `boomY`, and `boomZoom` to move it around the screen.
5.  The `positionPanner()` function is run to update the position of the panner.
6.  A {{domxref("window.requestAnimationFrame") }} instance is called to keep running the function for as long as the mouse button is pressed down.
7.  The `requestAnimationFrame` ID is returned out of the function so that it can be cancelled when the mouse button is released.

```js
function moveRight() {
  boomX += -xIterator;
  xPos += -0.066;

  if(boomX <= leftBound) {
    boomX = leftBound;
    xPos = (WIDTH/2) - 5;
  }

  boomBox.style.webkitTransform = "translate(" + boomX + "px , " + boomY + "px) scale(" + boomZoom + ")";
  boomBox.style.transform = "translate(" + boomX + "px , " + boomY + "px) scale(" + boomZoom + ")";
  positionPanner();
  rightLoop = requestAnimationFrame(moveRight);
  return rightLoop;
}

function moveLeft() {
  boomX += xIterator;
  xPos += 0.066;

  if(boomX > rightBound) {
    boomX = rightBound;
    xPos = (WIDTH/2) + 5;
  }

  positionPanner();
  boomBox.style.webkitTransform = "translate(" + boomX + "px , " + boomY + "px) scale(" + boomZoom + ")";
  boomBox.style.transform = "translate(" + boomX + "px , " + boomY + "px) scale(" + boomZoom + ")";
  leftLoop = requestAnimationFrame(moveLeft);
  return leftLoop;
}

function zoomIn() {
  boomZoom += 0.05;
  zPos += 0.066;

  if(boomZoom > 4) {
    boomZoom = 4;
    zPos = 299.9;
  }

  positionPanner();
  boomBox.style.webkitTransform = "translate(" + boomX + "px , " + boomY + "px) scale(" + boomZoom + ")";
  boomBox.style.transform = "translate(" + boomX + "px , " + boomY + "px) scale(" + boomZoom + ")";
  zoomInLoop = requestAnimationFrame(zoomIn);
  return zoomInLoop;
}

function zoomOut() {
  boomZoom += -0.05;
  zPos += -0.066;

  if(boomZoom <= 0.25) {
    boomZoom = 0.25;
    zPos = 295;
  }

  positionPanner();
  boomBox.style.webkitTransform = "translate(" + boomX + "px , " + boomY + "px) scale(" + boomZoom + ")";
  boomBox.style.transform = "translate(" + boomX + "px , " + boomY + "px) scale(" + boomZoom + ")";
  zoomOutLoop = requestAnimationFrame(zoomOut);
  return zoomOutLoop;
}
```

In the final block of code, we simply wire up event handlers to control the movement when the buttons are pressed. For each button, the relevant function is invoked `onmousedown`; then `onmouseup`, {{domxref("window.cancelAnimationFrame") }} is called along with the returned `requestAnimationFrame()` ID to stop the animation happening.

```js
leftButton.onmousedown = moveLeft;
leftButton.onmouseup = function () {
  window.cancelAnimationFrame(leftLoop);
}

rightButton.onmousedown = moveRight;
rightButton.onmouseup = function () {
  window.cancelAnimationFrame(rightLoop);
}

zoomInButton.onmousedown = zoomIn;
zoomInButton.onmouseup = function () {
  window.cancelAnimationFrame(zoomInLoop);
}

zoomOutButton.onmousedown = zoomOut;
zoomOutButton.onmouseup = function () {
  window.cancelAnimationFrame(zoomOutLoop);
}
```

As you can see, the actual panner code is pretty simple — specify the positions, and the browser takes care of the rest. It is working out the surrounding code, and the values to use for positioning, which takes a bit more time.

> **Note :** You are probably thinking "why didn't you move the listener and keep the panner still instead: surely that is a bit more obvious?" Well, perhaps, but we felt that since the panner has more methods and properties available to it, moving it would allow more control in the long term.
