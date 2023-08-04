---
title: Navigator.activeVRDisplays
slug: Web/API/Navigator/activeVRDisplays
---

{{securecontext_header}}{{DefaultAPISidebar("WebVR API")}}{{deprecated_header}}

**`activeVRDisplays`** 是 {{domxref("Navigator")}} 接口返回的数组中每个 {{domxref("VRDisplay")}} 对象的只读属性（{{domxref("VRDisplay.ispresenting")}} 为 `true`）。

> **备注：** 这个属性是旧的 [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) 的一部分，已经被 [WebXR Device API](https://immersive-web.github.io/webxr/) 取代。

## 返回值

{{domxref("VRDisplay")}} 对象数组。

## 例子

```js
function showActive() {
  const displays = navigator.activeVRDisplays;
  for (const display of displays) {
    console.log(`Display ${display.displayId} is active.`);
  }
}
```

## 规范

此项属性是旧的 [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) 的一部分，已经被 [WebXR Device API](https://immersive-web.github.io/webxr/) 取代。它不再有望成为标准。

在所有浏览器实现新的 [WebXR API](/zh-CN/docs/Web/API/WebXR_Device_API/Fundamentals) 之前，推荐使用一些框架，如 [A-Frame](https://aframe.io/)、[Babylon.js](https://www.babylonjs.com/)、[Three.js](https://threejs.org/) 或使用 [polyfill](https://github.com/immersive-web/webxr-polyfill)，来开发可以在任何浏览器中运行的 WebXR 应用程序 [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)。

## 浏览器兼容性

{{Compat}}

## 相关链接

- [WebVR API 主页](/zh-CN/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/>——示例、下载和其他来自于 Mozilla VR 团队的资源。
