---
title: KeyboardEvent()
slug: Web/API/KeyboardEvent/KeyboardEvent
---

{{APIRef("UI Events")}}

**`KeyboardEvent()`** constructor 能用來建立一個新的 {{domxref("KeyboardEvent")}}。

## 語法

```plain
 event = new KeyboardEvent(typeArg, KeyboardEventInit);
```

### 參數

- `type`
  - : 一 {{domxref("DOMString")}} 用來表示事件名稱。
- `options` {{optional_inline}}

  - : 一個 `KeyboardEventInit` dictionary，能接受以下參數：

    - `key` {{optional_inline}}
      - : 一個字符串，默認值為 `""`，用來設定 {{domxref("KeyboardEvent.key")}} 的值。
    - `code` {{optional_inline}}
      - : 一個字符串，默認值為 `""`，用來設定 {{domxref("KeyboardEvent.code")}} 的值。
    - `location` {{optional_inline}}
      - : 一個 `unsigned long`，默認值為 `0`，用來設定 {{domxref("KeyboardEvent.location")}} 的值。
    - `ctrlKey` {{optional_inline}}
      - : 一個 {{jsxref("Boolean")}}，默認值為 `false`，用來設定 {{domxref("KeyboardEvent.ctrlKey")}} 的值。
    - `shiftKey` {{optional_inline}}
      - : 一個 {{jsxref("Boolean")}}，默認值為 `false`，用來設定 {{domxref("KeyboardEvent.shiftKey")}} 的值。
    - `altKey` {{optional_inline}}
      - : 一個 {{jsxref("Boolean")}}，默認值為 `false`，用來設定 {{domxref("KeyboardEvent.altKey")}} 的值。
    - `metaKey` {{optional_inline}}
      - : 一個 {{jsxref("Boolean")}}，默認值為 `false`，用來設定 {{domxref("KeyboardEvent.metaKey")}} 的值。
    - `repeat` {{optional_inline}}
      - : 一個 {{jsxref("Boolean")}}，默認值為 `false`，用來設定 {{domxref("KeyboardEvent.repeat")}} 的值。
    - `isComposing` {{optional_inline}}
      - : 一個 {{jsxref("Boolean")}}，默認值為 `false`，用來設定 {{domxref("KeyboardEvent.isComposing")}} 的值。
    - `charCode` {{optional_inline}}
      - : 一個 `unsigned long`，默認值為 `0`，用來設定 {{domxref("KeyboardEvent.charCode")}} 的值。
    - `keyCode` {{optional_inline}}
      - : 一個 `unsigned long`，默認值為 `0`，用來設定 {{domxref("KeyboardEvent.keyCode")}} 的值。
    - `which` {{optional_inline}}
      - : 一個 `unsigned long`，默認值為 `0`，用來設定 {{domxref("KeyboardEvent.which")}} 的值

> **備註：** _`KeyboardEventInit` dictionary 亦接受 {{domxref("UIEvent.UIEvent", "UIEventInit")}} 和{{domxref("Event.Event", "EventInit")}} 所接受的參數。_

## 規格

{{Specifications}}

## 瀏覽器支援度

{{Compat}}

## 延伸閱讀

- {{domxref("KeyboardEvent")}} ，此 constructer 所建立的 object 的 interface
