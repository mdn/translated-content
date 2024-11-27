---
title: Location：hash 属性
slug: Web/API/Location/hash
l10n:
  sourceCommit: a2847ff3788f224ffb4cdf05cb0139e07fde7533
---

{{ APIRef("Location") }}

{{domxref("Location")}} 接口的 **`hash`** 属性返回一个字符串，其中包含一个 `'#'`，后跟 URL 的片段标识符——URL 试图指向的页面上的 ID。

该片段标识符没有进行{{Glossary("Percent-encoding", "百分号编码")}}。如果 URL 没有片段标识符，则此属性的值为空字符串 `""`。

## 值

字符串。

## 示例

```html
<a id="myAnchor" href="/zh-CN/docs/Location.href#示例">示例</a>
<script>
  const anchor = document.getElementById("myAnchor");
  console.log(anchor.hash); // '#示例'
</script>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
