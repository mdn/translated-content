---
title: HTMLMediaElement.seekable
slug: Web/API/HTMLMediaElement/seekable
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLMediaElement")}} 객체의 **`seekable`** 읽기 전용 속성은 사용자 에이전트가 `seekable` 속성에 접근할 때 찾을 수 있는 미디어 리소스의 범위를 나타내는 새로운 정적 [정규화된 `TimeRanges` 객체](/ko/docs/Web/API/TimeRanges#normalized_timeranges_objects)를 반환합니다.

## 값

`seekable` 속성에 접근할 때 사용자 에이전트가 찾을 수 있는 미디어 리소스의 범위를 나타내는 새로운 정적 [정규화된 TimeRanges 객체](/ko/docs/Web/API/TimeRanges#normalized_timeranges_objects)입니다.

## 예제

```js
const video = document.querySelector("video");
const timeRangesObject = video.seekable;
const timeRanges = [];
// 객체를 살펴보고 배열을 출력합니다
for (let count = 0; count < timeRangesObject.length; count++) {
  timeRanges.push([timeRangesObject.start(count), timeRangesObject.end(count)]);
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- seekable을 정의하는 인터페이스는 {{domxref("HTMLMediaElement")}}입니다.
- [미디어 소스 확장 API](/ko/docs/Web/API/Media_Source_Extensions_API)
- [미디어 버퍼링, 검색 및 시간 범위](/ko/docs/Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges)
