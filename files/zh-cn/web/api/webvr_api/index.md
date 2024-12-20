---
title: WebVR API
slug: Web/API/WebVR_API
---

{{DefaultAPISidebar("WebVR API")}}{{SeeCompatTable}}

WebVR API 能为虚拟现实设备的渲染提供支持——例如像 Oculus Rift 或者 HTC Vive 这样的头戴式设备与 Web 应用的连接。它能让开发者将位置和动作信息转换成 3D 场景中的运动。基于这项技术能产生很多有趣的应用，比如虚拟的产品展示，可交互的培训课程，以及超强沉浸感的第一人称游戏。

## 概念及使用方法

![Sketch of a person in a chair with wearing goggles labelled "Head mounted display (HMD)" facing a monitor with a webcam labelled "Position sensor"](hw-setup.png)

连接到电脑的所有 VR 设备都将由 {{domxref("Navigator.getVRDevices()")}} 方法返回。这个方法将返回一个包含了所有已连接设备的对象数组，每个设备对应一个对象，该对象继承自 {{domxref("VRDevice")}}——通常一个头显将包含两个设备——头显自身由 {{domxref("HMDVRDevice")}} 表示，和一个跟踪头部位置的位置捕捉传感器，由 {{domxref("PositionSensorVRDevice")}} 表示。

{{domxref("PositionSensorVRDevice")}} 对象有一个 {{domxref("PositionSensorVRDevice.getState","getState()")}} 方法，该方法返回一个{{domxref("VRPositionState")}} 对象——这个对象代表位置传感器在指定时刻的状态，包含了一些十分有用的信息，例如速度、加速度以及运动方向，可用于根据头部运动刷新画面显示。

{{domxref("HMDVRDevice.getEyeParameters()")}} 方法返回一个 {{domxref("VREyeParameters")}} 对象，可用于获取显示区域的信息——头显可以看到多少画面。 {{domxref("VREyeParameters.currentFieldOfView")}} 返回一个 {{domxref("VRFieldOfView")}} 对象，该对象包含了 4 个角度信息来描述当前的显示区域。你可以用 {{domxref("HMDVRDevice.setFieldOfView()")}} 来改变当前的显示区域。

> [!NOTE]
> 要了解更多关于如何在你的应用程序中使用这些接口，请阅读文章[使用 WebVR API](/zh-CN/docs/Web/API/WebVR_API/Using_the_WebVR_API)。要学习更多关于 VR 技术背后的基础概念，请阅读文章 [WebVR 概念](/zh-CN/docs/Web/API/WebVR_API/Concepts)。

### 使用控制器：将 WebVR 与 Gamepad API 相结合

Many WebVR hardware setups feature controllers that go along with the headset. These can be used in WebVR apps via the [Gamepad API](/zh-CN/docs/Web/API/Gamepad_API), and specifically the [Gamepad Extensions API](/zh-CN/docs/Web/API/Gamepad_API#experimental_gamepad_extensions) that adds API features for accessing [controller pose](/zh-CN/docs/Web/API/GamepadPose), [haptic actuators](/zh-CN/docs/Web/API/GamepadHapticActuator), and more.

> [!NOTE]
> Our [Using VR controllers with WebVR](/zh-CN/docs/Web/API/WebVR_API/Using_VR_controllers_with_WebVR) article explains the basics of how to use VR controllers with WebVR apps.

## WebVR 接口

- {{domxref("Navigator.getVRDevices")}}
  - : 返回一个会兑现连接到电脑的 VR 设备数组的 promise。
- {{domxref("VRDevice")}}
  - : 返回一个包括了 VR 设备 IDs，描述等信息的类。由 `HMDVRDevice` 和 `PositionSensorVRDevice` 继承。
- {{domxref("HMDVRDevice")}}
  - : 头戴设备。提供设备双眼、当前视野（FOV）信息。
- {{domxref("PositionSensorVRDevice")}}
  - : VR 设备的位置传感器。获取位置、方向信息。
- {{domxref("VRPose")}}
  - : 根据一个时间戳返回包括（方向、位置、速度、加速度）的状态。
- {{domxref("VREyeParameters")}}
  - : 给双眼提供正确渲染场景的所有信息，包括 FOV。
- {{domxref("VRFieldOfView")}}
  - : 返回以视窗的中心点为基点的，表示 FOV 的 4 个角度值（downDegrees, leftDegrees, rightDegrees, upDegrees）。
- {{domxref("VRFieldOfViewReadOnly")}}
  - : 定义一个 FOV 必须的角度属性。由 `VRFieldOfView` 继承。

## 示例

你可以在 Github 的协议中找到一系列的案例：

- [mdn/webvr-tests](https://github.com/mdn/webvr-tests)：简单构建的演示用于阐明基本的使用方法。
- [MozVR team](https://github.com/MozVR/)：更多复杂的演示，关于 WebVR 特别的资源，以及更多的内容！

## 规范

该 API 在旧的 [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/)（已被 [WebXR Device API](https://immersive-web.github.io/webxr/) 取代）中定义。它不再有望成为标准。

在所有浏览器都实现新的 [WebXR API](/zh-CN/docs/Web/API/WebXR_Device_API/Fundamentals) 之前，建议使用框架（如：[A-Frame](https://aframe.io/)、[Babylon.js](https://www.babylonjs.com/) 或 [Three.js](https://threejs.org/)）或 [polyfill](https://github.com/immersive-web/webxr-polyfill) 来开发适用于所有浏览器的 WebXR 应用程序。

## 浏览器兼容性

{{Compat}}

## 参见

- [建立 WebVR 的运行环境](/zh-CN/docs/Web/API/WebVR_API/WebVR_environment_setup)
- [WebVR 的相关概念](/zh-CN/docs/Web/API/WebVR_API/Concepts)
- [怎样使用 WebVR API](/zh-CN/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Console Game on Web](http://dsmu.me/ConsoleGameOnWeb/)——一系列有趣的概念游戏演示的集合，其中有些包括了 WebVR。
- [threejs-vr-boilerplate](https://github.com/MozVR/vr-web-examples/tree/master/threejs-vr-boilerplate)——一个当你编写 WebVR APP 时，非常有用的用于开始编程的模板。
- [Oculus Rift 主页](https://developer.oculus.com/)
