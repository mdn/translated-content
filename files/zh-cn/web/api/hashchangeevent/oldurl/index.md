---
title: HashChangeEvent.oldURL
slug: Web/API/HashChangeEvent/oldURL
---

{{APIRef("HTML DOM")}}

**`oldURL`** 为 {{domxref("HashChangeEvent")}} 接口的只读属性，其值为窗口导航改变前的 URL。

## 语法

```plain
let oldEventUrl = event.oldURL;
```

### 返回值

{{domxref("DOMString")}}.

## 示例

```js
window.addEventListener("hashchange", function (event) {
  console.log("Hash changed from " + event.oldURL);
});
```

## 规范

{{Specifications}}
