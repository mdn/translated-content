---
title: MediaStreamTrack.clone()
slug: Web/API/MediaStreamTrack/clone
---

{{APIRef("Media Capture and Streams")}}

{{domxref("MediaStreamTrack")}} 인터페이스의 **`clone()`** 메서드는 `MediaStreamTrack` 객체의 사본을 반환합니다. 사본은 새로운 {{domxref("MediaStreamTrack.id", "id")}}를 제외하면 모든 값이 원본과 동일합니다.

## 구문

```js
const newTrack = track.clone();
```

### 반환 값

`clone()`을 호출한 {{domxref("MediaStreamTrack")}}에서 {{domxref("MediaStreamTrack.id", "id")}}를 제외하면 똑같은 새로운 `MediaStreamTrack`.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
