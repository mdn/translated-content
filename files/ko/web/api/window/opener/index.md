---
title: Window.opener
slug: Web/API/Window/opener
---

{{APIRef("HTML DOM")}}

{{domxref("Window")}} 인터페이스의 **`opener`** 속성은 {{domxref("Window.open", "open()")}}을 사용해 현재 창을 열었던 창의 참조를 반환합니다.

예제로 설명하자면, 창 `A`가 창 `B`를 열었을 때 `B.opener`는 `A`를 반환합니다.

## 구문

```js
const openerWindow = window.opener;
```

### 값

{{domxref("window.open()")}}을 사용하거나 [`target`](/ko/docs/Web/HTML/Element/a#target) 특성을 지정한 링크로 현재 창을 연 {{domxref("Window")}}. 현재 창이 다른 창에 의해 생성됐거나 링크로 열리지 않았다면 {{jsxref("null")}}.

[최근 브라우저](https://caniuse.com/#search=noopener)에서는 {{htmlelement("a")}} 요소에 `rel="noopener noreferrer"` 특성을 지정하면 `window.opener` 참조 설정을 방지합니다. 따라서 생성된 창의 `opener` 속성에 접근해도 `null`을 반환합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
