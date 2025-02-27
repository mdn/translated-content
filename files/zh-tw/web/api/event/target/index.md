---
title: Event.target
slug: Web/API/Event/target
---

{{ApiRef("DOM")}}

指向最初觸發事件的 DOM 物件。與 {{domxref("event.currentTarget")}} 屬性不同的是，`event.currentTarget` 屬性總會指向目前於冒泡或捕捉階段正在處理該事件之事件處理器所註冊的 DOM 物件，而 `event.target` 屬性則是永遠指向觸發事件的 DOM 物件。

## 語法

```plain
theTarget = event.target
```

## 範例

The `event.target` property can be used in order to implement **event delegation**.

```js
// Make a list
var ul = document.createElement("ul");
document.body.appendChild(ul);

var li1 = document.createElement("li");
var li2 = document.createElement("li");
ul.appendChild(li1);
ul.appendChild(li2);

function hide(e) {
  // e.target refers to the clicked <li> element
  // This is different than e.currentTarget which would refer to the parent <ul> in this context
  e.target.style.visibility = "hidden";
}

// Attach the listener to the list
// It will fire when each <li> is clicked
ul.addEventListener("click", hide, false);
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## Compatibility notes

On IE 6-8 the event model is different. Event listeners are attached with the non-standard {{domxref('EventTarget.attachEvent')}} method. In this model, the event object has a {{domxref('Event.srcElement')}} property, instead of the `target` property, and it has the same semantics as `event.target`.

```js
function hide(e) {
  // Support IE6-8
  var target = e.target || e.srcElement;
  target.style.visibility = "hidden";
}
```

## 參見

- [Comparison of Event Targets](/zh-TW/docs/Learn_web_development/Core/Scripting/Event_bubbling)
