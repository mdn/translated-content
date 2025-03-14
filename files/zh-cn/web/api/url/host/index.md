---
title: URL：host 属性
slug: Web/API/URL/host
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

{{domxref("URL")}} 接口的 **`host`** 属性是一个包含主机信息（即{{domxref("URL.hostname", "主机名", "", 1)}}）的字符串，然后，如果 URL 的{{glossary("port", "端口")}}非空，则会出现 `':'`，后跟 URL 的{{domxref("URL.port", "端口", "", 1)}}。

## 值

字符串。

## 示例

```js
let url = new URL("https://developer.mozilla.org/zh-CN/docs/Web/API/URL/host");
console.log(url.host); // "developer.mozilla.org"

url = new URL("https://developer.mozilla.org:443/zh-CN/docs/Web/API/URL/host");
console.log(url.host); // "developer.mozilla.org"
// 端口号未包含在内，因为 443 是该方案的默认端口。

url = new URL("https://developer.mozilla.org:4097/zh-CN/docs/Web/API/URL/host");
console.log(url.host); // "developer.mozilla.org:4097"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属的 {{domxref("URL")}} 接口。
