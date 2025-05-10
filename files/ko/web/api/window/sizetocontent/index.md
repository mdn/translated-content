---
title: "Window: sizeToContent() method"
short-title: sizeToContent()
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}{{Non-standard_Header}}

In order for it to work, the DOM content should be loaded when
this function is called—for example, once the {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} event has
been thrown.
**`Window.sizeToContent()`** 메서드는 콘텐츠에 따라 윈도우 사이즈를 조정합니다. 이를 실행하기 위해 DOM 콘첸츠는 {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} 가 발생한 이후처럼, 해당 함수가 호출될 때 로드되어 있어야 합니다.

파이어폭스 20부터는 윈도우는 사용자의 상호작용의 용이성을 위해 최소 사이즈가 제한됩니다.

## 구문

```js-nolint
sizeToContent()
```

### 파라미터

없습니다.

### 반환 값

({{jsxref("undefined")}})이 아닙니다.

## 예제

```js
window.sizeToContent();
```

## 명세서

이 특성은 명세에 특정되지 않습니다.

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Window")}}
