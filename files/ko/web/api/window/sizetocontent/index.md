---
title: "Window: sizeToContent() method"
short-title: sizeToContent()
slug: Web/API/Window/sizeToContent
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}{{Non-standard_Header}}

**`Window.sizeToContent()`** 메서드는 콘텐츠에 따라 윈도우 사이즈를 조정합니다. 이 기능이 제대로 동작하려면, 해당 함수가 호출될 때 DOM 콘텐츠가 로드되어 있어야 합니다. 예를 들어, {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} 이벤트가 발생한 이후에 호출해야 합니다.

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
