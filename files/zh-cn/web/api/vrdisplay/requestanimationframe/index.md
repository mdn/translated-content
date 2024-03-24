---
title: VRDisplay.requestAnimationFrame()
slug: Web/API/VRDisplay/requestAnimationFrame
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

The **`requestAnimationFrame()`** method of the {{domxref("VRDisplay")}} interface is a special implementation of {{domxref("Window.requestAnimationFrame")}} containing a callback function that will be called every time a new frame of the `VRDisplay` presentation is rendered:

- When the `VRDisplay` is not presenting a scene, this is functionally equivalent to {{domxref("Window.requestAnimationFrame")}}.
- When the VRDisplay is presenting, the callback is called at the native refresh rate of the `VRDisplay`.

## Syntax

```js
var handle = vrDisplayInstance.requestAnimationFrame(callback);
```

### Parameters

- callback
  - : A callback function that will be called every time a new frame of the `VRDisplay` presentation is rendered.

### Return value

A long representing the handle of the `requestAnimationFrame()` call. This can then be passed to a {{domxref("VRDisplay.cancelAnimationFrame()")}} call to unregister the callback.

## Examples

```plain
TBD.
```

## Specifications

该 API 在旧的 [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/)（已被 [WebXR Device API](https://immersive-web.github.io/webxr/) 取代）中定义。它不再有望成为标准。

在所有浏览器都实现新的 [WebXR API](/zh-CN/docs/Web/API/WebXR_Device_API/Fundamentals) 之前，建议使用框架（如：[A-Frame](https://aframe.io/)、[Babylon.js](https://www.babylonjs.com/) 或 [Three.js](https://threejs.org/)）或 [polyfill](https://github.com/immersive-web/webxr-polyfill) 来开发适用于所有浏览器的 WebXR 应用程序。[\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)

## Browser compatibility

{{Compat}}

## See also

- [WebVR API](/zh-CN/docs/Web/API/WebVR_API)
