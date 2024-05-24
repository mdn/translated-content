---
title: Navigator：getVRDisplays() 方法
slug: Web/API/Navigator/getVRDisplays
l10n:
  sourceCommit: 9a9dcd5848aaf1c4226f746539e6218c48647249
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

{{domxref("Navigator")}} 接口的 **`getVRDisplays()`** 方法会返回兑现为 {{domxref("VRDisplay")}} 对象数组的 promise，该数组代表连接到计算机的任何可用的 VR 显示器。

## 语法

```js-nolint
getVRDisplays()
```

### 参数

无。

### 返回值

兑现为 {{domxref("VRDisplay")}} 对象数组的 promise。

## 示例

有关示例代码，请参见 [`VRDisplay`](/zh-CN/docs/Web/API/VRDisplay#examples)。

## 规范

此方法属于旧版的 [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/)（已被 [WebXR 设备 API](https://immersive-web.github.io/webxr/) 取代）。其不再处于标准化轨道。

由于并非所有浏览器都已实现新的 [WebXR API](/zh-CN/docs/Web/API/WebXR_Device_API/Fundamentals)，因此建议依赖框架（例如 [A-Frame](https://aframe.io/)、[Babylon.js](https://www.babylonjs.com/) 或 [Three.js](https://threejs.org/)）或 [polyfill](https://github.com/immersive-web/webxr-polyfill) 来开发可在所有浏览器中运行的 WebXR 应用程序 [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)。

## 浏览器兼容性

{{Compat}}

## 参见

- [WebVR API 主页](/zh-CN/docs/Web/API/WebVR_API)
