---
title: MediaStreamTrack.label
slug: Web/API/MediaStreamTrack/label
---

{{APIRef("Media Capture and Streams")}}

**`MediaStreamTrack.label`** 읽기 전용 속성은 {{glossary("user agent", "사용자 에이전트")}}가 트랙 소스를 식별하기 위해 지정한 레이블을 담은 {{domxref("DOMString")}}을 반환합니다. 소스가 연결되지 않은 경우 빈 문자열이며, 연결됐던 트랙이 소스에서 분리되더라도 레이블은 바뀌지 않습니다.

## 구문

```js
const label = track.label;
```

### 값

사용자 에이전트가 지정한 식별 레이블. `"internal microphone"` 등의 형태입니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [WebRTC](/ko/docs/Web/Guide/API/WebRTC)
