---
title: MediaStreamTrack.getCapabilities()
slug: Web/API/MediaStreamTrack/getCapabilities
---

{{APIRef("Media Capture and Streams")}}

{{domxref("MediaStreamTrack")}} 인터페이스의 **`getCapabilities()`** 메서드는 {{glossary("user agent", "사용자 에이전트")}}가 지원하는 각각의 제약 조건에 적용할 수 있는 값이나 값의 범위를 나타내는 {{domxref('MediaTrackCapabilities')}} 객체를 반환합니다.

브라우저의 기능 범위를 알아낸 후에는 스크립트에서 {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}}를 사용해 트랙의 설정을 이상적인 값으로, 또는 적어도 원하는 범위 안으로 설정할 수 있습니다. [기능, 제약, 설정](/ko/docs/Web/API/Media_Streams_API/Constraints) 문서에서 제약 속성 사용법에 대해 자세히 알아보세요.

## 구문

```js
const capabilities = track.getCapabilities();
```

### 반환 값

사용자 에이전트가 지원하는 제약 속성 각각의 가능한 값 또는 값의 범위를 나타내는 {{domxref('MediaTrackCapabilities')}} 객체.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
