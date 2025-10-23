---
title: Document：readyState 屬性
slug: Web/API/Document/readyState
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

**`Document.readyState`** 屬性描述{{domxref("document", "文件", "", 1)}}的載入狀態。當此屬性的值改變時，{{domxref("Document/readystatechange_event", "readystatechange")}} 事件會在 {{domxref("document")}} 物件上觸發。

## 值

文件的 `readyState` 可以是以下之一：

- `loading`
  - : {{domxref("document", "文件", "", 1)}}仍在載入中。
- `interactive`
  - : 文件已完成載入並且已被解析，但子資源（例如腳本、圖片、樣式表和框架）仍在載入中。此狀態表示 {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} 事件即將觸發。
- `complete`
  - : 文件和所有子資源已完成載入。此狀態表示 {{domxref("Window/load_event", "load")}} 事件即將觸發。

## 範例

### 不同的載入狀態

```js
switch (document.readyState) {
  case "loading":
    // 文件正在載入中。
    break;
  case "interactive": {
    // 文件已完成載入，我們可以存取 DOM 元素。
    // 子資源（例如腳本、圖片、樣式表和框架）仍在載入中。
    const span = document.createElement("span");
    span.textContent = "一個 <span> 元素。";
    document.body.appendChild(span);
    break;
  }
  case "complete":
    // 頁面已完全載入。
    console.log(
      `第一條 CSS 規則是：${document.styleSheets[0].cssRules[0].cssText}`,
    );
    break;
}
```

### 使用 readystatechange 作為 DOMContentLoaded 事件的替代方案

```js
// DOMContentLoaded 事件的替代方案
document.onreadystatechange = () => {
  if (document.readyState === "interactive") {
    initApplication();
  }
};
```

### 使用 readystatechange 作為 load 事件的替代方案

```js
// load 事件的替代方案
document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    initApplication();
  }
};
```

### 使用 readystatechange 事件監聽器在 DOMContentLoaded 之前插入或修改 DOM

```js
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "interactive") {
    initLoader();
  } else if (event.target.readyState === "complete") {
    initApp();
  }
});
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- 相關事件：
  - {{domxref("Document/readystatechange_event", "readystatechange")}}
  - {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}
  - {{domxref("Window/load_event", "load")}}
