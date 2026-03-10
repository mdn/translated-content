---
title: Event：type 屬性
short-title: type
slug: Web/API/Event/type
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

{{domxref("Event")}} 介面的 **`type`** 唯讀屬性會回傳一個包含事件類型的字串。此屬性會在事件被建構時設定，且為通常用於參照特定事件的名稱，例如 `click`、`load` 或 `error`。

## 值

一個包含 {{domxref("Event")}} 類型的字串。

## 範例

此範例會在你按下鍵盤按鍵或點擊滑鼠按鈕時，記錄事件類型。

### HTML

```html
<p>按下任何按鍵或點擊滑鼠以取得事件類型。</p>
<p id="log"></p>
```

### JavaScript

```js
function getEventType(event) {
  const log = document.getElementById("log");
  log.innerText = `${event.type}\n${log.innerText}`;
}

// 鍵盤事件
document.addEventListener("keydown", getEventType); // 第一個
document.addEventListener("keypress", getEventType); // 第二個
document.addEventListener("keyup", getEventType); // 第三個

// 滑鼠事件
document.addEventListener("mousedown", getEventType); // 第一個
document.addEventListener("mouseup", getEventType); // 第二個
document.addEventListener("click", getEventType); // 第三個
```

### 結果

{{EmbedLiveSample('範例')}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{ domxref("EventTarget.addEventListener()") }}
- {{ domxref("EventTarget.removeEventListener()") }}
