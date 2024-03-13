---
title: "Location: href"
slug: Web/API/Location/href
---

{{ApiRef("Location")}}

{{domxref("Location")}} 接口的 **`href`** 属性是一个字符串化转换器 (stringifier), 返回一个包含了完整 URL 的 {{domxref("USVString")}} 值，且允许 href 的更新。

## 语法

```plain
string = object.href;
object.href = string;
```

## 范例

```js
// 假设文档中包含标签： <a id="myAnchor" href="https://developer.mozilla.org/en-US/Location/href">
var anchor = document.getElementById("myAnchor");
var result = anchor.href; // 返回：'https://developer.mozilla.org/en-US/Location/href'
```

## Specifications

{{Specifications}}

## 浏览器兼容性

{{Compat}}
