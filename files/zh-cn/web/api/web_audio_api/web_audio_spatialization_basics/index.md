---
title: Web audio 空间化基础
slug: Web/API/Web_Audio_API/Web_audio_spatialization_basics
---

正如大量的各种声音处理（或者其他）选择是不够的，WebAduioAPI 也包含了一些工具，可以让你模仿听众在声源周围移动时的声音差异，例如当你在 3D 游戏声源中移动时声音的平移。官方名词称为 **空间化**，这篇文章将会介绍如何实现这样一个系统的基础知识。

## 空间化的基础知识

在 Web Audio 中，复杂的 3D 空间化是使用 {{domxref("PannerNode")}} 创建的，用外行人的话来说就是一个使音频出现在 3D 空间中的很酷的数学。想象一下声音从你头上飞过，爬到你身后，在你面前移动。诸如此类的事情。

它对 WebXR 和游戏非常有用。在 3D 空间中，它是实现逼真的音频效果的唯一方式。像 [three.js](https://threejs.org/) 和 [A-frame](https://aframe.io/) 这样的库在处理声音时就利用了它的潜力。值得注意的是，你不必在完整的 3D 空间中移动声音 - 你可以只使用 2D 平面，因此如果你计划实现一个 2D 游戏，这依然是你要寻找的节点。

> **备注：** 还有一个设计用于处理创建简单的左右立体声平移效果的 {{domxref("StereoPannerNode")}} 。这使用起来更简单，但显然无处可用。如果你只想要一个简单的立体声平移效果，我们的 [StereoPannerNode 示例](https://mdn.github.io/webaudio-examples/stereo-panner-node/)（[请参阅源码](https://github.com/mdn/webaudio-examples/tree/master/stereo-panner-node)）应该可以为你提供所需的一切。

## 3D boombox 演示

为了演示 3D 空间化，我们在 [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) 指南中的 boombox 演示的基础上创建一个修改版本。参见 [3D spatialization demo live](https://mdn.github.io/webaudio-examples/spatialization/) （同时也可以看 [source code](https://github.com/mdn/webaudio-examples/tree/master/spatialization)）

![A simple UI with a rotated boombox and controls to move it left and right and in and out, and rotate it.](web-audio-spatialization.png)

音箱放置于房间中（由浏览器视区边缘定义），在本 demo 中我们可以通过提供的控件移动和旋转它。当我们移动音箱时，它产生的声音会相应的改变，当它在移动到房间的左侧或右侧时声音平移，或当它远离用户时变得安静，或旋转使得扬声器背离它们等。这是通过给 `PannerNode` 对象实例设置不同的与该运动有关的属性来实现模拟空间化。

> **备注：** 如果你使用耳机或者其他某种环绕声系统连接计算机，体验会更好。

## 创建 audio 收听者

让我们开始！ {{domxref("BaseAudioContext")}}（ {{domxref("AudioContext")}} 扩展自该接口）有一个 listener 属性，返回一个 {{domxref("AudioListener")}} 对象。这代表着场景收听者，通常是使用者（用户）。你可以定义他 (她) 们在空间中的位置和他 (她) 们面向的方向。他 (她) 们保持静止。 `pannerNode` 可以计算出声音相对于收听者位置的位置。

让我们创建我们的上下文和监听器，并设置收听者的位置来模拟一个看向（探索）我们房间的人：

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

我们可以使用 `positionX` 将收听者向左/右移动，使用 `positionY` 向上/下移动，或使用 `positionZ` 移出/入房间。在这里，我们将收听者设置在视口中间同时稍微位于音箱的前方。我们还可以设置收听者面对的方向。这些默认值工作良好：

```js
listener.forwardX.value = 0;
listener.forwardY.value = 0;
listener.forwardZ.value = -1;
listener.upX.value = 0;
listener.upY.value = 1;
listener.upZ.value = 0;
```

这些 forward 属性代表了收听者前进方向的 3D 坐标位置（例如他/她们面向的方向），而 up 属性表示了收听者头顶的 3D 坐标位置。这两种属性值可以很好的设定方位。

## 创建 panner 节点

让我们创建 {{domxref("PannerNode")}}节点，这有很多与之相关的属性。让我们来一一看看：

首先我们可以设置 [`panningModel`](/zh-CN/docs/Web/API/PannerNode/panningModel)。这是用于在 3D 空间中定位音频的空间化算法。我们可以将其设置为：

`equalpower` — 计算出默认和一般方式的平移。

`HRTF` — 这代表 'Head-related transfer function' ，在弄清楚声音的位置时，会考虑人脑（对声音的处理）。

非常聪明的东西，让我们使用 `HRTF` 模型！

```js
const pannerModel = "HRTF";
```

属性 [`coneInnerAngle`](/zh-CN/docs/Web/API/PannerNode/coneInnerAngle) 和 [`coneOuterAngle`](/zh-CN/docs/Web/API/PannerNode/coneOuterAngle) 指定音量发出的位置。默认情况下，两者都是 360 度。我们可以定义音箱扬声器拥有较小的锥体。内锥是总是模拟增益（音量）最大值的地方，外锥是增益开始下降的地方。

增益通过 [`coneOuterGain`](/zh-CN/docs/Web/API/PannerNode/coneOuterGain) 值来减少。让我们创建之后将会用于这些参数的常量：

```js
const innerCone = 60;
const outerCone = 90;
const outerGain = 0.3;
```

下一个参数是 [`distanceModel`](/zh-CN/docs/Web/API/PannerNode/distanceModel) — 这只能设置为 `linear`, `inverse`, 或者 `exponential`。这些是不同的算法，用于在音频源远离收听者时减小音频源的音量。
我们将使用`linear`，因为它很简单：

```js
const distanceModel = "linear";
```

我们可以设置源和收听者之间的最大距离 ([`maxDistance`](/zh-CN/docs/Web/API/PannerNode/maxDistance)) — 如果源距离此点更远，则音量将不再减小。这可能很有用，因为你可能会发现你想要模拟距离，但是音量会下降，而实际上并不是你想要的。默认情况下，它是 10,000（无单位的相对值）。我们可以像这样保持它：

```js
const maxDistance = 10000;
```

还有一个参考距离 ([`refDistance`](/zh-CN/docs/Web/API/PannerNode/refDistance))，由距离模型使用。我们也可以将其保持为默认值 `1`：

```js
const refDistance = 1;
```

然后就是 roll-off 因子 ([`rolloffFactor`](/zh-CN/docs/Web/API/PannerNode/rolloffFactor)) — 描述随着 panner 远离收听者，音量减小的速度有多快。默认值为 1；让我们使其大一些以放大我们的动作。

```
const rollOff = 10;
```

现在我们可以开始设置我们 boombox 的位置和方向。这与我们如何设置收听者很像。
这些也是我们在使用界面上的控件时要改变的参数。

```js
const positionX = posX;
const positionY = posY;
const positionZ = posZ;

const orientationX = 0.0;
const orientationY = 0.0;
const orientationZ = -1.0;
```

注意 z 方向的负值 - 这会将 boombox 设置为面向我们。正值会使声源背离我们。
让我们使用相关的构造函数来创建我们的 panner 节点，并传入我们在上面设置的所有参数：

```js
const panner = new PannerNode(audioCtx, {
  panningModel: pannerModel,
  distanceModel: distanceModel,
  positionX: positionX,
  positionY: positionY,
  positionZ: positionZ,
  orientationX: orientationX,
  orientationY: orientationY,
  orientationZ: orientationZ,
  refDistance: refDistance,
  maxDistance: maxDistance,
  rolloffFactor: rollOff,
  coneInnerAngle: innerCone,
  coneOuterAngle: outerCone,
  coneOuterGain: outerGain,
});
```

## 移动 boombox

现在我们将在我们的“房间”中四处移动 boombox。我们已经设置了一些控件来执行此操作。我们可以左右移动，上下移动，来回移动；我们也可以旋转它。声音方向来自前面的 boombox 的扬声器，因此当我们旋转它时，我们可以改变声音的方向 - 即当音箱旋转 180 度并背向我们时，使其向后投射。
我们需要为界面设置一些东西。首先，我们将获得我们想要移动的元素的引用，然后存储我们在设置 [CSS transforms](/zh-CN/docs/Web/CSS/CSS_transforms) 来实际执行移动时将要更改的值的引用。
最后，我们将设置一些边界值，以便我们的 boombox 在任何方向上都不会走得太远：

```js
const moveControls = document
  .querySelector("#move-controls")
  .querySelectorAll("button");
const boombox = document.querySelector(".boombox-body");

// the values for our css transforms
let transform = {
  xAxis: 0,
  yAxis: 0,
  zAxis: 0.8,
  rotateX: 0,
  rotateY: 0,
};

// set our bounds
const topBound = -posY;
const bottomBound = posY;
const rightBound = posX;
const leftBound = -posX;
const innerBound = 0.1;
const outerBound = 1.5;
```

让我们创建一个函数，将我们想要移动的方向作为参数，并且修改 CSS 变换及更新我们的 panner 节点的位置和方向属性值以适当地更改声音。
首先让我们看看左，右，上，下值，因为这些非常简单。我们将沿着这些轴移动 boombox，并更新合适的位置。

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

移入和移出也是类似的故事：

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

然而，我们的旋转值稍为复杂，因为我们需要在周围移动声音。我们不仅需要更新两个轴值（例如，如果围绕 x 轴旋转对象，则更新该对象的 y 和 z 坐标），还需要为此进行更多的数学运算。旋转是一个圆圈，我们需要 [`Math.sin`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sin) 和 [`Math.cos`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/cos) 来帮助我们绘制这个圆圈。
让我们设置一个旋转速率，我们将会将它转换为弧度范围的值，以便稍后在 `Math.sin` 和 `Math.cos` 中使用，当我们在旋转我们的 boombox，需要计算出新的坐标时：

```js
// set up rotation constants
const rotationRate = 60; // bigger number equals slower sound rotation

const q = Math.PI / rotationRate; //rotation increment in radians
```

我们也可以使用它来计算旋转度，这将有助于我们即将必须创建的 CSS 变换（注意我们需要用于 CSS 变换的 x 和 y 轴）：

```js
// get degrees for css
const degreesX = (q * 180) / Math.PI;
const degreesY = (q * 180) / Math.PI;
```

我们以左旋转为例看一看。我们需要更改 panner x 方向和 z 方向的坐标，以围绕 y 轴移动进行左旋转：

```js
case 'rotate-left':
  transform.rotateY -= degreesY;

  // 'left' is rotation about y-axis with negative angle increment
  z = panner.orientationZ.value*Math.cos(q) - panner.orientationX.value*Math.sin(q);
  x = panner.orientationZ.value*Math.sin(q) + panner.orientationX.value*Math.cos(q);
  y = panner.orientationY.value;

  panner.orientationX.value = x;
  panner.orientationY.value = y;
  panner.orientationZ.value = z;
break;
```

这有点令人困惑，但我们正在做的是使用 sin 和 cos 来帮助我们计算出旋转 boombox 所需的圆周运动的坐标。
我们可以为所有轴做到这一点。只需要选择正确的方向进行更新，以及我们是想要正增量还是负增量。

```js
case 'rotate-right':
  transform.rotateY += degreesY;
  // 'right' is rotation about y-axis with positive angle increment
  z = panner.orientationZ.value*Math.cos(-q) - panner.orientationX.value*Math.sin(-q);
  x = panner.orientationZ.value*Math.sin(-q) + panner.orientationX.value*Math.cos(-q);
  y = panner.orientationY.value;
  panner.orientationX.value = x;
  panner.orientationY.value = y;
  panner.orientationZ.value = z;
break;
case 'rotate-up':
  transform.rotateX += degreesX;
  // 'up' is rotation about x-axis with negative angle increment
  z = panner.orientationZ.value*Math.cos(-q) - panner.orientationY.value*Math.sin(-q);
  y = panner.orientationZ.value*Math.sin(-q) + panner.orientationY.value*Math.cos(-q);
  x = panner.orientationX.value;
  panner.orientationX.value = x;
  panner.orientationY.value = y;
  panner.orientationZ.value = z;
break;
case 'rotate-down':
  transform.rotateX -= degreesX;
  // 'down' is rotation about x-axis with positive angle increment
  z = panner.orientationZ.value*Math.cos(q) - panner.orientationY.value*Math.sin(q);
  y = panner.orientationZ.value*Math.sin(q) + panner.orientationY.value*Math.cos(q);
  x = panner.orientationX.value;
  panner.orientationX.value = x;
  panner.orientationY.value = y;
  panner.orientationZ.value = z;
break;
```

最后一件事 - 我们需要更新 CSS 并保留鼠标事件最后一步的引用。
这是最终的 `moveBoombox` 函数。

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

      // 'left' is rotation about y-axis with negative angle increment
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
      // 'right' is rotation about y-axis with positive angle increment
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
      // 'up' is rotation about x-axis with negative angle increment
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
      // 'down' is rotation about x-axis with positive angle increment
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
    "translateX(" +
    transform.xAxis +
    "px) translateY(" +
    transform.yAxis +
    "px) scale(" +
    transform.zAxis +
    ") rotateY(" +
    transform.rotateY +
    "deg) rotateX(" +
    transform.rotateX +
    "deg)";

  const move = prevMove || {};
  move.frameId = requestAnimationFrame(() => moveBoombox(direction, move));
  return move;
}
```

## 连接我们的控件

连接控制按钮相对简单 - 现在我们可以在控件上监听鼠标事件并运行此方法，并在释放鼠标时停止它：

```js
// for each of our controls, move the boombox and change the position values
moveControls.forEach(function (el) {
  let moving;
  el.addEventListener(
    "mousedown",
    function () {
      let direction = this.dataset.control;
      if (moving && moving.frameId) {
        window.cancelAnimationFrame(moving.frameId);
      }
      moving = moveBoombox(direction);
    },
    false,
  );

  window.addEventListener(
    "mouseup",
    function () {
      if (moving && moving.frameId) {
        window.cancelAnimationFrame(moving.frameId);
      }
    },
    false,
  );
});
```

## 概述

希望本文能让你深入了解 Web Audio 空间化的工作原理，以及每个{{domxref("PannerNode")}} 属性的作用（其中有很多属性）。这些值有时难以操作，根据你的使用情况，可能需要一些时间才能使它们正确。

> **备注：** 音频空间化在不同浏览器中的听起来略有不同。panner 节点在底层做了一些非常复杂的数学运算；这里有 [许多测试](https://wpt.fyi/results/webaudio/the-audio-api/the-pannernode-interface?label=stable&aligned=true)，因此你可以跟踪不同平台上此节点的内部工作状态。

再次，您可以在 [这里查看最终的演示](https://mdn.github.io/webaudio-examples/spatialization/)，同时[最终的源代码在这里](https://github.com/mdn/webaudio-examples/tree/master/spatialization)。还有一个 [Codepen 的演示](https://codepen.io/Rumyra/pen/MqayoK?editors=0100)。

如果你正在使用 3D 游戏和/或 WebXR，最好利用 3D 库来创建此类功能，而不是尝试从最初的规则完成所有这些操作。我们在本文中提出了自己的想法，让你了解它是如何工作的，但是通过利用别人在你之前所做的工作，你将节省大量时间。
