---
title: Event.currentTarget
slug: Web/API/Event/currentTarget
---

{{APIRef("DOM")}}

{{domxref("Event")}} 介面的唯讀屬性 **`currentTarget`** 會標明事件指向（current target）、還有該事件所遍歷的 DOM。屬性總會指向當時處理該事件的事件監聽器所註冊的 DOM 物件，而 {{domxref("event.target")}} 屬性則是永遠指向觸發事件的 DOM 物件。

## 範例

`event.currentTarget` 在把相同的事件監聽器，附加到多個元素時，會出現很有趣的事情：

```js
function hide(e) {
  e.currentTarget.style.visibility = "hidden";
  // 在這個函式用於事件監聽器時： this === e.currentTarget
}

var ps = document.getElementsByTagName("p");

for (var i = 0; i < ps.length; i++) {
  ps[i].addEventListener("click", hide, false);
}

// 單擊四周的話 p 元素就會消失
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [事件指向的比較](/zh-TW/docs/Learn_web_development/Core/Scripting/Event_bubbling)
