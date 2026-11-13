---
title: WebXR 应用生命周期
slug: Web/API/WebXR_Device_API/Lifecycle
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("WebXR Device API")}}

在本指南中，我们将概览创建和驱动 WebXR 应用所涉及的内容，而不会深入到代码级别的细节。这为接下来几篇 WebXR 指南文章做了准备，这些文章将涵盖[启动和关闭](/zh-CN/docs/Web/API/WebXR_Device_API/Startup_and_shutdown) WebXR 会话、[几何](/zh-CN/docs/Web/API/WebXR_Device_API/Geometry)、[模拟摄像机](/zh-CN/docs/Web/API/WebXR_Device_API/Cameras)、[空间跟踪](/zh-CN/docs/Web/API/WebXR_Device_API/Spatial_tracking)等内容。

## 生命周期概览

大多数使用 WebXR 的应用将遵循类似的总体设计模式：

1. 检查用户的设备和浏览器是否都具备呈现你想要提供的 XR 体验的能力。
   1. 确保 WebXR API 可用；如果 {{domxref("navigator.xr")}} 为 undefined，你可以假设用户的浏览器和/或设备不支持 WebXR。如果不支持，请禁用用于激活 XR 功能的任何用户界面，并中止任何进入 XR 模式的尝试。
   2. 调用 {{DOMxRef("XRSystem/isSessionSupported","navigator.xr.isSessionSupported()")}}，指定你想要提供的 WebXR 体验模式：`inline`、`immersive-vr` 或 `immersive-ar`，以确定你希望提供的会话类型是否可用。
   3. 如果你想要使用的会话类型可用，则向用户提供适当的界面，以允许他们激活该会话。

2. 当用户通过与上述启用的用户界面交互来请求激活 WebXR 功能时，使用所需的模式请求一个 {{DOMxRef("XRSession")}}。你需要通过调用 {{DOMxRef("XRSystem/requestSession","navigator.xr.requestSession()")}}，传入表示你想要启用的模式的字符串（`inline`、`immersive-vr` 或 `immersive-ar`）以实现这一操作。
3. 如果 `requestSession()` 返回的 promise 兑现成功，则可使用新的 {{domxref("XRSession")}} 在 WebXR 体验期间管理 WebXR 会话。这将涉及管理输入、动画和渲染。
   1. 调用 {{domxref("XRSession")}} 的 {{DOMxRef("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} 方法为 XR 设备调度第一帧渲染。
   2. 如果你的场景很复杂，你应该考虑创建一个 {{domxref("Worker")}}（或者使用之前为此目的创建的一个）来执行渲染每一帧所需的计算，以降低渲染过程出现明显卡顿的可能性。
   3. 每个 `requestAnimationFrame()` 回调应使用提供的关于位于 3D 世界中的对象的信息，使用 WebGL 渲染帧。
   4. 每次调用回调时，它应再次调用 {{DOMxRef("XRSession.requestAnimationFrame", "requestAnimationFrame()")}}，以便让浏览器知道当下一帧需要渲染时，需要再次运行该回调。

4. 当时机到来时（例如用户退出你的应用或导航离开你的网站），结束 XR 会话；否则，继续循环，直到用户选择退出 XR 模式。
   1. 要自行结束 XR 会话，请调用 {{DOMxRef("XRSession.end", "XRSession.end()")}}。
   2. 包含一个 {{domxref("XRSession")}} 事件 {{domxref("XRSession.end_event", "end")}} 的处理器，以便在会话结束时收到通知，无论该会话的终止是由你的代码、用户还是浏览器发起的。
