---
title: VRDisplay
slug: Web/API/VRDisplay
tags:
  - API
  - DOM
  - Experimental
  - Interface
  - Media
  - NeedsTranslation
  - Reference
  - TopicStub
  - VR
  - VRDisplay
  - Virtual Reality
  - WebVR
translation_of: Web/API/VRDisplay
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

The **`VRDisplay`** interface of the [WebVR API](/ru/docs/Web/API/WebVR_API) represents any VR device supported by this API. It includes generic information such as device IDs and descriptions, as well as methods for starting to present a VR scene, retrieving eye parameters and display capabilities, and other important functionality.

An array of all connected VR Devices can be returned by invoking the {{domxref("Navigator.getVRDisplays()")}} method.

## Properties

- {{domxref("VRDisplay.capabilities")}} {{readonlyInline}}
  - : Returns a {{domxref("VRDisplayCapabilities")}} object that indicates the various capabilities of the `VRDisplay`.
- {{domxref("VRDisplay.depthFar")}}
  - : Gets and sets the z-depth defining the far plane of the [eye view frustum](https://en.wikipedia.org/wiki/Viewing_frustum), i.e. the furthest viewable boundary of the scene.
- {{domxref("VRDisplay.depthNear")}}
  - : Gets and sets the z-depth defining the near plane of the [eye view frustum](https://en.wikipedia.org/wiki/Viewing_frustum), i.e. the nearest viewable boundary of the scene.
- {{domxref("VRDisplay.displayId")}} {{readonlyInline}}
  - : Returns an identifier for this particular VRDisplay, which is also used as an association point in the [Gamepad API](/ru/docs/Web/API/Gamepad_API) (see {{domxref("Gamepad.displayId")}}).
- {{domxref("VRDisplay.displayName")}} {{readonlyInline}}
  - : Returns a human-readable name to identify the `VRDisplay`.
- {{domxref("VRDisplay.isConnected")}} {{readonlyInline}}
  - : Returns a {{domxref("Boolean")}} indicating whether the `VRDisplay` is connected to the computer.
- {{domxref("VRDisplay.isPresenting")}} {{readonlyInline}}
  - : Returns a {{domxref("Boolean")}} indicating whether the `VRDisplay` is currently having content presented through it.
- {{domxref("VRDisplay.stageParameters")}} {{readonlyInline}}
  - : Returns a {{domxref("VRStageParameters")}} object containing room-scale parameters, if the `VRDisplay` is capable of supporting room-scale experiences.

## Methods

- {{domxref("VRDisplay.getEyeParameters()")}}
  - : Returns the {{domxref("VREyeParameters")}} object containing the eye parameters for the specified eye.
- {{domxref("VRDisplay.getFrameData()")}}
  - : Accepts a {{domxref("VRFrameData")}} object and populates it with the information required to render the current frame.
- {{domxref("VRDisplay.getLayers()")}}
  - : Returns the layers currently being presented by the `VRDisplay`.
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

### Deprecated methods

- {{domxref("VRDisplay.getPose()")}} {{deprecated_inline}}
  - : Returns a {{domxref("VRPose")}} object defining the future predicted pose of the `VRDisplay` as it will be when the current frame is actually presented. **This method is deprecated — instead, you should use {{domxref("VRDisplay.getFrameData()")}}, which also provides a {{domxref("VRPose")}} object.**

### Obsolete methods

- {{domxref("VRDisplay.getImmediatePose()")}}
  - : Returns a {{domxref("VRPose")}} object defining the current pose of the `VRDisplay`, with no prediction applied. This is no longer needed, and has been removed from the spec.
- {{domxref("VRDisplay.hardwareUnitId")}}
  - : Returns a {{domxref("DOMString")}} defining the shared ID of the display, and any other devices that are part of that hardware set (e.g. controllers). This is no longer needed, and has been removed from the spec. Displays now use {{domxref("VRDisplay.displayId")}}, and corresponsing controllers will now return the same ID under {{domxref("Gamepad.displayId")}}.

## Examples

```js
if(navigator.getVRDisplays) {
  console.log('WebVR 1.1 supported');
  // Then get the displays attached to the computer
  navigator.getVRDisplays().then(function(displays) {
    // If a display is available, use it to present the scene
    if(displays.length > 0) {
      vrDisplay = displays[0];
      // Now we have our VRDisplay object and can do what we want with it
    }
  });
}
```

> **Примечание:** You can see this complete code at [raw-webgl-example](https://github.com/mdn/webvr-tests/blob/master/raw-webgl-example/webgl-demo.js).

## Specifications

| Specification                                                                        | Status                       | Comment            |
| ------------------------------------------------------------------------------------ | ---------------------------- | ------------------ |
| {{SpecName('WebVR 1.1', '#interface-vrdisplay', 'VRDisplay')}} | {{Spec2('WebVR 1.1')}} | Initial definition |

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/ru/docs/Web/API/WebVR_API)
- [MozVr.com](http://mozvr.com/) — demos, downloads, and other resources from the Mozilla VR team.
