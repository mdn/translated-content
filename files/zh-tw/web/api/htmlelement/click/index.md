---
title: HTMLElement.click()
slug: Web/API/HTMLElement/click
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.click()`** 方法可以模擬滑鼠點擊一個元素。

當 `click()` 被使用在支援的元素（例如任一 {{HTMLElement("input")}} 元素），便會觸發該元素的點擊事件。事件會冒泡至 document tree（或 event chain）的上層元素，並觸發它們的點擊事件。其中的例外是：`click()` 方法不會讓 {{HTMLElement("a")}} 元素和接收到真實滑鼠點擊一樣進行頁面跳轉。

## 語法

```plain
elt.click()
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
