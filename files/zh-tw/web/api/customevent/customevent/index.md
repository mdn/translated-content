---
title: CustomEvent()
slug: Web/API/CustomEvent/CustomEvent
---

{{APIRef("DOM")}}

`CustomEvent()` constructor 可用來建立 {{domxref("CustomEvent")}}物件。

## 語法

```javascript
new CustomEvent(type);
new CustomEvent(type, options);
```

### 參數

- `type`
  - : 一個 {{domxref("DOMString")}} 用來表示事件名稱。
- `options`{{optional_inline}}
  - : 一個繼承自{{domxref("Event/Event", "Event()")}}的參數，其類型為 object。它有以下參數
    - `detail` {{optional_inline}}
      - : 用來表示事件相關的資訊。它能藉由 {{domxref("CustomEvent.detail")}} 屬性來取得值。
        其默認值為`null`。

## 回傳值

一個 {{domxref("CustomEvent")}} 物件。

## 範例

```javascript
// create custom events
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
// add an appropriate event listener
obj.addEventListener("animalfound", (e) => console.log(e.detail.name));
// dispatch the events
obj.dispatchEvent(catFound);
obj.dispatchEvent(dogFound);
// "cat" and "dog" logged in the console
```

可於 [Creating and triggering events](/zh-TW/docs/Web/Events/Creating_and_triggering_events) 找到更多範例。

## 規格

{{Specifications}}

## 瀏覽器支援度

{{Compat}}

## 其他

### 添加額外參數

在 Internet Explorer 9 或更高的版本，你可以用以下的方法給
`CustomEvent()` constructor 添加額外參數

```javascript
(function () {
  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(
      event,
      params.bubbles,
      params.cancelable,
      params.detail,
    );
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
})();
```

## 延伸閱讀

- {{domxref("CustomEvent")}}
- [Creating and triggering events](/zh-TW/docs/Web/Events/Creating_and_triggering_events)
