---
title: VRPose
slug: Web/API/VRPose
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

The **`VRPose`** interface of the [WebVR API](/zh-CN/docs/Web/API/WebVR_API) represents the state of a VR sensor at a given timestamp (which includes orientation, position, velocity, and acceleration information.)

[WebVR API](/zh-CN/docs/Web/API/WebVR_API) 中的 **`VRPose`** 接口表示在一个给定的时间戳中，一个 VR 传感器的状态（包括了方向、位置、速度和加速度信息）。

This interface is accessible through the {{domxref("VRDisplay.getPose()")}} and {{domxref("VRDisplay.getImmediatePose()")}} methods.

这个接口能通过 {{domxref("VRDisplay.getPose()")}} 和 {{domxref("VRDisplay.getImmediatePose()")}} 方法访问

## Properties

- {{domxref("VRPose.timeStamp")}} {{readonlyInline}}
  - : 返回当前系统的时间戳。此单调递增的值可以有助于确定位置数据是否有更新，以及更新的顺序。
- {{domxref("VRPose.position")}} {{readonlyInline}}
  - : 以三维向量的形式返回当前时间戳 {{domxref("VRPose.timestamp")}} 时 {{domxref("VRDisplay")}} 的位置信息。
- {{domxref("VRPose.linearVelocity")}} {{readonlyInline}}
  - : 返回当前时间戳 {{domxref("VRPose.timestamp")}} 时 {{domxref("VRDisplay")}} 的线速度，单位为米/秒。
- {{domxref("VRPose.linearAcceleration")}} {{readonlyInline}}
  - : 返回当前时间戳 {{domxref("VRPose.timestamp")}} 时 {{domxref("VRDisplay")}} 的线加速度，单位为米/平方秒。
- {{domxref("VRPose.orientation")}} {{readonlyInline}}
  - : 以四元数的形式返回当前时间戳 {{domxref("VRPose.timestamp")}} 时传感器的方向，
- {{domxref("VRPose.angularVelocity")}} {{readonlyInline}}
  - : 返回当前时间戳 {{domxref("VRPose.timestamp")}} 时 {{domxref("VRDisplay")}} 的角速度，单位为弧度/秒。
- {{domxref("VRPose.angularAcceleration")}} {{readonlyInline}}
  - : 返回当前时间戳 {{domxref("VRPose.timestamp")}} 时 {{domxref("VRDisplay")}} 的角加速度，单位为弧度/平方秒。

## 示例

参见 [`VRDisplay.getFrameData()`](/zh-CN/docs/Web/API/VRDisplay/getFrameData#示例) 以获取示例代码。

## 规范

该 API 在旧的 [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/)（已被 [WebXR Device API](https://immersive-web.github.io/webxr/) 取代）中定义。它不再有望成为标准。

在所有浏览器都实现新的 [WebXR API](/zh-CN/docs/Web/API/WebXR_Device_API/Fundamentals) 之前，建议使用框架（如：[A-Frame](https://aframe.io/)、[Babylon.js](https://www.babylonjs.com/) 或 [Three.js](https://threejs.org/)）或 [polyfill](https://github.com/immersive-web/webxr-polyfill) 来开发适用于所有浏览器的 WebXR 应用程序。[\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)

## 浏览器兼容性

{{Compat}}

## 参见

- [WebVR API](/zh-CN/docs/Web/API/WebVR_API)
