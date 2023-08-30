---
title: HTMLElement.click()
slug: Web/API/HTMLElement/click
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.click()`** 메소는 엘리먼트에 마우스 클릭을 시뮬레이션합니다.

지원하는 엘리먼트({{HTMLElement("input")}} 등)에서 `click()` 이 사용될 때, 엘리먼트의 클릭 이벤트가 실행됩니다. 그 다음, 다큐먼트 트리(또는 이벤트 체인)에서 더 상위의 엘리먼트로 버블링되며 상위 엘리먼트의 클릭 이벤트를 실행합니다.

## 구문

```js
element.click();
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
