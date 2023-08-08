---
title: AudioContext.createPanner()
slug: Web/API/BaseAudioContext/createPanner
---

{{ APIRef("Web Audio API") }}

Метод `createPanner()` интерфейса {{ domxref("AudioContext") }} применяется для создания нового {{domxref("PannerNode")}}, который используется для размещения аудиопотока в виртуальном 3D пространстве.

The panner node is spatialized in relation to the AudioContext's {{domxref("AudioListener") }} (defined by the {{domxref("AudioContext.listener") }} attribute), which represents the position and orientation of the person listening to the audio.

## Синтаксис

```js
var audioCtx = new AudioContext();
var panner = audioCtx.createPanner();
```

### Возврат

A {{domxref("PannerNode")}}.

## Пример

Ниже можно увидеть пример использования {{domxref("AudioListener")}}, {{domxref("PannerNode")}} и метода `createPanner()` для управления пространством объёмного звука. Обычно определяется положение в трёхмерном пространстве, изначально занимаемое обработчиком (listener) и источником звука (panner), а затем, при использовании приложения, обновляется позиция одного из них или обоих. Например, вы можете перемещать персонажа внутри игрового мира, и желательно чтобы передача звука изменялась реалистично, по мере приближения или отдаления персонажа относительно источника звука, вроде стереопроигрывателя. В этом примере можно видеть, что все это управляется функциями `moveRight()`, `moveLeft()`, и т.п., которые устанавливают новые значения для положения паннера через функцию `PositionPanner()`.

Чтобы увидеть полную реализацию ознакомьтесь с нашим [примером panner-node](https://mdn.github.io/webaudio-examples/panner-node/) ([просмотрите весь список примеров](https://mdn.github.io/webaudio-examples/)) — эта демонстрация перенесёт вас в 2.5D "Room of metal" (2,5-мерную "металлическую комнату"), где можно проиграть трек на бумбоксе и затем походить вокруг него и посмотреть как изменяется звук!

Note how we have used some feature detection to either give the browser the newer property values (like {{domxref("AudioListener.forwardX")}}) for setting position, etc. if it supports those, or older methods (like {{domxref("AudioListener.setOrientation()")}}) if it still supports those but not the new properties.

```js
// set up listener and panner position information
// установка сведений обработчика и положении panner'а
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var xPos = Math.floor(WIDTH / 2);
var yPos = Math.floor(HEIGHT / 2);
var zPos = 295;

// define other variables (определяем другие переменные)

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
  panner.orientationX.value = 1;
  panner.orientationY.value = 0;
  panner.orientationZ.value = 0;
} else {
  panner.setOrientation(1, 0, 0);
}

var listener = audioCtx.listener;

if (listener.forwardX) {
  listener.forwardX.value = 0;
  listener.forwardY.value = 0;
  listener.forwardZ.value = -1;
  listener.upX.value = 0;
  listener.upY.value = 1;
  listener.upZ.value = 0;
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
// в этом демо обработчик всегда находится на одном и том же месте

if (listener.positionX) {
  listener.positionX.value = xPos;
  listener.positionY.value = yPos;
  listener.positionZ.value = 300;
} else {
  listener.setPosition(xPos, yPos, 300);
}

listenerData.innerHTML =
  "Listener data: X " + xPos + " Y " + yPos + " Z " + 300;

// panner will move as the boombox graphic moves around on the screen
// паннер будет перемещаться по экрану за перемещением бумбокса
function positionPanner() {
  if (panner.positionX) {
    panner.positionX.value = xPos;
    panner.positionY.value = yPos;
    panner.positionZ.value = zPos;
  } else {
    panner.setPosition(xPos, yPos, zPos);
  }
  pannerData.innerHTML = "Panner data: X " + xPos + " Y " + yPos + " Z " + zPos;
}
```

> **Примечание:** In terms of working out what position values to apply to the listener and panner, to make the sound appropriate to what the visuals are doing on screen, there is quite a bit of fiddly math involved, but you will soon get used to it with a bit of experimentation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/ru/docs/Web_Audio_API/Using_Web_Audio_API)
