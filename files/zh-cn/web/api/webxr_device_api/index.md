---
title: WebXR 设备 接口参考
slug: Web/API/WebXR_Device_API
---

**WebXR** 是一组支持将渲染 3D 场景用来呈现虚拟世界（虚拟现实，也称作 VR）或将图形图像添加到现实世界（增强现实，也称作 AR）的标准。 **WebXR 设备 API** 实现了 WebXR 功能集的核心，管理输出设备的选择，以适当的帧速率将 3D 场景呈现给所选设备，并管理使用输入控制器创建的运动矢量。

WebXR-兼容性设备包括沉浸式 3D 运动和定位跟踪耳机，通过框架覆盖在真实世界场景之上的眼镜，以及手持移动电话，它们通过用摄像机捕捉世界来增强现实，并通过计算机生成的图像增强场景。

为了完成这些事情，WebXR 设备 API 提供了以下关键功能：

- 查找兼容的 VR 或 AR 输出设备
- 以适当的帧率将 3D 场景渲染到设备
- （可选）将输出镜像到 2D 显示器
- 创建代表输入控件运动的向量

在最基本的层面上，通过计算应用于场景的透视图，以从每个用户的视角呈现场景，从而在 3D 中呈现场景，考虑到眼睛之间的常规距离，然后渲染场景两次，每只眼睛一次。然后将生成的图像 (场景在一个帧上呈现两次，每只眼睛一半) 显示给用户。

由于 [WebGL](/zh-CN/docs/Web/API/WebGL_API) 用于将 3D 世界渲染到 WebXR 会话中，因此您首先应该熟悉 WebGL 的一般用法以及 3D 图形的基本知识。您很可能不会直接使用 WebGL API，而是利用在 WebGL 之上构建的框架或库之一来使其使用更加方便。其中最流行的是[three.js](https://threejs.org/)。

使用库而不是直接使用 WebGL API 的一个特殊好处是，库取向于实现虚拟相机函数性的接口。OpenGL（WebGL 的扩展）不直接提供照相机视图，使用库模拟一个的话可以使您的工作变得非常非常容易，特别是在构建允许在虚拟世界中自由移动的代码时。

## 重要的健康和安全提示

因为本质上来说，创建虚拟 3D 世界的整个过程是一个技巧，它利用了我们对眼睛如何收集光以及大脑如何解释所收集的数据的理解，因此务必要牢记，软件设计师开发人员有责任比平时更加 小心，以确保结果正确。

缺陷，未对准或变形会混淆眼睛和大脑，导致眼睛疼痛或头痛乃至眩晕，头晕或潜在的严重恶心。考虑到 VR 护目镜的全部特性，需要特别注意，开发者对可能引起癫痫发作的任何事物都要保持警惕；如果它引起困扰，则用户可能无法快速将视线从您呈现的图像上移开。

如果您有任何可能对任何用户构成风险的内容，则应提供警告消息。有备无患！

## WebXR 设备 API 的概念和用法

### WebXR: AR and VR

举例 WebXR 硬件装备

![Sketch of a person in a chair with wearing goggles labelled "Head mounted display (HMD)" facing a monitor with a webcam labeled "Position sensor"](hw-setup.png)

较早的 [WebVR API](/zh-CN/docs/Web/API/WebVR_API) 仅设计为支持虚拟现实（VR），而 WebXR 在 Web 上同时支持 VR 和增强现实（AR）。WebXR 增强现实模块增加了对 AR 功能的支持。

典型的 XR 设备可以具有 3 或 6 个自由度，并且有没有外部位置传感器都可以。

该设备还可以包括加速度计，气压计或其他传感器，用于感测用户何时在空间中移动，旋转其头部等。

### WebXR 应用程序生命周期

使用 WebXR 的大多数应用程序将遵循类似的总体设计模式：

1. 检查用户的设备和浏览器是否都能够呈现您想要提供的 XR 体验。

   1. 确保 WebXR API 可用；如果 {{domxref("navigator.xr")}} 未定义，则可以判断用户的浏览器和/或设备不支持 WebXR。如果不支持，请禁用用于激活 XR 功能的任何用户界面，并中止任何进入 XR 模式的尝试。
   2. 调用 {{DOMxRef("XR.isSessionSupported","navigator.xr.isSessionSupported()")}}, 指定要提供的 WebXR 体验模式：`inline`, `immersive-vr`, 或 `immersive-ar`, 以确定您希望提供的会话类型是否可用。
   3. 如果要使用的会话类型可用，请向用户提供适当的界面以允许他们激活它。

2. 当用户通过上述的界面开启了 WebXR 功能后，通过调用 {{DOMxRef("XR.requestSession","navigator.xr.requestSession()")}}，也是指定使用的模式为以下三种之一： `inline`, `immersive-vr`, 或 `immersive-ar`后，可以将一个 {{DOMxRef("XRSession")}} 设定在期望的模式下。
3. 当 `requestSession()` 返回的 promise 被 resolve 后，使用新的 {{domxref("XRSession")}} 在整个 WebXR 体验期间运行帧循环。

   1. 调用 {{domxref("XRSession")}} 的 {{DOMxRef("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} 方法，以调度 XR 设备的首帧渲染。
   2. 每一个 `requestAnimationFrame()` 的回调都需要使用 WebGL 渲染已提供信息的 3D 世界中的物体。
   3. 持续在回调中调用 {{DOMxRef("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} 保证每一帧都成功地按顺序渲染。

4. 当需要结束 XR 会话的时候；或者用户主动退出 XR 模式。

   1. 通过调用 {{DOMxRef("XRSession.end", "XRSession.end()")}} 可手动结束 XR 会话。
   2. 无论通过何种方式（开发者、用户或者浏览器）终止会话，{{domxref("XRSession")}} 的 {{domxref("XRSession.end_event", "end")}} 事件都会接收到通知。

### 获取许可与安全性

WebXR Device API 受到一系列许可与安全性的控制。这些控制不涉及法律责任，但也需要引起重视。其控制场景主要在于身临其境的 `immersive-vr` 会话模式和 AR 会话下。

#### VR 的沉浸式（immersive）

首先，如果域名不支持请求有权限打开沉浸模式，那么 `immersive-vr` 模式就会被拒绝。这个权限管理来自`xr-spatial-tracking` [特征策略](/zh-CN/docs/Web/HTTP/Feature_Policy)。

一旦有权限了，申请开启 `immersive-vr` 模式的请求还需要再检查以下三点，全部满足才能开启：

- 在用户事件句柄总或者在用户启动 [web 应用](/zh-CN/docs/Web/Progressive_web_apps)中执行的 `requestSession()` 调用；
- 文档是可信赖的，其中的内容是可靠的、及时更新的以及有着重点；
- 用户有明确的使用沉浸式 VR 模式的意图，后文中，[用户意图](#用户意图)一节将有详细描述。

如果上述三点均满足， `requestSession()` 返回的 Promise 将被 resolve，新的 {{domxref("XRSession")}} 对象被传入完成时的处理函数中。如果有不满足的情况，将会根据具体场景抛出异常，比如当没有权限进入沉浸式模式情况下， `SecurityError` 将被抛出。

#### 内联（inline）

当你在 `inline` 模式下发出 {{domxref("XRSession")}} 请求想要请求其他的特性时，浏览器仅允许那些明显由**用户意图**发起才会执行的代码所调用到的 {{domxref("XR.requestSession", "requestSession()")}}。

特别注意：

- 如果 `requestSession()` 调用的发起既不来自用户事件中，也不是在 Web 应用启动时，那该请求将会被驳回，Promise 放返回 `false`;
- 如果发起请求的文档不属于对应的脚本，该请求将被驳回；
- 如果发起请求的文档不可信任，该请求会被驳回且 Promise 返回 `false`。一个可信任文档指的是该文档是活跃的、负责任的且有重点的；
- 如果设备无法明确用户开启内联模式的意图，该请求将会被驳回。对[用户的目的](#用户意图)的理解可以是隐性或者显性的。

> **备注：** 当调用 `requestSession()` 时，根据选择对象需要指定的特性不同，将会执行额外的请求。

#### 用户意图

**用户意图**指的是用户自身是否想执行某个动作的时候可以通过代码控制实际的执行情况。有两种用户意图类型：**显性**和**隐性**。

直接询问用户是否同意执行某个操作，即**显性的用户意图** (用户显示的同意操作) 。

当以下情况发生时，我们可以认为出现了**隐性的用户意图** (用户暗示同意)：

- The user has interacted with the document in some way which has in turn caused your request to occur. For example, if you have an "Enter XR mode" button, and the user clicks it, calling `requestSession()` from the button's {{domxref("Element.click_event", "click")}} event handler will permitted.
- If your code is executing during the launch of a web application, the runtime may consider the act of launching your web application to qualify as user intent.

### WebXR 的可用性

As a new and still in development API, WebXR support is limited to specific devices and browsers; and even on those, it may not be enabled by default. There may be options available to allow you to experiment with WebXR even if you don't have a compatible system, however.

#### WebXR polyfill

The team designing the WebXR specification has published a [WebXR polyfill](https://github.com/immersive-web/webxr-polyfill) which you can use to simulate WebXR on browsers which don't have support for the WebXR APIs. If the browser supports the older [WebVR API](/zh-CN/docs/Web/API/WebVR_API), that is used. Otherwise, the polyfill falls back to an implementation which uses Google's Cardboard VR API.

The polyfill is maintained alongside the specification, and is kept up to date with the specification. Additionally, it is updated to maintain compatiblity with browsers as their support for WebXR and other technologies related to it and to the implementation of the polyfill change over time.

Be sure to read the readme carefully; the polyfill comes in several versions depending on what degree of compatibility with newer JavaScript features your target browsers include.

#### WebXR API Emulator extension

The [Mozilla WebXR team](https://mixedreality.mozilla.org/) has created a [WebXR API Emulator](https://blog.mozvr.com/webxr-emulator-extension/) browser extension, compatible with both Firefox and Chrome, which emulates the WebXR API, simulating a variety of compatible devices such as the HTC Vive, the Oculus Go and Oculus Quest, Samsung Gear, and Google Cardboard. With the extension in place, you can open up a developer tools panel that lets you control the position and orientation of the headset and any hand controllers, as well as button presses on the controllers.

While somewhat awkward compared to using an actual headset, this makes it possible to experiment with and developer WebXR code on a desktop computer, where WebXR isn't normally available. It also lets you perform some basic testing before taking your code to a real device. Be aware, however, that the emulator does not yet completely emulate all of the WebXR API, so you may run into problems you're not expecting. Again, carefully read the readme file and make sure you're aware of the limitations before you begin.

> **备注：** **Important:** You should _always_ test your code on actual AR and/or VR hardware before releasing or shipping a product! Emulated, simulated, or polyfilled environments are _not_ an adequate substitute for actual testing on physical devices.

Download the WebXR API Emulator for your supported browser below:

- [Google Chrome](https://chrome.google.com/webstore/detail/webxr-api-emulator/mjddjgeghkdijejnciaefnkjmkafnnje)
- [Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/webxr-api-emulator/)

The [source code for the extension](https://github.com/MozillaReality/WebXR-emulator-extension) is also available on GitHub.

## 调用 WebXR API

To gain access to the WebXR API within the context of a given window, use the {{domxref("navigator.xr")}} property.

- {{domxref("navigator.xr")}} {{ReadOnlyInline}}
  - : This property, added to the {{domxref("Navigator")}} interface, returns the {{domxref("XR")}} object through which the WebXR API is exposed. If this property is missing or `null`, WebXR is not available.

## WebXR 接口

- {{DOMxRef("XR")}}
  - : The {{domxref("Navigator.xr", "navigator.xr")}} property returns the window's instance of {{domxref("XR")}}, which is the mechanism by which your code accesses the WebXR API. Using the `XR` interface, you can create {{domxref("XRSession")}}s to represent actual AR and/or VR sessions.
- {{DOMxRef("XRFrame")}}
  - : While presenting an XR session, the state of all tracked objects which make up the session are represented by an `XRFrame`. To get an `XRFrame`, call the session's {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} method, providing a callback which will be called with the `XRFrame` once available. Events which communicate tracking states will also use `XRFrame` to contain that information.
- {{DOMxRef("XRRenderState")}}
  - : Provides a set of configurable properties which change how the imagery output by an `XRSession` is composited. These properties include the range of distances from the viewer within which content should be rendered, the vertical field of view (for inline presentations), and a reference to the {{domxref("XRWebGLLayer")}} being used as the target for rendering the scene prior to it being presented on the XR device's display or displays.
- {{DOMxRef("XRSession")}}
  - : Provides the interface for interacting with XR hardware. Once an `XRSession` is obtained from {{domxref("XR.requestSession()")}}, the session can be used to check the position and orientation of the viewer, query the device for environment information, and present the virtual or augmented world to the user.
- {{DOMxRef("XRSpace")}}
  - : `XRSpace` is an opaque base class on which all virtual coordinate system interfaces are based. Positions in WebXR are always expressed in relation to a particular `XRSpace` at the time at which a particular {{domxref("XFrame")}} takes place. The space's coordinate system has its origin at the a given physical position.
- {{DOMxRef("XRReferenceSpace")}}
  - : A subclass of {{domxref("XRSpace")}} which is used to identify a spatial relationship in relation to the user's physical emvironment. The `XRReferenceSpace` coordinate system is expected to remain unchanged through the lifespan of the {{domxref("XRSession")}}.The world has no boundaries and extends infinitely in every direction.
- {{DOMxRef("XRBoundedReferenceSpace")}}
  - : `XRBoundedReferenceSpace` extends the {{domxref("XRReferenceSpace")}} coordinate system to further include support for a finite world with set boundaries. Unlike `XRReferenceSpace`, the origin must be located on the floor (that is, _y_ = 0 at the floor). The x and z components of the origin are typically presumed to be located at or near the center of the room or surface.
- {{DOMxRef("XRView")}}
  - : Represents a single view into the XR scene for a particular frame. Each `XRView` corresponds to the video display surface used to present the scene to the user. For example, a given XR device might have two views: one for the left eye and one for the right. Each view has an offset used to shift the position of the view relative to the camera, in order to allow for creating stereographic effects.
- {{DOMxRef("XRViewport")}}
  - : Describes a viewport. A viewport is a rectangular portion of a graphic surface.
- {{DOMxRef("XRRigidTransform")}}
  - : A transform defined using a position and orientation in the virtual space's coordinate system as described by the {{domxref("XRSpace")}}.
- {{DOMxRef("XRPose")}}
  - : Describes a position and orientation in space relative to an {{domxref("XRSpace")}}.
- {{DOMxRef("XRViewerPose")}}
  - : Based on {{domxref("XRPose")}}, `XRViewerPose` specifies the state of a viewer of the WebXR scene as indicated by the XR device. Included is an array of {{domxref("XRView")}} objects, each representing one perspective on the scene. For example, it takes two views to create the stereoscopic view as perceived by human vision—one for the left eye and a second for the right eye. One view is offset to the left slightly from the viewer's position, and the other view is offset to the right by the same distance. The view list can also be used to represent the perspectives of each of the spectators of a scene, in a multi-user environment.
- {{DOMxRef("XRInputSource")}}
  - : Represents any input device the user can use to perform targeted actions within the same virtual space as the viewer. Input sources may include devices such as hand controllers, optical tracking systems, and other devices which are explicitly associated with the XR device. Other input devices such as keyboards, mice, and gamepads are not presented as `XRInputSource` instances.
- {{DOMxRef("XRWebGLLayer")}}
  - : A layer which serves as a [WebGL](/zh-CN/docs/Web/API/WebGL_API) frame buffer into which a scene's view is rendered. Using WebGL to render the scene gains substantial performance benefits due to graphics acceleration.

### 事件接口

The following interfaces are used to represent the events used by the WebXR API.

- {{domxref("XRInputSourceEvent")}}
  - : Sent when the state of an {{domxref("XRInputSource")}} changes. This can happen, for example, when the position and/or orientation of the device changes, or when buttons are pressed or released.
- {{domxref("XRInputSourcesChangeEvent")}}
  - : Sent to indicate that the set of available input sources has changed for the {{domxref("XRSession")}}.
- {{domxref("XRReferenceSpaceEvent")}}
  - : Sent when the state of an {{domxref("XRReferenceSpace")}} changes.
- {{domxref("XRSessionEvent")}}
  - : Sent to indicate that the state of an {{domxref("XRSession")}} has changed. For example, if the position and/or orient

## WebGL API 的扩展

The WebGL API is extended by the WebXR specification to augment the WebGL context to allow it to be used to render views for display by a WebXR device.

- {{domxref("WebGLRenderingContextBase.makeXRCompatibile()")}}
  - : Configures the WebGL context to be compatible with WebXR. If the context was not initially created with the {{domxref("WebGLContextAttributes.xrCompatible", "xrCompatible")}} property set to `true`, you must call `makeXRCompatible()` prior to attempting to use the WebGL context for WebXR rendering. Returns a {{jsxref("promise")}} which resolves once the context has been prepared, or is rejected if the context cannot be configured for use by WebXR.

## 指南与教程

The following guides and tutorials are a great resource to learn how to comprehend WebXR and the underlying 3D and VR/AR graphics concepts.

- [Fundamentals of WebXR](/zh-CN/docs/Web/API/WebXR_Device_API/Fundamentals)
  - : Before diving into the details of how to create content using WebXR, it may be helpful to read this overview of the technology, which includes introductions to terminology that may be unfamiliar to you, or which may be used in a new way.
- [Matrix math for the web](/zh-CN/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
  - : A guide covering how matrices can be used on the web, including both for CSS transforms and for WebGL purposes, as well as to handle the positioning and orientation of objects in WebXR contexts.
- [Geometry and reference spaces in WebXR](/zh-CN/docs/Web/API/WebXR_Device_API/Geometry)
  - : In this guide, the required concepts of 3D geometry are briefly reviewed, and the fundamentals of how that geometry is represented in WebXR are detailed. Learn how reference spaces are used to position objects—and the viewer—and the differences among the available types of reference space, as well as their use cases.
- [Spatial tracking in WebXR](/zh-CN/docs/Web/API/WebXR_Device_API/Spatial_tracking)
  - : This guide describes how objects—including the user's body and its parts—are located in space, and how their movement and orientation relative to one another is monitored and managed over time. This article explains the relationship between spaces, poses, views (and viewers), and poses.
- [Rendering and the WebXR frame loop](/zh-CN/docs/Web/WebXR_Device_API/Rendering)
  - : Starting with how you schedule frames to be rendered, this guide then continues to cover how to determine the placement of objects in the view and how to then render them into the WebGL buffer used for each of the two eyes' views of the scene.
- [Movement, orientation, and motion: A WebXR example](/zh-CN/docs/API/WebXR_Device_API/Movement_and_motion)
  - : In this example and tutorial, we use information learned throughout the WebXR documentation to create a scene containing a rotating cube which the user can move around using both VR headset and keyboard and mouse.
- [Inputs and input sources](/zh-CN/docs/Web/API/WebXR_Device_API/Inputs)
  - : A guide to input sources and how to efficiently manage the input devices being used to control the WebXR session, and how to receive and process user inputs from those devices.
- [Supporting gamepads in WebXR applications](</zh-CN/docs/Web/WebXR Device API/Gamepads>)
  - : WebXR implements the Gamepad API to allow gamepads connected to the XR device to be used as input controls. This guide describes how this works.

## 规范

| 规范                                                                                                                                                                                                                                                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**WebXR Device API**](https://immersive-web.github.io/webxr/)（[Source](https://github.com/immersive-web/webxr)、[Issues](https://github.com/immersive-web/webxr/issues)、[Explainer](https://github.com/immersive-web/webxr/blob/master/explainer.md)）                                                                                          |
| [**WebXR Anchors Module**](https://immersive-web.github.io/anchors/)（[Source](https://github.com/immersive-web/anchors)、[Issues](https://github.com/immersive-web/anchors/issues)、[Explainer](https://github.com/immersive-web/anchors/blob/master/explainer.md)）                                                                              |
| [**WebXR Augmented Reality Module**](https://immersive-web.github.io/webxr-ar-module/)（[Source](https://github.com/immersive-web/webxr-ar-module)、[Issues](https://github.com/immersive-web/webxr-ar-module/issues)、[Explainer](https://github.com/immersive-web/webxr-ar-module/blob/master/ar-module-explainer.md)）                          |
| [**WebXR Depth Sensing Module**](https://immersive-web.github.io/depth-sensing/)（[Source](https://github.com/immersive-web/depth-sensing)、[Issues](https://github.com/immersive-web/depth-sensing/issues)、[Explainer](https://github.com/immersive-web/depth-sensing/blob/master/explainer.md)）                                                |
| [**WebXR DOM Overlays Module**](https://immersive-web.github.io/dom-overlays)（[Source](https://github.com/immersive-web/dom-overlays)、[Issues](https://github.com/immersive-web/dom-overlays/issues)、[Explainer](https://github.com/immersive-web/dom-overlays/blob/master/explainer.md)）                                                      |
| [**WebXR Gamepads Module**](https://immersive-web.github.io/webxr-gamepads-module/)（[Source](https://github.com/immersive-web/webxr-gamepads-module)、[Issues](https://github.com/immersive-web/webxr-gamepads-module/issues)、[Explainer](https://github.com/immersive-web/webxr-gamepads-module/blob/master/gamepads-module-explainer.md)）     |
| [**WebXR Hand Input Module**](https://immersive-web.github.io/webxr-hand-input/)（[Source](https://github.com/immersive-web/webxr-hand-input)、[Issues](https://github.com/immersive-web/webxr-hand-input/issues)、[Explainer](https://github.com/immersive-web/webxr-hand-input/blob/master/explainer.md)）                                       |
| [**WebXR Hit Test Module**](https://immersive-web.github.io/hit-test)（[Source](https://github.com/immersive-web/hit-test)、[Issues](https://github.com/immersive-web/hit-test/issues)、[Explainer](https://github.com/immersive-web/hit-test/blob/master/hit-testing-explainer.md)）                                                              |
| [**WebXR Layers API**](https://immersive-web.github.io/layers/)（[Source](https://github.com/immersive-web/layers)、[Issues](https://github.com/immersive-web/layers/issues)、[Explainer](https://github.com/immersive-web/layers/blob/master/explainer.md)）                                                                                      |
| [**WebXR Lighting Estimation API**](https://immersive-web.github.io/lighting-estimation/)（[Source](https://github.com/immersive-web/lighting-estimation)、[Issues](https://github.com/immersive-web/lighting-estimation/issues)、[Explainer](https://github.com/immersive-web/lighting-estimation/blob/master/lighting-estimation-explainer.md)） |

## 浏览器兼容性

{{Compat}}

## 参见

- [Graphics on the web](/zh-CN/docs/Web/Guide/Graphics)
- [Drawing graphics](/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [WebGL API](/zh-CN/docs/Web/API/WebGL_API): Accelerated 2D and 3D graphics on the web
- [Canvas API](/zh-CN/docs/Web/API/Canvas_API): 2D drawing for the web
- [Canvas tutorial](/zh-CN/docs/Web/API/Canvas_API/Tutorial)
