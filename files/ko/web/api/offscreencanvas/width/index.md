---
title: OffscreenCanvas.width
slug: Web/API/OffscreenCanvas/width
l10n:
  sourceCommit: f6ff6e14c5af7cb9ed701d7f4506f770014c704f
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

**`width`** 속성은 {{domxref("OffscreenCanvas")}} 객체에 할당된 너비를 반환합니다.

## 값

## 예제

새로운 offscreen 캔버스를 생성하고 높이를 설정하거나 반환합니다.

```js
const offscreen = new OffscreenCanvas(256, 256);
offscreen.width; // 256
offscreen.width = 512;
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 더 보기

- {{domxref("OffscreenCanvas")}}, 프로퍼티가 속한 인터페이스
