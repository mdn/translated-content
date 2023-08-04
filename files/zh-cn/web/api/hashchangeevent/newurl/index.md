---
title: HashChangeEvent.newURL
slug: Web/API/HashChangeEvent/newURL
---

{{APIRef("HTML DOM")}}

**`newURL`** 为 {{domxref("HashChangeEvent")}} 接口的只读属性，其值为窗口导航改变后的 URL。

## 语法

```plain
let newEventUrl = event.newURL;
```

### 返回值

{{domxref("DOMString")}}.

## 示例

```js
window.addEventListener("hashchange", function (event) {
  console.log("Hash changed to " + event.newURL);
});
```

## 规范

{{Specifications}}
