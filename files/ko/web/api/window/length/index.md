---
title: Window.length
slug: Web/API/Window/length
---

{{ ApiRef() }}

window의 frame 개수를 반환합니다. ({{HTMLElement("frame")}} 또는 {{HTMLElement("iframe")}} 요소들 중 하나)

## 신텍스

```js
framesCount = window.length;
```

- `framesCount` 는 frame의 개수이다.

## 예제

```js
if (window.length) {
  // document의 subframes
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
