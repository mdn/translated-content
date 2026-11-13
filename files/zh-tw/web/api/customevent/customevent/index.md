---
title: CustomEvent：CustomEvent() 建構子
slug: Web/API/CustomEvent/CustomEvent
l10n:
  sourceCommit: 14aec55e57117d0dc4a916112e23d310908e9937
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

**`CustomEvent()`** 建構子用於建立新的 {{domxref("CustomEvent")}} 物件。

## 語法

```js-nolint
new CustomEvent(type)
new CustomEvent(type, options)
```

### 參數

- `type`
  - : 一個字串，用於提供事件名稱。事件名稱區分大小寫。
- `options` {{optional_inline}}
  - : 一個物件，_除了 {{domxref("Event/Event", "Event()")}} 定義的屬性之外_，還可以包含以下屬性：
    - `detail` {{optional_inline}}
      - : 一個與事件相關的值。可以透過事件處理器中的 {{domxref("CustomEvent.detail")}} 屬性來存取此值。預設為 `null`。

### 回傳值

一個新的 {{domxref("CustomEvent")}} 物件。

## 範例

```js
// 建立自訂事件
const catFound = new CustomEvent("animalfound", {
  detail: {
    name: "cat",
  },
});
const dogFound = new CustomEvent("animalfound", {
  detail: {
    name: "dog",
  },
});

const element = document.createElement("div"); // 建立一個 <div> 元素

// 新增事件監聽器
element.addEventListener("animalfound", (e) => console.log(e.detail.name));

// 觸發事件
element.dispatchEvent(catFound);
element.dispatchEvent(dogFound);

// 控制台會輸出「cat」和「dog」
```

更多範例請參見[建立與觸發事件](/zh-TW/docs/Web/API/Document_Object_Model/Events)。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("CustomEvent")}}
- [建立與觸發事件](/zh-TW/docs/Web/API/Document_Object_Model/Events)
