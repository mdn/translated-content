---
title: MediaStreamTrack.getConstraints()
slug: Web/API/MediaStreamTrack/getConstraints
---

{{APIRef("Media Capture and Streams")}}

{{domxref("MediaStreamTrack")}} 인터페이스의 **`getConstraints()`** 메서드는 현재 트랙에서 마지막으로 호출한 {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}} 메서드로 설정한 제약을 포함한 객체를 반환합니다. 반환한 제약 값은 웹 사이트나 애플리케이션이 제약 속성에 지정한 특정 값 또는 값의 범위 조건을 나타냅니다.

제약을 통해 미디어를 여러분의 선호 가이드라인에 맞출 수 있습니다. 예를 들면 고해상도 비디오를 선호하되 네트워크 사용량 폭증을 막기 위해 다소 낮은 프레임 레이트를 요구할 수 있습니다. 또한 이상적인 크기나, 허용 가능한 크기의 범위를 지정할 수도 있습니다. [기능, 제약, 설정](/ko/docs/Web/API/Media_Streams_API/Constraints) 문서의 [제약 적용](/ko/docs/Web/API/Media_Streams_API/Constraints#Applying_constraints) 항목에서 원하는 제약을 적용하는 방법에 대해 더 알아보세요.

## 구문

```js
const constraints = track.getConstraints();
```

### 반환 값

가장 최근에 웹 사이트 또는 애플리케이션에서 {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}} 호출로 지정한 제약 속성을 나타내는 {{domxref("MediaTrackConstraints")}} 객체. 지정할 때 사용한 속성 순서를 동일하게 반환하며, 웹 사이트 또는 애플리케이션에서 지정하지 않은 속성은 포함하지 않습니다.

> **참고:** 반환한 제약 집합이 반드시 미디어의 실제 상태를 나타내는 것은 아닙니다. 사이트 코드에서 지정한 어떤 제약 조건을 만족할 수 없는 상황에서도, 해당 속성을 반환 값에 포함합니다. 따라서 반환 값이 반드시 미디어의 실제 상태를 나타내는 것은 아닙니다. 모든 제약 속성에 현재 활성화된 값이 필요한 경우 {{domxref("MediaStreamTrack.getSettings", "getSettings()")}} 메서드를 사용하세요.

## 예제

다음 예제는 트랙의 현재 제약을 가져와서 {{domxref("MediaTrackConstraints.facingMode", "facingMode")}}를 설정한 후, 새로운 제약을 트랙에 적용합니다.

```js
function switchCameras(track, camera) {
  const constraints = track.getConstraints();
  constraints.facingMode = camera;
  track.applyConstraints(constraints);
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
