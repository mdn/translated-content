---
title: Location：host 属性
slug: Web/API/Location/host
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("Location")}}

{{domxref("Location")}} 接口的 **`host`** 属性是一个字符串，包含主机名（即 {{domxref("Location.hostname", "hostname")}}），如果 URL 的{{glossary("port", "端口")}}非空，则会在主机名后追加一个 `":"` 和 {{domxref("Location.port", "port")}}。如果 URL 没有 `hostname`，则该属性的值为空字符串 `""`。

更多详细信息请参阅 {{domxref("URL.host")}}。

## 值

字符串。

## 示例

```js
const anchor = document.createElement("a");

anchor.href = "https://developer.mozilla.org/zh-CN/Location.host";
console.log(anchor.host === "developer.mozilla.org");

anchor.href = "https://developer.mozilla.org:443/zh-CN/Location.host";
console.log(anchor.host === "developer.mozilla.org");
// 由于 443 是该协议方案的默认端口号，因此未包含此端口号。

anchor.href = "https://developer.mozilla.org:4097/zh-CN/Location.host";
console.log(anchor.host === "developer.mozilla.org:4097");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
