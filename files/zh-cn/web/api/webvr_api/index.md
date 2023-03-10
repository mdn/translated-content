---
title: WebVR API
slug: Web/API/WebVR_API
---

{{DefaultAPISidebar("WebVR API")}}{{SeeCompatTable}}

**WebVR API 能为虚拟现实设备的渲染提供支持 — 例如像 Oculus Rift 或者**HTC Vive **这样的头戴式设备与 Web apps 的连接。它能让开发者将位置和动作信息转换成 3D 场景中的运动。基于这项技术能产生很多有趣的应用，比如虚拟的产品展示，可交互的培训课程，以及超强沉浸感的第一人称游戏。**

## 概念及使用方法

**【K】**

![Sketch of a person in a chair with wearing goggles labelled "Head mounted display (HMD)" facing a monitor with a webcam labelled "Position sensor"](hw-setup.png)

Any VR devices attached to your computer will be returned by the {{domxref("Navigator.getVRDevices()")}} method. This returns an array of objects to represent the attached devices, which inherit from the general {{domxref("VRDevice")}} object — generally a head mounted display will have two devices — the head mounted display itself, represented by {{domxref("HMDVRDevice")}}, and a position sensor camera that keeps track of your head position, represented by {{domxref("PositionSensorVRDevice")}}.

**连接到电脑的所有 VR 设备都将由 {{domxref("Navigator.getVRDevices()")}} 方法返回。这个方法将返回一个包含了所有已连接设备的对象数组，每个设备对应一个对象，该对象继承自 {{domxref("VRDevice")}} — 通常一个头显将包含两个设备 — 头显自身由 {{domxref("HMDVRDevice")}} 表示，和一个跟踪头部位置的位置捕捉传感器，由 {{domxref("PositionSensorVRDevice")}} 表示。**

The {{domxref("PositionSensorVRDevice")}} object contains the {{domxref("PositionSensorVRDevice.getState","getState()")}} method, which returns a {{domxref("VRPositionState")}} object — this represents the sensor’s state at a given timestamp, and includes properties containing useful data such as current velocity, acceleration, and orientation, useful for updating the rendering of a scene on each frame according to the movement of the VR head mounted display.

**{{domxref("PositionSensorVRDevice")}} 对象有一个 {{domxref("PositionSensorVRDevice.getState","getState()")}} 方法，该方法返回一个{{domxref("VRPositionState")}} 对象 — 这个对象代表位置传感器在指定时刻的状态，包含了一些十分有用的信息，例如速度、加速度以及运动方向，可用于根据头部运动刷新画面显示。**

The {{domxref("HMDVRDevice.getEyeParameters()")}} method returns a {{domxref("VREyeParameters")}} object, which can be used to return field of view information — how much of the scene the head mounted display can see. The {{domxref("VREyeParameters.currentFieldOfView")}} returns a {{domxref("VRFieldOfView")}} object that contains 4 angles describing the current view from a center point. You can also change the field of view using {{domxref("HMDVRDevice.setFieldOfView()")}}.

**{{domxref("HMDVRDevice.getEyeParameters()")}} 方法返回一个 {{domxref("VREyeParameters")}} 对象，可用于获取显示区域的信息 — 头显可以看到多少画面。 {{domxref("VREyeParameters.currentFieldOfView")}} 返回一个 {{domxref("VRFieldOfView")}} 对象，该对象包含了 4 个角度信息来描述当前的显示区域。你可以用 {{domxref("HMDVRDevice.setFieldOfView()")}} 来改变当前的显示区域。**

> **备注：** To find out more about using these interfaces in your own app, read [Using the WebVR API](/zh-CN/docs/Web/API/WebVR_API/Using_the_WebVR_API). To learn more about the basic concepts behind VR, read [WebVR concepts](/zh-CN/docs/Web/API/WebVR_API/WebVR_concepts).
>
> 注释：要了解更多关于如何在你的应用程序中使用这些接口，请阅读文章[Using the WebVR API](/zh-CN/docs/Web/API/WebVR_API/Using_the_WebVR_API). 要学习更多关于 VR 技术背后的基础概念，请阅读文章 [WebVR concepts](/zh-CN/docs/Web/API/WebVR_API/WebVR_concepts).

### Using controllers: Combining WebVR with the Gamepad API

### 使用控制器：将 WebVR 与 Gamepad API 相结合

Many WebVR hardware setups feature controllers that go along with the headset. These can be used in WebVR apps via the [Gamepad API](/zh-CN/docs/Web/API/Gamepad_API), and specifically the [Gamepad Extensions API](/zh-CN/docs/Web/API/Gamepad_API#Experimental_Gamepad_extensions) that adds API features for accessing [controller pose](/zh-CN/docs/Web/API/GamepadPose), [haptic actuators](/zh-CN/docs/Web/API/GamepadHapticActuator), and more.

> **备注：** Our [Using VR controllers with WebVR](/zh-CN/docs/Web/API/WebVR_API/Using_VR_controllers_with_WebVR) article explains the basics of how to use VR controllers with WebVR apps.

## WebVR 接口

- {{domxref("Navigator.getVRDevices")}}
  - : Returns a promise that resolves to an array of objects representing the VR devices attached to the computer.
    **返回一个 Promise 对象，并通过 resolve 方式返回参数，参数为链接到电脑的 VR 设备数组。**
- {{domxref("VRDevice")}}
  - : A generic VR device, includes information such as device IDs and descriptions. Inherited by `HMDVRDevice` and `PositionSensorVRDevice`.
    **返回一个包括了 VR 设备 IDs，描述等信息的类。HMDVRDevice 和 PositionSensorVRDevice 继承了 VRDevice。**
- {{domxref("HMDVRDevice")}}
  - : Represents a head mounted display, providing access to information about each eye, and the current field of view.
    **头戴设备。提供设备双眼、当前 FOV（field of view）信息。**
- {{domxref("PositionSensorVRDevice")}}
  - : Represents the position sensor for the VR hardware, allowing access to information such as position and orientation.
    **VR 设备的位置传感器。获取位置、方向信息。**
- {{domxref("VRPose")}}
  - : Represents the position state at a given timestamp (which includes orientation, position, velocity, and acceleration.)
    **根据一个时间戳返回包括（方向、位置、速度、加速度）的状态。**
- {{domxref("VREyeParameters")}}
  - : Provides access to all the information required to correctly render a scene for each given eye, including field of view information.
    **给双眼提供正确渲染场景的所有信息，包括 FOV。**
- {{domxref("VRFieldOfView")}}
  - : Represents a field of view defined by 4 different degree values describing the view from a center point.
    **返回以视窗的中心点为基点的，表示 FOV 的 4 个角度值（downDegrees, leftDegrees, rightDegrees, upDegrees）。**
- {{domxref("VRFieldOfViewReadOnly")}}
  - : Contains the raw definition for the degree value properties required to define a field of view. Inherited by `VRFieldOfView`.
    **定义一个 FOV 必须的角度属性。VRFieldOfView 继承了 VRFieldOfViewReadOnly。**

## 示例

**【K】**

You can find a number of examples at these Github repos:

**你可以在 Github 的协议中找到一系列的案例：**

- [mdn/webvr-tests](https://github.com/mdn/webvr-tests): Simple demos built to illiustrate basic feature usage.
- **[mdn/webvr-tests](https://github.com/mdn/webvr-tests): 简单构建的 demos 用于阐明基本的使用方法。**
-
- [MozVR team](https://github.com/MozVR/): More advanced demos, the WebVR spec source, and more!
- **[MozVR team](https://github.com/MozVR/): 更多复杂的 demos，关于 WebVR 特别的资源，以及更多的内容！**
- **【K】**

## 规范

该 API 在旧的 [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/)（已被 [WebXR Device API](https://immersive-web.github.io/webxr/) 取代）中定义。它不再有望成为标准。

在所有浏览器都实现新的 [WebXR API](/zh-CN/docs/Web/API/WebXR_Device_API/Fundamentals) 之前，建议使用框架（如：[A-Frame](https://aframe.io/)、[Babylon.js](https://www.babylonjs.com/) 或 [Three.js](https://threejs.org/)）或 [polyfill](https://github.com/immersive-web/webxr-polyfill) 来开发适用于所有浏览器的 WebXR 应用程序。

## 浏览器兼容性

{{Compat}}

## 相关文章

- [WebVR environment setup](/zh-CN/docs/Web/API/WebVR_API/WebVR_environment_setup)
- **建立 WEBVR 的运行环境。**
- [WebVR concepts](/zh-CN/docs/Web/API/WebVR_API/WebVR_concepts)
- **WEBVR 的相关概念。**
- [Using the WebVR API](/zh-CN/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- **怎样使用 WEBVR API。**
- [MozVr.com](http://mozvr.com/) — demos, downloads, and other resources from the Mozilla VR team.
- **[MozVr.com](http://mozvr.com/) — demos，下载，以及其他的来自 MOZILLA VR 团队的资源。**
- [Console Game on Web](http://dsmu.me/ConsoleGameOnWeb/) — a collection of interesting game concept demos, some of which include WebVR.
- **[Console Game on Web](http://dsmu.me/ConsoleGameOnWeb/) — 一系列有趣的概念游戏 DEMO 的收集，其中有些包括了 WEBVR。**
- [threejs-vr-boilerplate](https://github.com/MozVR/vr-web-examples/tree/master/threejs-vr-boilerplate) — a very useful starter template for writing WebVR apps into.
- **[threejs-vr-boilerplate](https://github.com/MozVR/vr-web-examples/tree/master/threejs-vr-boilerplate) — 一个当你编写 WEBVR APP 时，非常有用的用于开始编程的模板。**
- [Oculus Rift homepage](https://developer.oculus.com/)
- **[Oculus Rift](https://developer.oculus.com/) 主页**
