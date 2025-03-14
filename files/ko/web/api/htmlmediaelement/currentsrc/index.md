---
title: HTMLMediaElement.currentSrc
slug: Web/API/HTMLMediaElement/currentSrc
l10n:
  sourceCommit: 0230ecc4418a1e52bca6b4d03c4eb794f90d04f1
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.currentSrc`** 속성에는 선택한 미디어 리소스의 절대 URL이
포함되어 있습니다. 예를 들어 웹 서버가 사용자 디스플레이의 해상도에 따라
미디어 파일을 선택하는 경우 이런 일이 발생할 수 있습니다. `networkState` 속성이
`EMPTY`인 경우 값은 빈 문자열입니다.

## 값

선택한 미디어 소스의 절대 URL을 포함하는 문자열 객체입니다.
`networkState`가 `EMPTY`라면 빈 문자열, 아니라면 미디어 요소(element) 내에 포함된 {{domxref("HTMLSourceElement")}}로
나열한 리소스 중 하나가 됩니다. 만약 {{HTMLElement("source")}} 요소가
제공되지 않은 경우 값 또는 src가 됩니다.

## 예제

```js
const obj = document.createElement("video");
console.log(obj.currentSrc); // ""
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- currentSrc를 정의하는 인터페이스는 {{domxref("HTMLMediaElement")}}입니다.
