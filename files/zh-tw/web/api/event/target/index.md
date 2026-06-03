---
title: Event：target 屬性
short-title: target
slug: Web/API/Event/target
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

{{domxref("Event")}} 介面的 **`target`** 唯讀屬性是對事件被派發到的物件之參照。當事件處理器在事件的冒泡或捕獲階段被呼叫時，它與 {{domxref("Event.currentTarget")}} 不同。

## 值

相關聯的 {{domxref("EventTarget")}}。

## 範例

`event.target` 屬性可用於實作**事件委派**。

```js
// 建立一個列表
const ul = document.createElement("ul");
document.body.appendChild(ul);

const li1 = document.createElement("li");
const li2 = document.createElement("li");
ul.appendChild(li1);
ul.appendChild(li2);

function hide(evt) {
  // evt.target 指的是被點擊的 <li> 元素
  // 這與 evt.currentTarget 不同，在此上下文中的 currentTarget 指的是父層 <ul>
  evt.target.style.visibility = "hidden";
}

// 將監聽器附加到列表
// 當每個 <li> 被點擊時，它都會觸發
ul.addEventListener("click", hide);
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [學習：事件冒泡](/zh-TW/docs/Learn_web_development/Core/Scripting/Event_bubbling)
