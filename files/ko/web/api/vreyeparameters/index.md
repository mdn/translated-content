---
title: VREyeParameters
slug: Web/API/VREyeParameters
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

[WebVR API](/ko/docs/Web/API/WebVR_API)의 **`VREyeParameters`** 인터페이스는 시야 정보 필드를 포함하여 특정한 눈에 대한 장면을 정확하게 렌더링 하는 데 필요한 모든 정보를 나타냅니다.

{{domxref("VRDisplay.getEyeParameters()")}} 방법을 통해 액세스 할 수 있습니다.

> **경고:** The values in this interface should not be used to compute view or projection matrices. In order to ensure the widest possible hardware compatibility use the matrices provided by {{domxref("VRFrameData")}}.

## 속성

- {{domxref("VREyeParameters.offset")}} {{readonlyInline}}
  - : 사용자 눈 사이의 중심점에서 눈 중심까지의 거리를 미터 단위로 나타냅니다.
- {{domxref("VREyeParameters.fieldOfView")}} {{readonlyInline}}
  - : 현재 눈에 보이는 시야를 설명하며,사용자가 동공 사이의 거리(m/s)를 조절할 때 달라질 수 있습니다.(IPD).
- {{domxref("VREyeParameters.renderWidth")}} {{readonlyInline}}
  - : 각 눈 뷰포트의 권장 렌더 타겟 폭을 픽셀 단위로 설명합니다.
- {{domxref("VREyeParameters.renderHeight")}} {{readonlyInline}}
  - : 각 눈 뷰포트의 권장 렌더 타겟 높이를 픽셀 단위로 나타냅니다..

## 예제

```js
navigator.getVRDisplays().then(function (displays) {
  // If a display is available, use it to present the scene
  vrDisplay = displays[0];
  console.log("Display found");
  // Starting the presentation when the button is clicked:
  //   It can only be called in response to a user gesture
  btn.addEventListener("click", function () {
    vrDisplay.requestPresent([{ source: canvas }]).then(function () {
      console.log("Presenting to WebVR display");

      // Set the canvas size to the size of the vrDisplay viewport

      var leftEye = vrDisplay.getEyeParameters("left");
      var rightEye = vrDisplay.getEyeParameters("right");

      canvas.width = Math.max(leftEye.renderWidth, rightEye.renderWidth) * 2;
      canvas.height = Math.max(leftEye.renderHeight, rightEye.renderHeight);

      drawVRScene();
    });
  });
});
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [WebVR API homepage](/ko/docs/Web/API/WebVR_API)
- [MozVr.com](http://mozvr.com/) — demos, downloads, and other resources from the Mozilla VR team.
