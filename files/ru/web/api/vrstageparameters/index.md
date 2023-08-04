---
title: VRStageParameters
slug: Web/API/VRStageParameters
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

The **`VRStageParameters`** interface of the [WebVR API](/ru/docs/Web/API/WebVR_API) represents the values describing the the stage area for devices that support room-scale experiences.

This interface is accessible through the {{domxref("VRDisplay.stageParameters")}} property.

## Properties

- {{domxref("VRStageParameters.sittingToStandingTransform")}} {{readonlyInline}}
  - : Contains a matrix that transforms the sitting-space view matrices of {{domxref("VRFrameData")}} to standing-space.
- {{domxref("VRStageParameters.sizeX")}} {{readonlyInline}}
  - : Returns the width of the play-area bounds in meters.
- {{domxref("VRStageParameters.sizeY")}} {{readonlyInline}}
  - : _Returns the depth_ of the play-area bounds in meters.

## Examples

```js
var info = document.querySelector("p");
var vrDisplay;

navigator.getVRDisplays().then(function (displays) {
  vrDisplay = displays[0];
  var stageParams = vrDisplay.stageParameters;
  // stageParams is a VRStageParameters object

  if (stageParams === null) {
    info.textContent =
      "Your VR Hardware does not support room-scale experiences.";
  } else {
    info.innerHTML =
      "<strong>Display stage parameters</strong>" +
      "<br>Sitting to standing transform: " +
      stageParams.sittingToStandingTransform +
      "<br>Play area width (m): " +
      stageParams.sizeX +
      "<br>Play area depth (m): " +
      stageParams.sizeY;
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/ru/docs/Web/API/WebVR_API)
- [MozVr.com](http://mozvr.com/) — demos, downloads, and other resources from the Mozilla VR team.
