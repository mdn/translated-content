---
title: Navigator：activeVRDisplays 属性
slug: Web/API/Navigator/activeVRDisplays
l10n:
  sourceCommit: ccbc5d4100e0a5de844e060b025883ef1611d7b8
---

{{APIRef("WebVR API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

{{domxref("Navigator")}} 接口的只读属性 **`activeVRDisplays`** 返回一个包含所有当前正在呈现（{{domxref("VRDisplay.ispresenting")}} 为 `true`）的 {{domxref("VRDisplay")}} 对象的数组。

> [!NOTE]
> 此属性是旧版 [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) 的一部分。它已被 [WebXR 设备 API](https://immersive-web.github.io/webxr/) 取代。

## 值

{{domxref("VRDisplay")}} 对象的数组。

## 示例

```js
function showActive() {
  const displays = navigator.activeVRDisplays;
  for (const display of displays) {
    console.log(`显示屏 ${display.displayId} 已激活。`);
  }
}
```

## 规范

此属性是旧版 [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) 的一部分，已被 [WebXR 设备 API](https://immersive-web.github.io/webxr/) 取代。其不再处于标准化轨道。

由于并非所有浏览器都已实现新的 [WebXR API](/zh-CN/docs/Web/API/WebXR_Device_API/Fundamentals)，因此建议依赖框架（例如 [A-Frame](https://aframe.io/)、[Babylon.js](https://www.babylonjs.com/) 或 [Three.js](https://threejs.org/)）或 [polyfill](https://github.com/immersive-web/webxr-polyfill) 来开发可在所有浏览器中运行的 WebXR 应用程序 [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)。

## 浏览器兼容性

{{Compat}}

## 参见

- [WebVR API](/zh-CN/docs/Web/API/WebVR_API)
