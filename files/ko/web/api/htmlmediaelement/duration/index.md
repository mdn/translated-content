---
title: HTMLMediaElement.duration
slug: Web/API/HTMLMediaElement/duration
l10n:
  sourceCommit: 0230ecc4418a1e52bca6b4d03c4eb794f90d04f1
---

{{APIRef("HTML DOM")}}

"읽기 전용" {{domxref("HTMLMediaElement")}} 속성
**`duration`** 은 요소의 미디어 길이를 초 단위로 나타냅니다.

## 값

미디어의 지속 시간을 초 단위로 나타내는 배정밀도 부동 소수점 값입니다.
사용 가능한 미디어 데이터가 없으면 `NaN` 값이 반환됩니다. 만약 요소의
미디어에 라이브 미디어 스트림과 같이 전체 길이(초)가 없는 경우
`duration`은 `+Infinity`입니다.

## 예제

```js
const obj = document.createElement("video");
console.log(obj.duration); // NaN
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [웹 미디어 기술](/ko/docs/Web/Media)
- 미디어의 현재 재생 위치는 {{domxref("HTMLMediaElement.currentTime")}}를 참고하세요.
- {{HTMLElement("audio")}}와 {{HTMLElement("video")}} 요소들을 참고하세요.
