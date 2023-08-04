---
title: Window.outerWidth
slug: Web/API/Window/outerWidth
---

{{APIRef}}

## 요약

Window\.outerWidth 는 브라우저 윈도우 바깥쪽의 폭을 얻어온다. 이것은 브라우저 윈도우의 사이드바와 가장자리 경계선을 포함한 폭을 나타내어 준다.

이 값은 읽기전용이다. 그리고 기본값이 없다.

## 문법

```js
outWindowWidth = window.outerWidth;
```

반환이 끝나면 outWindowWidth는 윈도우의 바깥경계를 포함한 너비(폭)를 담고 있다.

## 노트

이 사이즈를 변경하기 위해서는, {{domxref("window.resizeBy()")}} 또는 {{domxref("window.resizeTo()")}}를 참조하세요.

윈도우의 안쪽 폭 즉, 현재 표시되고있는 창의 폭을 얻으려면 {{domxref("window.innerWidth")}}를 참조하세요.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("window.outerHeight")}}, {{domxref("window.innerHeight")}}, {{domxref("window.innerWidth")}}
- {{domxref("window.resizeBy()")}}, {{domxref("window.resizeTo()")}}
