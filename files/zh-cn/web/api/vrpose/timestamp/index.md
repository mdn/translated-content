---
title: VRPose.timestamp
slug: Web/API/VRPose/timeStamp
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

**`timestamp`** 是 {{domxref("VRPose")}} 接口的只读属性，返回为系统此时的时间戳 — 一个单调递增的数值，代表这个软件启动到现在的时间。

这个属性对于确定位置数据是否已更新和什么次序更新了很有用。

## Syntax

```js
var myTimeStamp = VRPose.timestamp;
```

### Value

{{domxref("DOMHighResTimeStamp")}} 代表时间戳，以秒为单位。

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

- [WebVR API homepage](/zh-CN/docs/Web/API/WebVR_API).
- [MozVr.com](http://mozvr.com/) — 来自于 Mozilla 的 VR 团队的模板、下载以及其他其他资源。
