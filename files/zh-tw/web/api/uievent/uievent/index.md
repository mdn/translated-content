---
title: UIEvent()
slug: Web/API/UIEvent/UIEvent
---

{{APIRef("UI Events")}}

**`UIEvent()`** constructor 是用來建立新的 {{domxref("UIEvent")}}。

## 語法

```plain
 event = new UIEvent(typeArg, UIEventInit);
```

### 參數

- _typeArg_
  - : 一個 {{domxref("DOMString")}} ，用來表示事件名稱
- _UIEventInit_{{optional_inline}}

  - : 一個 `UIEventInit` dictionary ，能接受以下參數：

    - `detail`
      - : 定義事件意義的值（類型：`long`，默認值：`0`）。關於事件的意義於 {{domxref("UIEvent.detail")}} 已有較詳盡的列表。
    - `view`
      - : 與事件相關的 {{domxref("Window")}}，默認值：`null`。

## 規格

{{Specifications}}

## 瀏覽器支援度

{{Compat}}

## 延伸閱讀

- {{domxref("UIEvent")}}，此 constructer 所建立的 object 的 interface。
