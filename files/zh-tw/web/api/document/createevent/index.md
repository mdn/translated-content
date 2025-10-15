---
title: Document：createEvent() 方法
slug: Web/API/Document/createEvent
l10n:
  sourceCommit: 08e04f121ea7b3a55e6ef47782d2d82fb053ca88
---

{{APIRef("DOM")}}{{deprecated_header}}

> [!WARNING]
> 許多與 `createEvent` 一起使用的方法，例如 `initCustomEvent`，已被淘汰。請改用[事件建構子](/zh-TW/docs/Web/API/CustomEvent)。

建立指定類型的[事件](/zh-TW/docs/Web/API/Event)。回傳的物件應先初始化，然後可以傳遞給 {{domxref("EventTarget.dispatchEvent")}}。

## 語法

```js-nolint
createEvent(type)
```

### 參數

- `type`
  - : 一個字串，表示要建立的事件類型。可能的事件類型包括 `"UIEvents"`、`"MouseEvents"`、`"MutationEvents"` 和 `"HTMLEvents"`。詳情請參見[備註](#備註)部分。

### 回傳值

一個 [Event](/zh-TW/docs/Web/API/Event) 物件。

## 範例

```js
// 建立事件。
const event = document.createEvent("Event");

// 定義事件名稱為「build」。
event.initEvent("build", true, true);

// 監聽該事件。
elem.addEventListener(
  "build",
  (e) => {
    // e.target 與 elem 相符
  },
  false,
);

// 目標可以是任何 Element 或其他 EventTarget。
elem.dispatchEvent(event);
```

## 備註

適合傳遞給 `createEvent()` 的事件類型字串列於 [DOM 標準——請參見步驟 2 的表格](https://dom.spec.whatwg.org/#dom-document-createevent)。請記住，大多數事件物件現在都有建構子，這是建立事件物件實例的現代推薦方式。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [建立與觸發事件](/zh-TW/docs/Web/API/Document_Object_Model/Events)
