---
title: "Location: hostname"
slug: Web/API/Location/hostname
---

{{ApiRef("URL API")}}

{{domxref("Location")}}的 **`hostname`** 属性是包含了域名的一段 {{domxref("USVString")}}。

## Syntax

```plain
string = object.hostname;
object.hostname = string;
```

## Examples

```js
// 在文档流中声明了一个元素： <a id="myAnchor" href="https://developer.mozilla.org/zh-CN/docs/Location.hostname">
var anchor = document.getElementById("myAnchor");
var result = anchor.hostname; // Returns:'developer.mozilla.org'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
