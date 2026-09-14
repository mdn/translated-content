---
title: HTMLElement：click() 方法
short-title: click()
slug: Web/API/HTMLElement/click
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.click()`** 方法會模擬滑鼠點擊一個元素。當在一個元素上呼叫此方法時，會觸發該元素的 {{domxref("Element/click_event", "click")}} 事件（除非該元素的 [`disabled`](/zh-TW/docs/Web/HTML/Reference/Attributes/disabled) 屬性已被設定）。

## 語法

```js-nolint
click()
```

### 參數

無。

### 回傳值

無（{{jsxref("undefined")}}）。

## 範例

當滑鼠游標移動到核取方塊上方時，模擬滑鼠點擊：

### HTML

```html
<form>
  <input type="checkbox" id="myCheck" />
</form>
```

### JavaScript

```js
const checkbox = document.getElementById("myCheck");

// 當滑鼠移入時，執行 myFunction
checkbox.addEventListener("mouseover", () => {
  // 模擬滑鼠點擊
  checkbox.click();
});

checkbox.addEventListener("click", () => {
  console.log("發生 click 事件");
});
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- 相關事件處理器
  - {{domxref("Element.click_event", "Element.onclick")}}
  - {{domxref("Element.dblclick_event", "Element.ondblclick")}}
  - {{domxref("Element.auxclick_event", "Element.onauxclick")}}
