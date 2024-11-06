---
title: "Location: hash"
slug: Web/API/Location/hash
---

{{ APIRef("Location") }}

{{domxref("Location")}} 接口的 **`hash`** 属性返回一个 {{domxref("USVString")}}，其中会包含 URL 标识中的 `'#'` 和 后面 URL 片段标识符。

这里 fragment 不会经过[百分比编码](/zh-CN/docs/Glossary/percent-encoding)（URL 编码）。如果 URL 中没有 fragment，该属性会包含一个空字符串，`""`

## Syntax

```plain
string = object.hash;
object.hash = string;
```

## Examples

```html
<a id="myAnchor" href="/zh-CN/docs/Location.href#Examples">Examples</a>
<script>
  var anchor = document.getElementById("myAnchor");
  console.log(anchor.hash); // 返回'#Examples'
</script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
