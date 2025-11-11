---
title: Location：hostname 属性
slug: Web/API/Location/hostname
l10n:
  sourceCommit: b68a1e071ee203718f5a6300472b820bc3a71885
---

{{ApiRef("URL API")}}

{{domxref("Location")}} 接口的 **`hostname`** 属性是包含 URL {{glossary("domain name", "域名")}}的字符串。

## 值

字符串。

## 示例

```js
console.log(window.location.hostname);
// developer.mozilla.org

const anchor = document.createElement("a");
anchor.href = "https://developer.mozilla.org:4097/";
console.log(anchor.hostname === "developer.mozilla.org");
// 端口号未包含在主机名中
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
