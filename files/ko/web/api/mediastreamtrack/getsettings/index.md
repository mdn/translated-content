---
title: MediaStreamTrack.getSettings()
slug: Web/API/MediaStreamTrack/getSettings
---

{{APIRef("Media Capture and Streams")}}

{{domxref("MediaStreamTrack")}} 인터페이스의 **`getSettings()`** 메서드는 트랙의 각 제약 속성에 지금 적용된 값을 담은 {{domxref("MediaTrackSettings")}} 객체를 반환합니다. [기능, 제약, 설정](/ko/docs/Web/API/Media_Streams_API/Constraints) 문서에서 제약 속성 사용법에 대해 자세히 알아보세요.

## 구문

```js
const settings = track.getSettings();
```

### 반환 값

트랙의 현재 제약 속성 설정을 설명하는 {{domxref("MediaTrackSettings")}} 객체.

> **참고:** 반환하는 객체는 모든 제약 속성을 포함하며, 사이트 코드에서 수정하지 않은 플랫폼 기본값 역시 들어있습니다. 사이트 코드에서 제일 최근에 적용한 제약 속성만 필요한 경우, {{domxref("MediaStreamTrack.getConstraints", "getConstraints()")}} 메서드를 사용하세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
