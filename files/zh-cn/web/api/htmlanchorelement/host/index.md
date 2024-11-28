---
title: HTMLAnchorElement：host 属性
slug: Web/API/HTMLAnchorElement/host
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

**`HTMLAnchorElement.host`** 属性是一个字符串，包含主机名，即 _hostname_，并且如果 URL 的*端口号*不为空，则后面会跟一个 `':'` 和 URL 的*端口号*。

## 值

一个字符串。

## 示例

```js
const anchor = document.createElement("a");

anchor.href = "https://developer.mozilla.org/zh-CN/HTMLAnchorElement";
anchor.host === "developer.mozilla.org";

anchor.href = "https://developer.mozilla.org:443/zh-CN/HTMLAnchorElement";
anchor.host === "developer.mozilla.org";
// 不包含端口号，因为 443 是该方案的默认端口

anchor.href = "https://developer.mozilla.org:4097/zh-CN/HTMLAnchorElement";
anchor.host === "developer.mozilla.org:4097";
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属接口 {{domxref("HTMLAnchorElement")}}。
