---
title: Navigator：buildID 属性
slug: Web/API/Navigator/buildID
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{ApiRef("HTML DOM")}}{{Non-standard_Header}}

返回浏览器的构建标识符。在现代浏览器中，为了保护隐私，该属性现在返回一个固定的时间戳，例如 Firefox 64 及更高版本中返回 `20181001000000`。

## 值

一个表示应用程序构建标识符的字符串。构建 ID 的格式为 `YYYYMMDDHHMMSS`。

## 示例

```js
console.log(navigator.buildID);
```

## 规范

未得到任何公共标准支持。

## 浏览器兼容性

{{Compat}}
