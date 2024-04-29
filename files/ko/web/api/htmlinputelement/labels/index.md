---
title: "HTMLInputElement: labels property"
short-title: labels
slug: Web/API/HTMLInputElement/labels
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("DOM")}}

**`HTMLInputElement.labels`** 읽기 전용 속성은 요소가 숨겨져 있지 않은 경우
{{HTMLElement("input")}} 요소와 연관된 {{HTMLElement("label")}} 요소의
{{domxref("NodeList")}}를 반환합니다.
요소의 타입이 `hidden`인 경우, 속성은 `null`을 반환합니다.

## 값

`<input>` 요소와 연관된 `<label>` 요소를 포함하는
{{domxref("NodeList")}}입니다.

## 예제

### HTML

```html
<label id="label1" for="test">Label 1</label>
<input id="test" />
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("test");
  for (const label of input.labels) {
    console.log(label.textContent); // "Label 1" 과 "Label 2"
  }
});
```

{{EmbedLiveSample("Examples", "100%", 30)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
