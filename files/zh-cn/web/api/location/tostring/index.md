---
title: "Location: toString()"
slug: Web/API/Location/toString
---

{{ApiRef("Location")}}

**`toString()`**{{domxref("Location")}}接口的 stringifier 方法返回包含整个 URL 的{{domxref("USVString")}}}。它是{{domxref("Location.href")}}的只读版本。

## 句法

```plain
string = object.toString();
```

## 例子

```js
// Let's imagine an <a id="myAnchor" href="https://developer.mozilla.org/zh-CN/docs/Location/toString"> element is in the document
var anchor = document.getElementById("myAnchor");
var result = anchor.toString(); // Returns: 'https://developer.mozilla.org/zh-CN/docs/Location/toString'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
