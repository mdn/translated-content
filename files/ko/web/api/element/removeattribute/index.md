---
title: Element.removeAttribute()
slug: Web/API/Element/removeAttribute
---

{{APIRef("DOM")}}

**`Element.removeAttribute()`** 메서드는 요소에서 주어진 이름의 특성을 제거합니다.

## 구문

```js
element.removeAttribute(attrName);
```

### 매개변수

- `attrName`
  - : 요소에서 제거할 특성 이름을 지정하는 {{domxref("DOMString")}}. 지정하지 않으면 오류 없이 아무 동작도 하지 않습니다.

### 반환 값

{{jsxref("undefined")}}.

## 사용 일람

많은 특성은 {{jsxref("null")}}을 대입했을 때 예상치 못한 동작을 하곤 합니다. 그러므로 특성을 삭제할 때 `null`을 직접 대입하거나, {{domxref("Element.setAttribute", "setAttribute()")}}의 매개변수로 제공하기보단 `removeAttribute()` 메서드를 사용해야 합니다.

## 예제

```js
// Given: <div id="div1" align="left" width="200px">
document.getElementById("div1").removeAttribute("align");
// Now: <div id="div1" width="200px">
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
