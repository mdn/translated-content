---
title: AudioListener
slug: Web/API/AudioListener
---

{{ APIRef("Web Audio API") }}

`AudioListener` 接口代表了人听音乐场景时声音的位置和方向，和用于[音频空间化](/zh-CN/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)。所有{{domxref("PannerNode")}} 相对于 `AudioListener` 的空间化储存在{{domxref("BaseAudioContext.listener")}} 属性里。

特别需要注意的是一个环境中只能有一个收听者而且这不是{{domxref("AudioNode")}}.

![We see the position, up and front vectors of an AudioListener, with the up and front vectors at 90° from the other.](webaudiolistenerreduced.png)

## Properties

> [!NOTE]
> position,forward 和 up 值是以不同的语法设置和检索的。检索是通过访问来实现的，比如说 `AudioListener.positionX` ，设置相同属性时可以通过使用 `AudioListener.positionX.value` 来完成。这就是为什么他们不被标记为只读，这在规范的接口定义中就是这么说的。

- {{domxref("AudioListener.positionX")}}
  - : 在笛卡尔右手坐标系中代表一个收听者的水平坐标。默认值是 0.
- {{domxref("AudioListener.positionY")}}
  - : Represents the vertical position of the listener in a right-hand cartesian coordinate sytem. The default is 0.
- {{domxref("AudioListener.positionZ")}}
  - : Represents the longitudinal (back and forth) position of the listener in a right-hand cartesian coordinate sytem. The default is 0.
- {{domxref("AudioListener.forwardX")}}
  - : 在相同的笛卡尔坐标系中代表了收听者的面向的方向的水平坐标，就像 (`positionX`, `positionY`, 和 `positionZ`) 值一样。前方和上方值互相线性无关。默认值是 0.
- {{domxref("AudioListener.forwardY")}}
  - : Represents the vertical position of the listener's forward direction in the same cartesian coordinate sytem as the position (`positionX`, `positionY`, and `positionZ`) values. The forward and up values are linearly independent of each other. The default is 0.
- {{domxref("AudioListener.forwardZ")}}
  - : Represents the longitudinal (back and forth) position of the listener's forward direction in the same cartesian coordinate sytem as the position (`positionX`, `positionY`, and `positionZ`) values. The forward and up values are linearly independent of each other. The default is -1.
- {{domxref("AudioListener.upX")}}
  - : 代表了收听者头顶在笛卡尔坐标系的水平位置，就像 (`positionX`, `positionY`, 和`positionZ`) 值一样。前方和上方值线性无关。默认值是 0.
- {{domxref("AudioListener.upY")}}
  - : Represents the vertical position of the top of the listener's head in the same cartesian coordinate sytem as the position (`positionX`, `positionY`, and `positionZ`) values. The forward and up values are linearly independent of each other. The default is 1.
- {{domxref("AudioListener.upZ")}}
  - : Represents the longitudinal (back and forth) position of the top of the listener's head in the same cartesian coordinate sytem as the position (`positionX`, `positionY`, and `positionZ`) values. The forward and up values are linearly independent of each other. The default is 0.

## Methods

- {{domxref("AudioListener.setOrientation()")}} {{deprecated_inline}}
  - : 设置收听者的方向。
- {{domxref("AudioListener.setPosition()")}} {{deprecated_inline}}
  - : 设置收听者的位置。

> [!NOTE]
> Although these methods are deprecated they are currently the only way to set the orientation and position in Firefox, Internet Explorer and Safari.

## Deprecated features

- {{domxref("AudioListener.dopplerFactor")}} {{Deprecated_Inline}}
  - : 一个 Double 值，表示在呈现 [多普勒效应](http://en.wikipedia.org/wiki/Doppler_effect) 时要使用的音高偏移量。
- {{domxref("AudioListener.speedOfSound")}} {{Deprecated_Inline}}
  - : 一个 Double 值代表了声音的速度，以米每秒的单位计算。

In a previous version of the specification, the `dopplerFactor` and `speedOfSound` properties and the `setPosition()` method could be used to control the doppler effect applied to {{domxref("AudioBufferSourceNode")}}s connected downstream — these would be pitched up and down according to the relative speed of the {{domxref("PannerNode")}} and the {{domxref("AudioListener")}}. These features had a number of problems:

- Only {{domxref("AudioBufferSourceNode")}}s were pitched up or down, not other source nodes.
- The behavior to adopt when an {{domxref("AudioBufferSourceNode")}} was connected to multiple {{domxref("PannerNode")}}s was unclear.
- Because the velocity of the panner and the listener were not {{domxref("AudioParam")}}s, the pitch modification could not be smoothly applied, resulting in audio glitches.

Because of these issues, these properties and methods have been removed.

The `setOrientation()` and `setPosition()` methods have been replaced by setting their property value equivilents. For example `setPosition(x, y, z)` can be achieved by setting `positionX.value`, `positionY.value`, and `positionZ.value` respectively.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
