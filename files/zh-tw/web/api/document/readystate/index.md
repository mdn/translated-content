---
title: Document.readyState
slug: Web/API/Document/readyState
---

{{APIRef("DOM")}}

{{ domxref("document") }} 的 **`Document.readyState`** 屬性描述文件的讀取狀態。

### 數值

文件的 **readyState** 數值如下：

- loading
  - : {{ domxref("document") }} 正在讀取中。
- interactive
  - : 文件已經完成讀取和解析，但是其他的子資源，如「圖片樣式層次表」，仍然在讀取。這個狀態表示 [`DOMContentLoaded`](/zh-TW/docs/Web/API/Document/DOMContentLoaded_event) 事件已經被觸發。
- complete
  - : 文件及子資源都完成讀取。這個狀態表示 [`load`](/zh-TW/docs/Web/API/Window/load_event) 事件即將被觸發。

當這個屬性的數值改變時， [`readystatechange`](/zh-TW/docs/Web/API/Document/readystatechange_event) 事件在 {{ domxref("document") }} 上觸發。

## 表達式

```js
var string = document.readyState;
```

## 範例

### 不同的狀態

```js
switch (document.readyState) {
  case "loading":
    // 文件讀取中。
    break;
  case "interactive":
    // 文件已經完成讀取。可以使用 DOM 元素。
    var span = document.createElement("span");
    span.textContent = "A <span> element.";
    document.body.appendChild(span);
    break;
  case "complete":
    // 頁面已經完成讀取。
    console.log(
      "The first CSS rule is: " + document.styleSheets[0].cssRules[0].cssText,
    );
    break;
}
```

### readystatechange 替代 DOMContentLoaded

```js
// alternative to DOMContentLoaded event
document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    initApplication();
  }
};
```

### readystatechange 替代 load

```js
// alternative to load event
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    initApplication();
  }
};
```

## 規範

{{Specifications}}

## 參見

- 相關事件：
  - {{domxref("Document/readystatechange_event", "readystatechange")}}
  - {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}
  - {{domxref("Window/load_event", "load")}}
