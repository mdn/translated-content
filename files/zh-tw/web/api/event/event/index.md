---
title: Event()
slug: Web/API/Event/Event
---

{{APIRef("DOM")}}

**`Event()`** constructor 能用來建立一個 {{domxref("Event", "事件")}} 。

## 語法

```plain
event = new Event(typeArg, eventInit);
```

### 參數

- _typeArg_
  - : 為一 {{domxref("DOMString")}} ，用來表示事件名稱。
- _eventInit_{{optional_inline}}

  - : 一個 `EventInit` object，包含以下欄位

    | 參數           | 可選 | 默認值  | 類型                  | 說明                              |
    | -------------- | ---- | ------- | --------------------- | --------------------------------- |
    | `"bubbles"`    | ●    | `false` | {{jsxref("Boolean")}} | 表示該事件是否懸浮（bubble up）。 |
    | `"cancelable"` | ●    | `false` | {{jsxref("Boolean")}} | 表示該事件是否已取消（canale）。  |

## 範例

```js
// 建立一個 bubbles up 、並未被取消的事件 「look」 。
var ev = new Event("look", { bubbles: true, cancelable: false });
document.dispatchEvent(ev);
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("Event")}}
