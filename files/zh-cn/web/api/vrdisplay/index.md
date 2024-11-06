---
title: VRDisplay
slug: Web/API/VRDisplay
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

[WebVR API](/zh-CN/docs/Web/API/WebVR_API) 中的 **`VRDisplay`** 代表任何支持此 API 的 VR 设备。它包括了设备 ID、描述信息等诸如此类的通用信息，以及用于开始呈现 VR 场景、检索眼睛参数和显示能力以及其他重要的功能和方法。

可以通过调用 {{domxref("Navigator.getVRDisplays()")}} 方法得到所有连接的 VR 设备数组。

## 属性

- {{domxref("VRDisplay.capabilities")}} {{readonlyInline}}
  - : 返回一个 {{domxref("VRDisplayCapabilities")}} 对象，用于指示 VRDisplay 的各种功能。
- {{domxref("VRDisplay.depthFar")}}
  - : 获取或设置[眼睛可视锥](https://en.wikipedia.org/wiki/Viewing_frustum)的最远深度。
- {{domxref("VRDisplay.depthNear")}}
  - : 获取或设置[眼睛可视锥](https://en.wikipedia.org/wiki/Viewing_frustum)的最近深度。
- {{domxref("VRDisplay.displayId")}} {{readonlyInline}}
  - : 返回此 VRDisplay 的标识符，它也用作与 [Gamepad API](/zh-CN/docs/Web/API/Gamepad_API) 的关联（详见 {{domxref("Gamepad.displayId")}}）。
- {{domxref("VRDisplay.displayName")}} {{readonlyInline}}
  - : 返回一个不反人类的名称来标识此 `VRDisplay`。
- {{domxref("VRDisplay.isConnected")}} {{readonlyInline}}
  - : 返回一个 {{domxref("Boolean")}} 值，指示 `VRDisplay` 是否连接到计算机。
- {{domxref("VRDisplay.isPresenting")}} {{readonlyInline}}
  - : 返回一个 {{domxref("Boolean")}} 值，指示 `VRDisplay` 当前是否由内容被呈现。
- {{domxref("VRDisplay.stageParameters")}} {{readonlyInline}}
  - : 如果 VR 设备支持房间规模测验，则返回一个包含房间尺寸参数的 {{domxref("VRStageParameters")}} 对象。

## 方法

- {{domxref("VRDisplay.getEyeParameters()")}}
  - : 返回指定一侧眼睛参数的 {{domxref("VREyeParameters")}} 对象。
- {{domxref("VRDisplay.getLayers()")}}
  - : 返回 VRDisplay 当前显示的图层。
- {{domxref("VRDisplay.getPose()")}}
  - : Returns a {{domxref("VRPose")}} object defining the future predicted pose of the `VRDisplay` as it will be when the current frame is actually presented.
- {{domxref("VRDisplay.getImmediatePose()")}}
  - : Returns a {{domxref("VRPose")}} object defining the current pose of the `VRDisplay`, with no prediction applied.
- {{domxref("VRDisplay.resetPose()")}}
  - : Resets the pose for this `VRDisplay`, treating its current {{domxref("VRPose.position")}} and {{domxref("VRPose.orientation")}} as the "origin/zero" values.
- {{domxref("VRDisplay.cancelAnimationFrame()")}}
  - : A special implementation of {{domxref("Window.cancelAnimationFrame")}} that allows callbacks registered with {{domxref("VRDisplay.requestAnimationFrame()")}} to be unregistered.
- {{domxref("VRDisplay.requestAnimationFrame()")}}
  - : A special implementation of {{domxref("Window.requestAnimationFrame")}} containing a callback function that will be called every time a new frame of the `VRDisplay` presentation is rendered.
- {{domxref("VRDisplay.requestPresent()")}}
  - : Starts the `VRDisplay` presenting a scene.
- {{domxref("VRDisplay.exitPresent()")}}
  - : Stops the `VRDisplay` presenting a scene.
- {{domxref("VRDisplay.submitFrame()")}}
  - : Captures the current state of the {{domxref("VRLayer")}} currently being presented and displays it on the `VRDisplay`.

## 示例

```plain
TBD.
```

## 规范

该 API 在旧的 [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/)（已被 [WebXR Device API](https://immersive-web.github.io/webxr/) 取代）中定义。它不再有望成为标准。

在所有浏览器都实现新的 [WebXR API](/zh-CN/docs/Web/API/WebXR_Device_API/Fundamentals) 之前，建议使用框架（如：[A-Frame](https://aframe.io/)、[Babylon.js](https://www.babylonjs.com/) 或 [Three.js](https://threejs.org/)）或 [polyfill](https://github.com/immersive-web/webxr-polyfill) 来开发适用于所有浏览器的 WebXR 应用程序。[\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)

## 浏览器兼容性

{{Compat}}

## 参见

- [WebVR API](/zh-CN/docs/Web/API/WebVR_API)
