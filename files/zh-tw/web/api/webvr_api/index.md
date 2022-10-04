---
title: WebVR API
slug: Web/API/WebVR_API
---

{{SeeCompatTable}}{{APIRef("WebVR API")}}

WebVR 可以讓穿戴的 VR 裝置 (如頭戴裝置 Oculus Rift 或 HTC Vive) 與 web 應用程式結合。開發人員可以將 VR 裝置所提供的位置與動作資訊轉移到 3D 的場景中。利用 WebVR 可以創造出很多有趣的應用程式: 包含虛擬導覽、互動訓練軟體等等。

## 用法與基本觀念

透過呼叫 {{domxref("Navigator.getVRDisplays()")}} 函數可以得到與電腦連接的 VR 裝置，每個裝置會回傳一個 {{domxref("VRDisplay")}} 物件

![Sketch of a person in a chair with wearing goggles labelled "Head mounted display (HMD)" facing a monitor with a webcam labelled "Position sensor"](hw-setup.png)

{{domxref("VRDisplay")}} 是 WebVR API 的核心，提供以下功能:

- Retrieve useful information to allow us to identify the display, what capabilities it has, controllers associated with it, and more.
- Retrieve {{domxref("VRFrameData", "frame data")}} for each frame of content you you want to present in a display, and submit those frames for display at a consistent rate.
- Start and stop presenting to the display.

A typical (simple) WebVR app would work like so:

1. 呼叫 {{domxref("Navigator.getVRDisplays()")}} 來取得 VR 顯示器的 reference。
2. 呼叫 {{domxref("VRDisplay.requestPresent()")}} 來啟動 VR 顯示器。
3. WebVR's dedicated {{domxref("VRDisplay.requestAnimationFrame()")}} method is used to run the app's rendering loop at the correct refresh rate for the display.
4. Inside the rendering loop, you grab the data required to display the current frame ({{domxref("VRDisplay.getFrameData()")}}), draw the displayed scene twice — once for the view in each eye, then submit the rendered view to the display to show to the user ({{domxref("VRDisplay.submitFrame()")}}).

In addition, WebVR 1.1 adds a number of events on the {{domxref("Window")}} object to allow JavaScript to respond to changes to the status of the display.

> **備註：** You can find a lot more out about how the API works in our [Using the WebVR API](/zh-TW/docs/Web/API/WebVR_API/Using_the_WebVR_API) and [WebVR Concepts](/zh-TW/docs/Web/API/WebVR_API/Concepts) articles.

### Using controllers: Combining WebVR with the Gamepad API

Many WebVR hardware setups feature controllers that go along with the headset. These can be used in WebVR apps via the [Gamepad API](/zh-TW/docs/Web/API/Gamepad_API), and specifically the [Gamepad Extensions API](/zh-TW/docs/Web/API/Gamepad_API#Experimental_Gamepad_extensions) that adds API features for accessing [controller pose](/zh-TW/docs/Web/API/GamepadPose), [haptic actuators](/zh-TW/docs/Web/API/GamepadHapticActuator), and more.

> **備註：** Our [Using VR controllers with WebVR](/zh-TW/docs/Web/API/WebVR_API/Using_VR_controllers_with_WebVR) article explains the basics of how to use VR controllers with WebVR apps.

## WebVR Interfaces

- {{domxref("VRDisplay")}}
  - : Represents any VR device supported by this API. It includes generic information such as device IDs and descriptions, as well as methods for starting to present a VR scene, retrieving eye parameters and display capabilities, and other important functionality.
- {{domxref("VRDisplayCapabilities")}}
  - : Describes the capabilities of a {{domxref("VRDisplay")}} — it's features can be used to perform VR device capability tests, for example can it return position information.
- {{domxref("VRDisplayEvent")}}
  - : Represents the event object of WebVR-related events (see the [window object extensions](#window) listed below).
- {{domxref("VRFrameData")}}
  - : Represents all the information needed to render a single frame of a VR scene; constructed by {{domxref("VRDisplay.getFrameData()")}}.
- {{domxref("VRPose")}}
  - : Represents the position state at a given timestamp (which includes orientation, position, velocity, and acceleration.)
- {{domxref("VREyeParameters")}}
  - : Provides access to all the information required to correctly render a scene for each given eye, including field of view information.
- {{domxref("VRFieldOfView")}}
  - : Represents a field of view defined by 4 different degree values describing the view from a center point.
- {{domxref("VRLayerInit")}}
  - : Represents a layer to be presented in a {{domxref("VRDisplay")}}.
- {{domxref("VRStageParameters")}}
  - : Represents the values describing the the stage area for devices that support room-scale experiences.

### Extensions to other interfaces

The WebVR API extends the following APIs, adding the listed features.

#### Gamepad

- {{domxref("Gamepad.displayId")}} {{readonlyInline}}
  - : _Returns the {{domxref("VRDisplay.displayId")}} of the associated {{domxref("VRDisplay")}} — the `VRDisplay` that the gamepad is controlling the displayed scene of._

#### Navigator

- {{domxref("Navigator.activeVRDisplays")}} {{readonlyInline}}
  - : Returns an array containing every {{domxref("VRDisplay")}} object that is currently presenting ({{domxref("VRDisplay.ispresenting")}} is `true`).
- {{domxref("Navigator.getVRDisplays()")}}
  - : Returns a promise that resolves to an array of {{domxref("VRDisplay")}} objects representing any available VR displays connected to the computer.

#### Window events

- {{domxref("Window.onvrdisplaypresentchange")}}
  - : Represents an event handler that will run when the presenting state of a VR display changes — i.e. goes from presenting to not presenting, or vice versa (when the {{event("vrdisplaypresentchange")}} event fires).
- {{domxref("Window.onvrdisplayconnect")}}
  - : Represents an event handler that will run when a compatible VR display has been connected to the computer (when the {{event("vrdisplayconnect")}} event fires).
- {{domxref("Window.onvrdisplaydisconnect")}}
  - : Represents an event handler that will run when a compatible VR display has been disconnected from the computer (when the {{event("vrdisplaydisconnect")}} event fires).
- {{domxref("Window.onvrdisplayactivate")}}
  - : Represents an event handler that will run when a display is able to be presented to (when the {{event("vrdisplayactivate")}} event fires), for example if an HMD has been moved to bring it out of standby, or woken up by being put on.
- {{domxref("Window.onvrdisplaydeactivate")}}
  - : Represents an event handler that will run when a display can no longer be presented to (when the {{event("vrdisplaydeactivate")}} event fires), for example if an HMD has gone into standby or sleep mode due to a period of inactivity.

#### Unimplemented window events

The following events are listed in the spec, but do not currently seem to be implemented anywhere as yet.

- {{domxref("Window.onvrdisplayblur")}}
  - : Represents an event handler that will run when presentation to a display has been paused for some reason by the browser, OS, or VR hardware (when the {{event("vrdisplayblur")}} event fires) — for example, while the user is interacting with a system menu or browser, to prevent tracking or loss of experience.
- {{domxref("Window.onvrdisplayfocus")}}
  - : Represents an event handler that will run when presentation to a display has resumed after being blurred (when the {{event("vrdisplayfocus")}} event fires).

## Examples

You can find a number of examples at these locations:

- [webvr-tests](https://github.com/mdn/webvr-tests) — very simple examples to accompany the MDN WebVR documentation.
- [Carmel starter kit](https://github.com/facebook/Carmel-Starter-Kit) — nice simple, well-commented examples that go along with Carmel, Facebook's WebVR browser.
- [WebVR.info samples](https://webvr.info/samples/) — slightly more in-depth examples plus source code
- [WebVR.rocks Firefox demos](https://webvr.rocks/firefox#demos) — showcase examples
- [A-Frame homepage](https://aframe.io/) — examples showing A-Frame usage

## Specifications

This API was specified in the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.
Until all browsers have implemented the new [WebXR APIs](/zh-TW/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [vr.mozilla.org](https://vr.mozilla.org) — The main Mozilla landing pad for WebVR, with demos, utilities, and other information.
- [A-Frame](https://aframe.io/) — Open source web framework for building VR experiences.
- [webvr.info](https://webvr.info) — Up-to-date information about WebVR, browser setup, and community.
- [MozVr.com](http://mozvr.com/) — Demos, downloads, and other resources from the Mozilla VR team.
- [threejs-vr-boilerplate](https://github.com/MozVR/vr-web-examples/tree/master/threejs-vr-boilerplate) — A useful starter template for writing WebVR apps into.
- [Web VR polyfill](https://github.com/googlevr/webvr-polyfill/) — JavaScript implementation of WebVR.
