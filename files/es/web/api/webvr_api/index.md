---
title: WebVR API
slug: Web/API/WebVR_API
---

{{SeeCompatTable}}{{APIRef("WebVR API")}}

WebVR proporciona soporte para la exposición de dispositivos de realidad virtual — por ejemplo el visualizador de Oculus Rift o HTC Vive — para aplicaciones web, permitiendo a los desarrolladores traducir la información de posición y movimiento del visualizador al movimiento alrededor de una escena en 3D. Esto tiene numerosas aplicaciones interesantes, desde visitas virtuales de productos y aplicaciones de capacitación interactiva hasta juegos inmersivos en primera persona.

## Concepts and usage

Any VR devices attached to your computer will be returned by the {{domxref("Navigator.getVRDisplays()")}} method; each one will be represented by a {{domxref("VRDisplay")}} object.

![Sketch of a person in a chair with wearing goggles labelled "Head mounted display (HMD)" facing a monitor with a webcam labelled "Position sensor"](hw-setup.png)

{{domxref("VRDisplay")}} is the central interface in the WebVR API — via its properties and methods you can access functionality to:

- Retrieve useful information to allow us to identify the display, what capabilities it has, controllers associated with it, and more.
- Retrieve {{domxref("VRFrameData", "frame data")}} for each frame of content you you want to present in a display, and submit those frames for display at a consistent rate.
- Start and stop presenting to the display.

A typical (simple) WebVR app would work like so:

1. {{domxref("Navigator.getVRDisplays()")}} is used to get a reference to your VR display.
2. {{domxref("VRDisplay.requestPresent()")}} is used to start presenting to the VR display.
3. WebVR's dedicated {{domxref("VRDisplay.requestAnimationFrame()")}} method is used to run the app's rendering loop at the correct refresh rate for the display.
4. Inside the rendering loop, you grab the data required to display the current frame ({{domxref("VRDisplay.getFrameData()")}}), draw the displayed scene twice — once for the view in each eye, then submit the rendered view to the display to show to the user ({{domxref("VRDisplay.submitFrame()")}}).

In addition, WebVR 1.1 adds a number of events on the {{domxref("Window")}} object to allow JavaScript to respond to changes to the status of the display.

> [!NOTE]
> You can find a lot more out about how the API works in our [Using the WebVR API](/es/docs/Web/API/WebVR_API/Using_the_WebVR_API) and [WebVR Concepts](/es/docs/Web/API/WebVR_API/Concepts) articles.

### Using controllers: Combining WebVR with the Gamepad API

Many WebVR hardware setups feature controllers that go along with the headset. These can be used in WebVR apps via the [Gamepad API](/es/docs/Web/API/Gamepad_API), and specifically the [Gamepad Extensions API](/es/docs/Web/API/Gamepad_API#experimental_gamepad_extensions) that adds API features for accessing [controller pose](/es/docs/Web/API/GamepadPose), [haptic actuators](/es/docs/Web/API/GamepadHapticActuator), and more.

> [!NOTE]
> Our [Using VR controllers with WebVR](/es/docs/Web/API/WebVR_API/Using_VR_controllers_with_WebVR) article explains the basics of how to use VR controllers with WebVR apps.

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
  - : Represents an event handler that will run when the presenting state of a VR display changes — i.e. goes from presenting to not presenting, or vice versa (when the [`vrdisplaypresentchange`](/es/docs/Web/Reference/Events/vrdisplaypresentchange) event fires).
- {{domxref("Window.onvrdisplayconnect")}}
  - : Represents an event handler that will run when a compatible VR display has been connected to the computer (when the [`vrdisplayconnect`](/es/docs/Web/Reference/Events/vrdisplayconnect) event fires).
- {{domxref("Window.onvrdisplaydisconnect")}}
  - : Represents an event handler that will run when a compatible VR display has been disconnected from the computer (when the [`vrdisplaydisconnect`](/es/docs/Web/Reference/Events/vrdisplaydisconnect) event fires).
- {{domxref("Window.onvrdisplayactivate")}}
  - : Represents an event handler that will run when a display is able to be presented to (when the [`vrdisplayactivate`](/es/docs/Web/Reference/Events/vrdisplayactivate) event fires), for example if an HMD has been moved to bring it out of standby, or woken up by being put on.
- {{domxref("Window.onvrdisplaydeactivate")}}
  - : Represents an event handler that will run when a display can no longer be presented to (when the [`vrdisplaydeactivate`](/es/docs/Web/Reference/Events/vrdisplaydeactivate) event fires), for example if an HMD has gone into standby or sleep mode due to a period of inactivity.

#### Unimplemented window events

The following events are listed in the spec, but do not currently seem to be implemented anywhere as yet.

- {{domxref("Window.onvrdisplayblur")}}
  - : Represents an event handler that will run when presentation to a display has been paused for some reason by the browser, OS, or VR hardware (when the [`vrdisplayblur`](/es/docs/Web/Reference/Events/vrdisplayblur) event fires) — for example, while the user is interacting with a system menu or browser, to prevent tracking or loss of experience.
- {{domxref("Window.onvrdisplayfocus")}}
  - : Represents an event handler that will run when presentation to a display has resumed after being blurred (when the [`vrdisplayfocus`](/es/docs/Web/Reference/Events/vrdisplayfocus) event fires).

## Examples

You can find a number of examples at these locations:

- [webvr-tests](https://github.com/mdn/webvr-tests) — very simple examples to accompany the MDN WebVR documentation.
- [Carmel starter kit](https://github.com/facebook/Carmel-Starter-Kit) — nice simple, well-commented examples that go along with Carmel, Facebook's WebVR browser.
- [WebVR.info samples](https://webvr.info/samples/) — slightly more in-depth examples plus source code
- [WebVR.rocks Firefox demos](https://webvr.rocks/firefox#demos) — showcase examples
- [A-Frame homepage](https://aframe.io/) — examples showing A-Frame usage

## Especificaciones

Esta API se especificó en la antigua [API de WebVR](https://immersive-web.github.io/webvr/spec/1.1/) que fue reemplazada por la [API del dispositivo WebXR](https://immersive-web.github.io/webxr/). Ya no está en camino de convertirse en un estándar.

Hasta que todos los navegadores hayan implementado las nuevas [API de WebXR](/es/docs/Web/API/WebXR_Device_API/Fundamentals), se recomienda confiar en _frameworks_, como [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), o [Three.js](https://threejs.org/), o un [polyfill](https://github.com/immersive-web/webxr-polyfill), para desarrollar aplicaciones WebXR que funcionen en todos los navegadores [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/).

## Compatibilidad con navegadores

{{Compat}}

## See also

- [vr.mozilla.org](https://vr.mozilla.org) — The main Mozilla landing pad for WebVR, with demos, utilities, and other information.
- [A-Frame](https://aframe.io/) — Open source web framework for building VR experiences.
- [webvr.info](https://webvr.info) — Up-to-date information about WebVR, browser setup, and community.
- [threejs-vr-boilerplate](https://github.com/MozVR/vr-web-examples/tree/master/threejs-vr-boilerplate) — A useful starter template for writing WebVR apps into.
- [Web VR polyfill](https://github.com/googlevr/webvr-polyfill/) — JavaScript implementation of WebVR.
