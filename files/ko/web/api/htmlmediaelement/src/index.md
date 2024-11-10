---
title: HTMLMediaElement.src
slug: Web/API/HTMLMediaElement/src
l10n:
  sourceCommit: 0230ecc4418a1e52bca6b4d03c4eb794f90d04f1
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.src`** 속성은 요소(element)에서 사용할 미디어 리소스의
URL을 나타내는 HTML 미디어 요소의 `src` 속성 값을 반영합니다.

> [!NOTE]
> 현재 해당 요소에서 사용 중인 미디어 리소스의 URL을 확인하는
> 가장 좋은 방법은 {{domxref("HTMLMediaElement.currentSrc", "currentSrc")}}
> 속성의 값을 살펴보는 것입니다. 이 속성은 {{domxref("HTMLSourceElement")}}
> ({{HTMLElement("source")}} 요소를 의미합니다)에 제공된 목록에서
> 최상의 또는 선호하는 미디어 리소스의 선택도 고려합니다.

## 값

요소에서 사용할 미디어 리소스의 URL을 포함하는 문자열 객체입니다.
이 속성은 HTML 요소의 `src` 속성 값을 반영합니다.

## 예제

```js
const obj = document.createElement("video");
console.log(obj.src); // ""
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- src를 정의하는 인터페이스는 {{domxref("HTMLMediaElement")}}입니다.
